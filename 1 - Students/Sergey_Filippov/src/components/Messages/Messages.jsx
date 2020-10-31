import './style.css'
import React, { Component } from 'react'

import Message from '../Message/Message.jsx'

import ChatInput from '../ChatInput/ChatInput.jsx'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../store/actions/messages.action.js';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    send = txt => {
        this.props.sendMessage(txt, 'Me');
    }

   
        

    componentDidUpdate() {
        let { messages } = this.state;
        if (messages.length % 2 === 1) {  
            setTimeout(() =>
            this.setState(
                { messages: [ ...messages, {sender: "bot" , text: 'Не приставай ко мне, я робот!'} ] }),
            1000);
            }
        }

    render() {
        let { messages } = this.state;
        let messagesArray = messages.map((msg, i) => <Message  sender = { msg.sender } text = { msg.text }  key = { i }/>);

        return (
            <div className="d-flex flex-column align-items-center msgs">
                <div className="msg-wrap d-flex flex-column">
                    { messagesArray }
                </div>
                <ChatInput send = { this.send } />
            </div>
        )
    }
}
const mapStateToProps = ({ messagesReducer }) => ({
    messages: messagesReducer.messages
});
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Messages);