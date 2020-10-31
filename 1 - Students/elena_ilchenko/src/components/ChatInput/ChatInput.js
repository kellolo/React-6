import React, {Component} from 'react';
import './ChatInput.css';
import { FloatingActionButton } from '../../components/floatingActionButton/FloatingActionButton';

class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            text: '',
        }
    }

    send = () => {
        if (this.state.text) this.props.onClickButton('me', this.state.text);
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

    componentDidMount() {
        this.textInput.current.focus();
    } 

    render() {
        return (
            <div className='ChatInput'>
                <input 
                    ref={ this.textInput }
                    className='Input' 
                    type="text" 
                    value={this.state.text} 
                    onChange={this.changeInput}
                    onKeyPress={this.onKeyPressHandler}
                    placeholder='Ваше сообщение'
                />
                <FloatingActionButton send={this.send} buttonName={this.props.buttonName} />
            </div>
        )
    }
}


 export default ChatInput;
