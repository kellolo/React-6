import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MainApp from './components/MainApp/MainApp.jsx'
import Profile from './components/Profile/Profile.jsx'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadUsers } from './store/actions/users.actions.js'

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            me: "u-5",
        }
    }

    componentDidMount() {
        this.props.loadUsers('/api/users');
    }

    render() {
        let { conversationsArray, users } = this.props;
        let { me } = this.state;

        let meObj = users.find(item => item.id == me);
        let authorAvatar;
        if (typeof meObj != 'undefined') authorAvatar = users.find(item => item.id == me).avatar;

        let chatSwitches = conversationsArray.map(ch => <Route key = { ch.id } exact path = { `/chat/${ ch.id }` } render = { () => <MainApp chatId = { ch.id } me = { this.state.me } /> } /> )
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

const mapDispatchToProps = dispatch => bindActionCreators({ loadUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Router);