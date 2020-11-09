import './style.css';
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Router from './router.jsx';

import { Provider } from 'react-redux';
import { initStore, history } from './store';

const app = document.querySelector('#app');

ReactDom.render(
    <Provider store = { initStore() }>
        <ConnectedRouter history = { history }>
            <Router />
        </ConnectedRouter>
    </Provider>
    ,
    app
);
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
