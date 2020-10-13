import React, {Component} from 'react';
import './MessageField.css';
import MessageComponent from './MessageComponent'
import Button from './Button'


class MessageField extends Component {
    state = {
        messages: ['Привет', 'Как дела?'],
    }

    buttonHandler = () => {
        this.setState({
            messages: [...this.state.messages, 'Нормально']
        })
    }

    render() {
        return (
            <div className='MessageField'>
                {
                    this.state.messages.map((message, i) => <MessageComponent key={`${i+1}`} text={message}/>)
                }
                <Button 
                    buttonName='Ответить'
                    onClickButton={this.buttonHandler}
                    />
            </div>
        )
    }
}



export default MessageField;
