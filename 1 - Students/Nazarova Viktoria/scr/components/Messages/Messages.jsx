import './style.css'
import React, { Component } from 'react'

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { sender: 'Bot', text: '' },
                { sender: 'Me', text: 'Some text' },
                { sender: 'Me', text: 'Some text' },
                { sender: 'Bot', text: '...' }
            ]
        };
    }


    sendMessage = () => {
        let { messages, text } = this.state;
        this.setState({
            messages: [...messages, { sender: 'Me', text: txt }]
        });
    };

    changeText = evt => {
        let { text } = this.state;
        let val = evt.target.value;
        this.setState({ text: val });
    };

    send = () => {
        this.props.send(this.state.text);
        this.setState({ text: '' });
    };

    componentDidUpdate() {
        let {messages} = this.state;
        let lastMessage = messages[messages.length - 1]

        if (lastMessage.sender === 'me') {

            setTimeout(() => this.setState({
                messages: [...this.state.messages, {sender: 'bot', message: 'привет, я бот'}]
            }), 1500)
        }
    }

    render() {
        let { message } = this.state;
        let messageArray = message.map((msg, i) => <Message sender={msg.sender} text={msg.text} key={i}/>);

        return (
            <div className='d-flex flex-column .align-items-center'>
                <div className='msg-wrap'>
                    {messageArray}
                </div>
                <ChatInput send {...this.sendMessage}/>
                    <input type="text"/>
                    <button>Send</button>
            </div>
        );
    }
}