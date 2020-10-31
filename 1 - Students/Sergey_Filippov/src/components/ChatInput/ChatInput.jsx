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
        this.setState({ text: val });
    }

    send = () => {
        this.props.send(this.state.text);
        this.setState({ text: '' });
    }

    sendKey = (event) => {
        if (event.keyCode === 13){
            this.props.send(this.state.text);
            this.setState({ text: '' });
            }
    }

    render() {
        let { text } = this.state;
        return (
            <div className="d-flex flex-row">
                <input type="text" value = { text } onChange = { this.changeText } onKeyUp={ (event) => this.sendKey(event)} className="form-control"/>
                <button onClick = { this.send } className="btn btn-primary" >Send</button>
            </div>
        )
    }
}