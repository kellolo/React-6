import './style.css'
import React, { Component } from 'react'

class ChatsInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chat-info">
                <button className="button-round button-avatar"></button>
                <p>
                </p>
            </div>
        )
    }
}

export default ChatsInfo