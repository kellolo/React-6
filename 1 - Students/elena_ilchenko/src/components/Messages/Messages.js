import React, {Component} from 'react';
import './Messages.css';
import Message from '../Message/Message'
import ChatInput from '../ChatInput/ChatInput'


class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {sender: 'bot', message: 'привет'},
                {sender: 'bot', message: 'я бот'}
            ],
        }
        this.msgListRef = React.createRef();
    }

    buttonHandler = (txt) => {
        this.setState({
            messages: [...this.state.messages, {sender: 'me', message: txt}]
        })
    }

    componentDidUpdate() {
        
        setTimeout(() => {
            if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
                this.setState({
                    messages: [...this.state.messages, {sender: 'bot', message: 'и что дальше?'}]
                })
            }
        }, 1500);
        
 
        //scroll to the last messages
        this.msgListRef.current.scrollTop = this.msgListRef.current.scrollHeight     
    }


    render() {
        
        return (
            <div className='MessageField'>
                <div className="messageList" ref={this.msgListRef}>
                    {
                        this.state.messages.map((msg, i) => <Message key={`${i+1}`} sender={msg.sender} text={msg.message}/>)
                    }
                </div>

                <ChatInput 
                    buttonName='Send'
                    onClickButton={this.buttonHandler}
                    />
            </div>
        )
    }
}


export default Messages;
