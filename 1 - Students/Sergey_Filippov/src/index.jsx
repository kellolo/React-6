import React from 'react'
import ReactDom from 'react-dom'


const app = document.querySelector('#app');

import Main from './components/main/main.jsx'

ReactDom.render(
    <Main />,
    app
)