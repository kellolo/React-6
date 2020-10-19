import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import {chats} from "./moduls/Chats/Chats";

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: chats.getChats()
        }
    }

    // getChats = (chats) => {
    //     this.setState({chats: chats})
    // }

    render() {
        return (
            <Switch>
                <Route exact path="/" render ={ () => <Layout chatId=''/> }  />
                <Route path='/chat/:chatId'
                       component={Layout}/>
            </Switch>
        )
    }

}

export default Router;