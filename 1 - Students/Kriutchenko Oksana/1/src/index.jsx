import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Messages from './components/Messages/Messages.jsx'
import ChatList from './components/ChatList/ChatList.jsx'


const app = document.querySelector('#app');

ReactDom.render(
    <StylesProvider>
        <div className="wrapper d-flex w-100 justify-content-center">
            <ChatList />
            <Messages />
        </div>
    </StylesProvider>,
         app   
)