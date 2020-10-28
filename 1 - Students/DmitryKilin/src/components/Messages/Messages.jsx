import './style.css'
import React, { Component } from 'react'
import Message from '../Message/Message.jsx'
import ChatInput from '../ChatInput/ChatInput.jsx'
import {CurrentUser} from '../../moduls/User/User'
import {chatBot} from "../../moduls/Bot/Bot"

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {sendMessage} from '../../store/actions/messages.actions.js'

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    send = (message) => {
        this.props.sendMessage(message)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let messages = this.props.messagesFromRedux
        let lastMessage = messages[messages.length-1]

        if (lastMessage && lastMessage.sender === CurrentUser.name) {
            let answer = chatBot.getAnswer(lastMessage)
            setTimeout(() => {this.sendMessage(answer)}, 300)
        }
    }

    render() {

        let messages = this.props.messagesFromRedux;
        let messagesArray = messages.map((msg, i) => <Message sender = { msg.sender } text = { msg.text }  key = { i }/>).reverse();
        return (
            <div className="messages-container">

                <ChatInput send = { this.send } />
                    <div className="msg-wrap">
                        { messagesArray }
                    </div>

            </div>
        )
    }
}

const mapStateToProps = ({messagesReducer}) => ({
    messagesFromRedux: messagesReducer.messages
});
const mapDispatchToProps = dipatch => bindActionCreators({ sendMessage }, dipatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages)