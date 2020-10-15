import React from 'react'
import ReactDom from 'react-dom'
import Messages from './components/Messages/Messages.jsx'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const app = document.querySelector('#app')

ReactDom.render(
    <div className="mt-4">
       <Messages />
    </div>,
    app
)

