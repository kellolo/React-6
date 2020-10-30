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

    addMessage = (message, sender = 'Me') => {
        let {messages} = this.props;
        if (message.trim() !== '') {
            const messageId = `msg_${messages.length}`
            this.props.sendMessage(messageId, sender, message);
        }
    }

    componentDidMount() {
        const MessageElements = document.querySelectorAll(".chat-dialog__message");
        const lastMessageElement = MessageElements[MessageElements.length-1];
        lastMessageElement.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    componentDidUpdate() {        
        const MessageElements = document.querySelectorAll(".chat-dialog__message");
        const lastMessageElement = MessageElements[MessageElements.length-1];
        lastMessageElement.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    render() {
        let {messages} = this.props;
        let messagesArray = messages.map((msg, index) => <Message key={msg.id} sender={msg.sender} message={msg.text} />)

        return (
            <Fragment>
                <div className="chat__dialog chat-dialog">
                    { messagesArray }                    
                </div> 
                <ChatInput sendMessage = { this.addMessage } /> 
            </Fragment>
               
        );
    }
}

const mapStateToProps = ({messagesReducer}) => ({
    messages: messagesReducer.messages,
});
const mapDispatchToProps = dispatch => bindActionCreators({sendMessage}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
