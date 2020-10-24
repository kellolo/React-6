import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MainApp from './components/MainApp/MainApp.jsx'
import Profile from './components/Profile/Profile.jsx'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            me: 5,
        }
    }

    render() {
        let { conversationsArray, users } = this.props;
        let { me } = this.state;

        let authorAvatar = users.find(item => item.id == me).avatar;

        let chatSwitches = conversationsArray.map(ch => <Route key = { ch.id } exact path = { `/chat/${ ch.id }` } render = { () => <MainApp chatId = { Number(ch.id) } me = { this.state.me } /> } /> )

        return(
            <Switch>
                <Route exact path="/" render = { () => <MainApp myAvatar = { authorAvatar } chatId = {-1} me = { this.state.me } /> } />
                {/* <Route
                   exact
                   path='/chat/:chatId/'
                   render={ obj => <MainApp
                       chatId={ Number(obj.match.params.chatId) }
                       me = { this.state.me }
                   />
                   }
               /> */}
               { chatSwitches }
               <Route exact path="/profile/" render = { () => <Profile myId = { me } /> } />
            </Switch>
        );
    }
} 

const mapStateToProps = ({ chatsReducer, usersReducer }) => ({
    conversationsArray: chatsReducer.chats,
    users: usersReducer.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({ /*createChat*/ }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Router);