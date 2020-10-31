import './style.css';
import React, { Component } from 'react';

import Message from '../Message/Message.jsx';
import ChatInput from '../ChatInput/ChatInput.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../store/actions/messages.action.js';


class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],    
        };
    }
    send = (txt) => {
        this.props.sendMessage(txt, 'Me')
    };

   /*  sendMessage = txt => {
        let { messages } = this.state;
        this.setState({
            messages: [...messages, { sender: 'Me', text: txt }],
        })
    } */

    componentDidMount() {
        this.scrollDown();
      }
    
      componentDidUpdate() {
        this.scrollDown();}
    /*     let { messages } = this.props;
        if (messages[messages.length - 1].sender != 'Bot') {
           setTimeout(() => {
               this.setState({
                   messages: [...messages, { sender: 'Bot', text: 'Я робот, отстань' }],
               })
           }, 500); */ 
       
       
      
       scrollDown = () => {
            this.scrollPointer.scrollIntoView({ behavior: "smooth" });
          };
    
    
  
    render() {
        
        let { messagesFromRedux, chatName } = this.props;
        let messagesArray = "";
        
        if (this.props.chatName != undefined) {
            console.log(this.props.chatName);
            messagesArray = messagesFromRedux.map((msg, i) => ( 
            <Message sender = { msg.sender ==='Me' ? msg.sender : chatName } 
            text = { msg.text }  key = { i }/>
            ));
        } else{
            messagesArray = " ";
        }
   


        return (
            <div className="msg-main">
                <div className="msg-wrap" >
                    { messagesArray }
                    <div
                         ref={(el) => {
                         this.scrollPointer = el;
                         }}
                    ></div>
                </div>
                 <ChatInput send = { this.send } />
            </div>
        );
    }}

 

const mapStateToProps = ({ messagesReducer, chatsReducer, contactsReducer }) => ({
    messagesFromRedux: messagesReducer.messages,
    chatsFromRedux: chatsReducer.chats,
    contactsFromRedux: contactsReducer.contacts
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);