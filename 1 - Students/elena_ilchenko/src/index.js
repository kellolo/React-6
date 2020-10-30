import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from './components/Router/Router';
import { BrowserRouter } from 'react-router-dom';

import { StylesProvider } from '@material-ui/core/styles';

import { Provider } from 'react-redux';
import initStore from './store';


ReactDOM.render(
  <Provider store={ initStore() }>
    <BrowserRouter>
      <StylesProvider>
          <Router />
      </StylesProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
