import './style.css'
import React, { Component } from 'react'
import {CurrentUser} from '../../moduls/User/User'

export default class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    changeText = evt => {
        let val = evt.target.value;
        this.setState({ text: val });
        // let val = evt.target.value;
        // if (evt.keyCode != 13) {
        //     this.setState({ text: val });
        // } else {
        //     this.send();
        // }
    }

    send = () => {
        this.props.send({sender: CurrentUser.name, text: this.state.text}); //работает метод из родителя
        this.setState({ text: '' });
    }

    render() {
        let { text } = this.state;
        return (
            <div className="msg-input-group">
                <textarea className="input-message" type="text" value = { text } onChange = { this.changeText }/>
                <button className="button-send" onClick = { this.send }>Send</button>
            </div>
        )
    }
}