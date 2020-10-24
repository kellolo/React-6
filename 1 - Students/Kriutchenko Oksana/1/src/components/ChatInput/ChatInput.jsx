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
        this.props.send(this.state.text); //работает метод из родителя
        this.setState({ text: '' });
    }
    handleKeyUp = (evt) => {
        if (evt.keyCode === 13) { // Enter
            this.props.send(this.state.text);
            this.setState({ text: "" });
          }
     };   

    render() {
        let { text } = this.state;
        return (
            <div className="ChatInput">
                <input className="input" type="text" value = { text } 
                onChange = { this.changeText } 
                onKeyUp={ (evt) => this.handleKeyUp(evt, this.state.input) }/>

                <button className="button" onClick = { this.send }>Send</button>
                </div>
             )
                  
 
    }
}