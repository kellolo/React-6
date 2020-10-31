import './style.css'
import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let ChatList = (props) => {

    let { chatsFromRedux } = props;
    let chatsArr = chatsFromRedux.map(ch =><ListGroupItem  key = { ch.id }>
        <Link to = { `/chat/${ch.id}` }>{ch.title}</Link>
    </ListGroupItem>)

    return (
        <Fragment>
            <ListGroup flush>
                {chatsArr}
            </ListGroup>
        </Fragment>
    )
}

const mapStateToProps = ({ chatsReducer }) => ({
    chatsFromRedux: chatsReducer.chats
});
const mapDispatchToProps = dispatch => bindActionCreators({ /*createChat*/ }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);




