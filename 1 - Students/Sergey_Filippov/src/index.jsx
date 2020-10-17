import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = document.querySelector('#app');


import Messages from './components/Messages/Messages.jsx'
import Chatlist from './components/Chatlist/Chatlist.jsx'

ReactDom.render(
    <div className="wrapper">
        <Chatlist />
        <Messages />
    </div>,
    app
)