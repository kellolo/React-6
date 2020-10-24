import React from 'react'
import ReactDom from 'react-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import Router from './router.jsx'

const app = document.querySelector('#app')

ReactDom.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    app
)

