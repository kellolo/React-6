
        import './style.css'
        import React, { Component } from 'react'
        import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

        import Messages from '../Messages/Messages.jsx'
        import ChatList from '../ChatList/ChatList.jsx'

        export default class Layout extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    contacts: ['Petrovich', 'Alekseich', 'Vasilych'],
                }
            }
            
            componentDidMount() {
                // this.props.setChats(this.state.chats);
            }
            
            componentDidUpdate() {
                
            }
        
            render() {   
                console.log(this.props)             
                return (
                    <StylesProvider>
                        <div className="w-100 d-flex flex-column align-items-center">
                            <h1> { this.props.chatName ? this.props.chatName : 'Welcome' } </h1>
                            <div className="wrapper d-flex w-100 justify-content-center">
                                <ChatList contacts = { this.state.contacts } chatId = { this.props.chatId }/>
                                { this.props.chatId && <Messages /> }
                            </div>
                        </div>
                    </StylesProvider>
                )
            }
        }
    