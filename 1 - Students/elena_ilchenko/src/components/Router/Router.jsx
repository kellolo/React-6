import React, { Component } from 'react';
import './Router.css';
import { Switch, Route } from 'react-router-dom'
import Layout from '../Layout/Layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <Switch>
               <Route exact path='/' render={ () => <Layout isProfile={false} allChats={this.props.chatsFromRedux}/> } />               
               <Route exact path='/profile' render={ () => <Layout isProfile />} />

               { this.props.chatsFromRedux.map((chat, i) => {
                   return (
                        <Route 
                            exact path={`/chat/${chat.chatId}/`}
                            render={() => <Layout chatId={chat.chatId} chatName={chat.chatName} isProfile={false}/>}
                            key=''
                            // width 'key' doesnt work setState in selectHandler
                        />
                        )
                    })
                }
           </Switch>

        )
    }
}


const mapStateToProps = ({ chatsReducer }) => ({
    chatsFromRedux: chatsReducer.chats
});
const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Router)
