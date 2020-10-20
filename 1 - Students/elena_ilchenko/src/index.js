import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Messages from './components/Messages/Messages';
import ChatList from './components/ChatList/ChatList';

import { StylesProvider } from '@material-ui/core/styles'


ReactDOM.render(
  <StylesProvider>
    <div className="MsgWrapper">
      <ChatList />
      <Messages />
    </div>
  </StylesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
