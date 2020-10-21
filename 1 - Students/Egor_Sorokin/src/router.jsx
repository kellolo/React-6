import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MainApp from './components/MainApp/MainApp.jsx'
import Profile from './components/Profile/Profile.jsx'

export default class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            me: {
                name: 'Egor',
                avatar: 'https://cdn.pixabay.com/photo/2018/03/09/15/36/wildlife-3211742_960_720.jpg',
                email: 'john.appleseed@icloud.com'
            },
        }
    }

    render() {
        return(
            <Switch>
                <Route exact path="/" render = { () => <MainApp chatId = {-1} me = { this.state.me } /> } />
                <Route
                   exact
                   path='/chat/:chatId/'
                   render={ obj => <MainApp
                       chatId={ Number(obj.match.params.chatId) }
                       me = { this.state.me }
                   />
                   }
               />
               <Route exact path="/profile/" render = { () => <Profile me = { this.state.me } /> } />
            </Switch>
        );
    }
} 