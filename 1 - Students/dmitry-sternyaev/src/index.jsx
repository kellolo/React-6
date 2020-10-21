import "./styles/custom.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router/Router.jsx";
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter>
        <Router history={history}/>
    </BrowserRouter>,
    document.getElementById('root')
);