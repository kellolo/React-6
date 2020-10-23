import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout.jsx'

export default class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ch: []
        }
    }

       render() {
        return (
            <Switch>
                <Route exact path="/" render = { () => <Layout setChats = { this.getChats }/> } />
                
                <Route exact path="/chat/ch_1" render = { () => <Layout chatId = { 'ch_1' } /> } />
                <Route exact path="/chat/ch_2" render = { () => <Layout chatId = { 'ch_2' } /> } />
                
            </Switch>
        )
    }
}