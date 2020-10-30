import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Layout from './components/Layout/Layout.jsx';

class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
        }
    }

    render() {
        const {chats} = this.props;

        const routes = chats.map((chatListItem, itemIndex) => 
            <Route exact path={`/chat/${chatListItem.id}`} render={() => <Layout chatInfo={chatListItem} />} key={chatListItem.id}/>
        );

        return (
            <Switch>
                <Route exact path="/" component={Layout}/>
                {/* { routes } */}

                {/* <Route exact path="/chat/ch_0" render={() => <Layout opponentId={'contact_0'} />} />*/}
            </Switch>
        )
    }
}

const mapStateToProps = ({chatsReducer}) => ({
    chats: chatsReducer.chats,
});
const mapDispatchToProps = dispatch => bindActionCreators({/*addChat*/}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Router);
