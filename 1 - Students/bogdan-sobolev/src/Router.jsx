import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Messages from 'components/Messages/Messages'

export default class Router extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Messages} />
                <Route exact path="/chats/:id([0-9]+)" component={Messages} /> 
            </Switch>
        )
    }
}