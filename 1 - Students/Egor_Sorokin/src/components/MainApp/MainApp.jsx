import './style.css'

import React from 'react'

import Conversations from '../Conversations/Conversations.jsx'
import Messages from '../Messages/Messages.jsx'

export default class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeConv: {
                id: '',
                avatar: '',
                name: '',
            }
        }
    }

    getActiveConv = (id, avatar, name) => {
        console.log (name);
        this.setState({activeConv: {
            id: id,
            avatar: avatar,
            name: name,
        }});
    }

    render() {

        return(
            <main>
                <div className="row">
                    <Conversations getFunction = {this.getActiveConv} />
                    <Messages author = 'Egor' currConversationName={this.state.activeConv.name} avatarAddress={this.state.activeConv.avatar} />
                </div>
            </main>
    )}
}