import React from 'react'
import ReactDom from 'react-dom'


const app = document.querySelector('#app');

import Start from './components/Start/Start.jsx'

ReactDom.render(
    <div className="wrapper">
        <Start name="John" />
        
    </div>,
    app
)