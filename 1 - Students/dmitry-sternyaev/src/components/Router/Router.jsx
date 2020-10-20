import React from "react";
import { Switch, Route } from "react-router-dom"
import App from '../App/App.jsx';

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path='/'
                    component={App}
                />
                <Route
                    exact
                    path='/chat/'
                    component={App}
                />
                <Route
                    exact
                    path='/chat/:chatId/'
                    render={obj => <App chatId={Number(obj.match.params.chatId)} {...this.props} />}
                />
            </Switch>
        )
    }
}