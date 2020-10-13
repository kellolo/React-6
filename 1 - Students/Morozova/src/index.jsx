import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageField from './components/MessageField/MessageField.jsx';
import ChatsList from './components/ChatsList/ChatsList.jsx';

const container = document.getElementById('app');

ReactDOM.render(
    <Fragment>
        <div className="d-flex justify-content-around w-75 p-3">
            <ChatsList />
            <MessageField />
        </div>
        
    </Fragment>,
    container
)