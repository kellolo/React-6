import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout/css/style.css'

const app = document.querySelector('#app');

import Messages from './components/Messages/Messages.jsx'



ReactDom.render(
    <div className="wrapper">
        <button className="button-round button-chat button-pushed"></button>
        <button className="button-round button-avatar"></button>
        <Messages />
    </div>,
    app
)