import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Layout from './components/Layout/Layout.jsx';

class Router extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {chats} = this.props;

        const routesArr = chats.map((chat) => {
            // console.log(`path: /chat/${chat.id}`);
            return <Route exact path={`/chat/${chat.id}`} render={() => <Layout chatId={chat.id} />} />
        });

        return (
            <Switch>
                <Route exact path="/" component={Layout}/>
               
                { routesArr }   
                
            </Switch>
        )
    }
}

const mapStateToProps = ({chatsReducer}) => ({
    chats: chatsReducer.chats,
});
const mapDispatchToProps = dispatch => bindActionCreators({/*addChat*/}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Router);
