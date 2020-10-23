import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
/* import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles' */

import { BrowserRouter } from 'react-router-dom'
import Router from './router.jsx'

const app = document.querySelector('#app');

ReactDom.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
    ,
    app
)
/* import Messages from './components/Messages/Messages.jsx'
import ChatList from './components/ChatList/ChatList.jsx' */
/* import Layout from './components/Layout/Layout.jsx' */



/* 
ReactDom.render(
    <StylesProvider>
        <div className="">
            <Layout />
        </div>
    </StylesProvider>,
         app   
) */
