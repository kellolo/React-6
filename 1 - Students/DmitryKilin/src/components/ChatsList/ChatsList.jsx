import './style.css'
import React, { Component } from 'react'

class ChatsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chat-list">
                <button className="button-round button-chat button-pushed"></button>
                <p>

                </p>
            </div>
        )
    }
}

export default ChatsList