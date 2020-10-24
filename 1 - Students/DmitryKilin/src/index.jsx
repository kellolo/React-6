import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout/css/style.css'

import Layout from "./components/Layout/Layout.jsx";
import { StylesProvider } from '@material-ui/core/styles'
import {BrowserRouter} from "react-router-dom";
import Router from "./router.jsx";

import { Provider } from 'react-redux';
import initStore from './store';

const app = document.querySelector('#app');

// import  ChatsList from './components/ChatsList/ChatsList.jsx'
// import Messages from './components/Messages/Messages.jsx'
// import ChatsInfo from "./components/ChatInfo/ChatInfo.jsx";



ReactDom.render(
    <Provider store = { initStore() }>
        <BrowserRouter>
            <Router></Router>
        </BrowserRouter>
    </Provider>,
    app
)