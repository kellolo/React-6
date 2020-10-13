import React from 'react'
import ReactDom from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const app = document.querySelector('#app');

import MainApp from './components/MainApp/MainApp.jsx'

ReactDom.render(
    <div className="container">
        <MainApp author = 'Egor'/>
    </div>,
    app
)