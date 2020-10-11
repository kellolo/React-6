import './style.css';
import React, { Component, Fragment } from 'react'; 
import { EnhancedEncryptionTwoTone } from '@material-ui/icons';


export default class Controls extends Component {
    state = {
        text: '',
        sender: 'Nick',
    }

    ChangeHandler = (event) => {
        if (event.keyCode !== 13) {
            this.setState({ text: event.target.value });
        } else {
            this.props.SendMsg(this.state.sender, this.state.text);
            this.setState({ text: '' });
        }
    }
    
    SendMessage = () => {
        let { sender, text } = this.state;
        this.props.SendMsg(sender, text);
        this.setState({ text: '' });
    } 

    render() {
        let { text } = this.state;

        return (
            <Fragment>
                <div className="d-flex flex-row controls">
                    <input type="text" onChange={ this.ChangeHandler } 
                    onKeyUp={ this.ChangeHandler }
                    value={ text } 
                    className="inputMsg"/>
                    <button onClick={ this.SendMessage } className="sendBtn">Send</button>
                </div>
                
            </Fragment>
        )
    }
}
