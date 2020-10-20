import './style.css'

import React from 'react'

import Messages from '../Messages/Messages.jsx'
import ChatList from '../ChatList/ChatList.jsx'

export default class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeConv: {
                id: '0',
                avatar: 'https://via.placeholder.com/70',
                name: 'Bot',
            }
        }
    }

    getActiveConv = (id, avatar, name) => {
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
                    <ChatList getFunction = {this.getActiveConv} />
                    <Messages author = 'Egor' activeId={this.state.activeConv.id} currConversationName={this.state.activeConv.name} avatarAddress={this.state.activeConv.avatar} />
                </div>
            </main>
    )}
}