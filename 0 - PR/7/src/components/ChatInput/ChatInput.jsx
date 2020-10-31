import './style.css'
import React, { Component } from 'react'

export default class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    changeText = evt => {
        let val = evt.target.value;
        if (evt.keyCode != 13) {
            this.setState({ text: val });
        } else {
            this.send();
        }
    }

    send = () => {
        this.props.send(this.state.text); //работает метод из родителя
        this.setState({ text: '' });
    }

    render() {
        let { text } = this.state;
        return (
            <div>
                <input type="text" value = { text } onChange = { this.changeText }/>
                <button onClick = { this.send }>Send</button>
            </div>
        )
    }
}