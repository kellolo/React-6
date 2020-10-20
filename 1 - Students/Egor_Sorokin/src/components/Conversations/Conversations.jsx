import './style.css'

import React from 'react'

import Conversation from '../Conversation/Conversation.jsx'
import UserSelect from '../UserSelect/UserSelect.jsx'

export default class Conversations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            conversationsArray: [
                {
                    id: 0,
                    name: 'Bot',
                    avatar: 'https://via.placeholder.com/70',
                    lastMessage: 'Bot: How are you?'
                },
                {
                    id:1,
                    name: 'Bot2',
                    avatar: 'https://via.placeholder.com/70/cccc55',
                    lastMessage: 'Bot2: Hello! I am Bot2'
                },
                {
                    id:2,
                    name: 'Bot3',
                    avatar: 'https://via.placeholder.com/70/cccc55',
                    lastMessage: 'Bot3: Hello! I am Bot3'
                }
            ],
            activeIndex: 0,
            lastActiveIndex: 0,
        }
    }

    componentDidMount() {
        this.sendActiveConv(false);
    }

    componentDidUpdate() {
        this.sendActiveConv(true);
    }

    sendActiveConv = (update) => {
        if (this.state.activeIndex != this.state.lastActiveIndex || !update) {
            let activeConv = this.state.conversationsArray[this.state.activeIndex];
            this.props.getFunction(activeConv.id, activeConv.avatar, activeConv.name);
            this.setState({lastActiveIndex: this.state.activeIndex});
        }
    }

    render() {
        let isActive;
        let conversationsRendered = this.state.conversationsArray.map((conversationElement) => 
        {
            if (this.state.activeIndex == conversationElement.id) {
                isActive = true;
            } else {
                isActive = false;
            }
            return(
                <Conversation isActive={isActive} conversationAvatar={conversationElement.avatar} conversationHeader={conversationElement.name} lastMessage={conversationElement.lastMessage} key = {conversationElement.id}/>
            )
        })
        return(
            <div className="conversationsContainer col-sm-4">
                { conversationsRendered }
                <UserSelect />
            </div>
        )
    }
}