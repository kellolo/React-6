import React from 'react'
import ReactDom from 'react-dom'

const app = document.querySelector('#app');

import App from './components/App/App.jsx'

ReactDom.render(
    <App />,
    app
)