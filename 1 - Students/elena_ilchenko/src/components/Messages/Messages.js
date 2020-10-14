import React, {Component} from 'react';
import './Messages.css';
import Message from '../Message/Message'
import ChatInput from '../ChatInput/ChatInput'


class Messages extends Component {
    state = {
        messages: [{sender: 'me', message: 'some text'},
                {sender: 'me', message: 'another text'}],
    }

    buttonHandler = (txt) => {
        this.setState({
            messages: [...this.state.messages, {sender: 'me', message: txt}]
        })
    }

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
        
        return (
            <div className='MessageField'>
                {
                    this.state.messages.map((msg, i) => <Message key={`${i+1}`} sender={msg.sender} text={msg.message}/>)
                }

                <ChatInput 
                    buttonName='Ответить'
                    onClickButton={this.buttonHandler}
                    />
            </div>
        )
    }
}


export default Messages;
