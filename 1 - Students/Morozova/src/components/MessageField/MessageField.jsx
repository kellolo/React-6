import './style.css';
import React, { Component, Fragment } from 'react';
import Message from '../Message/Message.jsx';
// import ChatsList from '../ChatsList/ChatsList.jsx';
import Controls from '../Controls/Controls.jsx';


export default class MessageField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="d-flex flex-column msg-field" >
                <Message />
                
            </div>    
        )
    }
}
