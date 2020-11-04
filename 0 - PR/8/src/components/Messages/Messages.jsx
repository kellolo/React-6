import './style.css'
import React, { Component } from 'react'

import Message from '../Message/Message.jsx'

import ChatInput from '../ChatInput/ChatInput.jsx'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../store/actions/messages.actions.js';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    send = txt => {
        this.props.sendMessage(txt, 'Me');
    }

    componentDidMount() {
        console.log('MOUNTED')
    }

    componentDidUpdate() {
        let { messages } = this.props;
        if (messages && messages[messages.length - 1].sender != 'Bot') {
            setTimeout(() => {
                this.setState({
                    messages: [...messages, { sender: 'Bot', text: 'Some text here...' }],
                })
            }, 500);
        }
    }

    render() {
        let { messages } = this.props;
        let messagesArray = messages.map((msg, i) => <Message sender = { msg.sender } text = { msg.text }  key = { i }/>);

        return (
            <div className="d-flex flex-column align-items-center">
                <div className="msg-wrap">
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