import './style.css';
import React from 'react';

export default class ChatInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }
    

    changeText = evt => {
        let val = evt.target.value;
        this.setState({text: val});
    }

    send = () => {
        let {text} = this.state;
        this.props.sendMessage(text);
        this.setState({text: ''});
    }

    render() {
        let {text} = this.state;
        return (
            <div className="control">
                <input type="text" value = { text } onChange = { this.changeText }/>
                <button onClick = { this.send }>send</button>
            </div>
        );
    }
}