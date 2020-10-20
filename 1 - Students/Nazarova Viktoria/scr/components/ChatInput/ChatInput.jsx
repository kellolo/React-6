import React, {Component} from 'react';
import './ChatInput.css';

class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    send = () => {
        if (this.state.text) this.props.onClickButton(this.state.text);
        this.setState({
            text: ''
        })
    }

    changeInput = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onKeyPressHandler = (e) => {
        if (e.charCode === 13) {
            this.send()
        }
    }

    render() {
        return (
            <div className='ChatInput'>
                <input 
                    className='Input' 
                    type="text" 
                    value={this.state.text} 
                    onChange={this.changeInput}
                    onKeyPress={this.onKeyPressHandler}
                    placeholder='Ваше сообщение'
                    />
                <button className='Button' onClick={this.send}>
                    {this.props.buttonName}
                </button>
            </div>

        )
    }
}


 export default ChatInput;