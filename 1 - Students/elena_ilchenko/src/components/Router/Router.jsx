import React, { Component } from 'react';
import './Router.css';
import { Switch, Route } from 'react-router-dom'
import Layout from '../Layout/Layout';


class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <Switch>
               <Route exact path='/' component={ Layout } />
               <Route exact path='/chat/1/' component={ Layout } />
               <Route exact path='/chat/2/' component={ Layout } />
               <Route exact path='/chat/3/' component={ Layout } />
               <Route exact path='/profile' component={ Layout } />
           </Switch>

        )
    }
}


export default Router;


