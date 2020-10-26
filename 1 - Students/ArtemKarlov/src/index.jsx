import React from 'react';
import ReactDom from 'react-dom';

import Layout from './components/Layout/Layout.jsx';


const app = document.querySelector('#app');


ReactDom.render(
    <Layout />,
    app
);
