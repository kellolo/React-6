import React from 'react'
import ReactDom from 'react-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'
import {BrowserRouter} from 'react-router-dom'
import Router from './router.jsx'

import {Provider} from 'react-redux';
import initStore from './store';


const app = document.querySelector('#app')

ReactDom.render(
    <Provider store={initStore()}>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    </Provider>,
    app
)

