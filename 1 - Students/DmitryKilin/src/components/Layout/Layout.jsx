
        import './style.css'
        import React, { Component } from 'react'
        import {StylesProvider} from "@material-ui/core/styles";
        import ChatsList from "../ChatsList/ChatsList.jsx";
        import Messages from "../Messages/Messages.jsx";
        import ChatsInfo from "../ChatInfo/ChatInfo.jsx";
        import {chats} from "../../moduls/Chats/Chats";
        import { contacts } from '../../moduls/Contacts/Contacts'

        export default class Layout extends Component {
            constructor(props) {
                super(props);
            }
            
            componentDidMount() {
            }
            
            componentDidUpdate() {
                
            }
        
            render() {
                //let { some } = this.state;
                
                return (
                    <StylesProvider>
                        <div className="wrapper">
                            <ChatsList contacts={contacts.emails()} chats={chats.getChats()} activeChatId={'ch_2'}/>
                            <Messages />
                            {/*<ChatsInfo />*/}
                        </div>
                    </StylesProvider>
                )
            }
        }
    