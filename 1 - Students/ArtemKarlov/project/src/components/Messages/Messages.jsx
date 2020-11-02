import './style.css';
import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sendMessage} from '../../store/actions/messages.actions.js';

import Message from '../Message/Message.jsx';
import ChatInput from '../ChatInput/ChatInput.jsx';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    addMessage = (message, sender = this.props.account.id) => {
        const {messages, chatId} = this.props;
        if (message.trim() !== '') {
            const messageId = `msg-${messages.length}`
            this.props.sendMessage(messageId, sender, message, chatId);
        }
    }

    componentDidMount() {
        const {chatId, currentChat} = this.props;         
        if ((chatId == 'chatBot-0') && (currentChat.messages.length == 0)) {
            setTimeout(() => {this.addMessage('Wake up, Neo…', 'Bot')}, 1000);            
        }
        const MessageElements = document.querySelectorAll(".chat-dialog__message");
        if (MessageElements.length != 0) {
            const lastMessageElement = MessageElements[MessageElements.length-1];
            lastMessageElement.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
        
    }

    componentDidUpdate() {     
        const {chatId, currentChat} = this.props;         
        if ((chatId == 'chatBot-0') && (currentChat.messages.length == 0)) {
            setTimeout(() => {this.addMessage('Wake up, Neo…', 'Bot')}, 1000);            
        }
        const MessageElements = document.querySelectorAll(".chat-dialog__message");
        if (MessageElements.length != 0) {
            const lastMessageElement = MessageElements[MessageElements.length-1];
            lastMessageElement.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
    }

    render() {
        const {messages, currentChat, account} = this.props;
        const chatMessagesId = currentChat.messages;

        const chatMessages = messages.filter((msg) => chatMessagesId.includes(msg.id));

        let messagesArray = chatMessages.map((msg, index) => {
            const isSenderMe = (account.id === msg.sender) ? true : false;
            return <Message key={msg.id} isSenderMe={isSenderMe} message={msg.text} />
        });

        return (
            <Fragment>
                <div className="chat__dialog chat-dialog">
                    { messagesArray }                    
                </div> 
                <ChatInput getMessage = { this.addMessage } /> 
            </Fragment>
               
        );
    }
}

const mapStateToProps = ({messagesReducer, accountReducer}) => ({
    messages: messagesReducer.messages,
    account: accountReducer.account,
});
const mapDispatchToProps = dispatch => bindActionCreators({sendMessage}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
