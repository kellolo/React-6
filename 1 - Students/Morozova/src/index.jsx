import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageField from './components/MessageField/MessageField.jsx';

const container = document.getElementById('app');

ReactDOM.render(
    <MessageField />,
    container
)