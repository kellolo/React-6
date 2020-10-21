import './style.css'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    send = () => {
        this.props.sendFunction(this.props.author, this.state.text);
        this.setState({ text: '' });
    }

    sendOnKeyboard = (e) => {
        if (e.key == 'Enter') {
            this.send();
        }
    }

    changeInput = event => {
        let val = event.target.value;
        this.setState( {text: val} );
    }

    render() {
        let { text } = this.state;
        return(
            <div className="chat-input d-flex">
                <input type="text" className = "input-text-box" value= { text } onChange = { this.changeInput } onKeyPress = { this.sendOnKeyboard } />
                <div className="buttons-block">
                    <button className="chat-input-button send-button" onClick={ this.send }><FontAwesomeIcon icon={faEnvelope} /></button>
                </div>
            </div>
        )
    }
}