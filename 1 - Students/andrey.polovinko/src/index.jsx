import React from 'react'
import ReactDom from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import {BrowserRouter} from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router';
import Router from './router.jsx'
import { Provider } from 'react-redux';
import { initStore, history } from './store';

const app = document.querySelector('#app')

ReactDom.render(
    <Provider store={initStore()}>
        <ConnectedRouter history = { history }>
            <Router/>
        </ConnectedRouter>
    </Provider>,
    app
)

