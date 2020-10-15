import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import MessageField from './components/MessageField/MessageField.jsx';

const container = document.getElementById('app');

ReactDom.render(
    <div>
        <MessageField name="Darth Vader"/>
    </div>,
    container
)