import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import {chats} from "./moduls/Chats/Chats";


import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

class Router extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     chats: chats.getChats()
        // }
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

const mapStateToProps = ({chatsReducer}) => ({
    chatsFromRedux: chatsReducer.chats
});
const mapDispatchToProps = dipatch => bindActionCreators({}, dipatch);

export default connect(mapStateToProps, mapDispatchToProps)(Router)