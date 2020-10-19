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
                <Route exact path="/" render ={ () => <Layout/> }  />
                <Route exact path='/chat/:chatId'
                       render = { obj => <Layout ChatId={ Number(obj.match.params.chatId)} />} />
            </Switch>
        )
    }

}

export default Router;