import React from 'react';
import './style.css'
import Message from '../Message/Message.jsx'
import ChatInput from '../ChatInput/ChatInput.jsx'

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { sender: 'Me', text: 'Привет' },
                { sender: 'Bot', text: 'Привет,я бот этого чата' },
                { sender: 'Me', text: 'Привет' },
                { sender: 'Bot', text: 'Задай свой вопрос' },
            ]
        }
    }

    sendMessage = (txt) => {
        let { messages } = this.state
        this.setState({
            messages: [...messages, { sender: 'Me', text: txt }]
        })
    }

    componentDidMount() {
        console.log('MOUNTED');
    }

    componentDidUpdate() {
        if (this.state.messages[[this.state.messages.length - 1]].sender === 'Me') {
            setTimeout(() =>
                this.setState(
                    { messages: [...this.state.messages, { sender: 'Bot', text: 'Я всегда готов помочь' }] }),
                1000);

            console.log(this.state.messages[[this.state.messages.length - 1]].sender);
        }
       
    }

    render() {
        let { messages } = this.state;
        let messagesArray = messages.map((msg, i) => <Message sender={msg.sender} text={msg.text} key={i} />)
        return (
            <div className=" ">
                <div className="messages">
                    {messagesArray}
                </div>
                <ChatInput send={this.sendMessage} />
            </div>
        )
    }
}

export default Messages