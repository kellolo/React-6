import './style.css'

import React from 'react'

import MessagesComponent from '../MessagesComponent/MessagesComponent.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: ['Привет', 'Как дела?'] }
    }

    addMessage() {
        this.setState({ messages: this.state.messages.concat('Нормально') });
    }

    render() {
        return(
            <div className="container">
                <div id="messages-container"><MessagesComponent messagesArray={this.state.messages}/></div>
                <button onClick={() => this.addMessage()}>Send</button>
            </div>
        )
    }
}

export default App;