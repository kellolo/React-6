import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout/css/style.css'
import { StylesProvider } from '@material-ui/core/styles'

const app = document.querySelector('#app');

import  ChatsList from './components/ChatsList/ChatsList.jsx'
import Messages from './components/Messages/Messages.jsx'
import ChatsInfo from "./components/ChatInfo/ChatInfo.jsx";



ReactDom.render(
    <StylesProvider>
        <div className="wrapper">
            <ChatsList />
            <Messages />
            <ChatsInfo />
        </div>
    </StylesProvider>,
    app
)