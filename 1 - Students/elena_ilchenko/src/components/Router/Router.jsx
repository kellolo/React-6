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
               <Route exact path='/' component={ Layout } />               
               <Route exact path='/profile' component={ Layout } />

               { this.props.chatsFromRedux.map((chat, i) => <Route 
                        exact path={`/chat/${chat.chatId}/`}
                        render={() => <Layout chatId={chat.chatId} chatName={chat.chatName} />}
                        key={chat.chatId}
                        // width 'key' doesnt work setState in selectHandler
                    />
                    )
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
