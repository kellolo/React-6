import './style.css'

import React, { Component, Fragment } from 'react'
import ChatDialog from '../ChatDialog/ChatDialog.jsx'

import { Link } from 'react-router-dom'  
/* import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'; */

 export default class ChatList extends Component {
        constructor(props) {
             super(props);
             this.state = {
                    
                }
            }
            
            componentDidMount() {
                
            }
            
            componentDidUpdate() {
                
            }
        
            render() {
                let { chats } = this.props;
                let chatsArr = chats.map(ch => <li key = { ch._id }>
                                                    <Link to = { `/chat/${ch._id}` }>{ch.title}</Link>
                                                </li>) 
                return (
                    <Fragment>
                        <div className="ChatList d-flex flex-column">
                           {/*   <Link to = "/test/">
                                <a href="#">Test</a>
                            </Link> */} 
                            <ul>
                                { chatsArr }
                            </ul>
                            <div>
                                <ChatDialog contacts = { this.props.contacts }/>
                            </div>
                        </div>
                    </Fragment> 
                )
    }
}