import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import Chats from './components/Chats/Chats.jsx';

export default class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [],
        }
    }

    // getChats = (ch) => {
    //     const {chats} = this.state;
    //     this.setState({chats: [...chats, ch]});
    // }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Layout}/>
                <Route exact path="/chat/ch_0" render={() => <Layout opponentId={'contact_0'} />} />
                <Route exact path="/chat/ch_1" render={() => <Layout opponentId={'contact_1'} />} />
                <Route exact path="/chat/ch_2" render={() => <Layout opponentId={'contact_2'} />} />
            </Switch>
        )
    }
}
