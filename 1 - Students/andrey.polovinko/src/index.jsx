import React from 'react'
import ReactDom from 'react-dom'
import Messages from './components/Messages/Messages.jsx'
import ChatList from './components/ChatList/ChatList.jsx'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'


const app = document.querySelector('#app')

ReactDom.render(
    <StylesProvider>
    <div >
       <ChatList />
       <Messages />
    </div>
    </StylesProvider>,
    app
)

