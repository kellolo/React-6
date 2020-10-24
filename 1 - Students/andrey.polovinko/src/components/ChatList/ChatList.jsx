import './style.css'
import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let ChatList = (props) => {

    let { chatsFromRedux } = props;
    let chatsArr = chatsFromRedux.map(ch => <li className="list-group-item"  key = { ch.id }>
        <Link to = { `/chat/${ch.id}` }>{ch.title}</Link>
    </li>)

    return (
        <Fragment>
            <ul className="list-group list-group-flush">
                {chatsArr}
            </ul>
        </Fragment>
    )
}



const mapStateToProps = ({ chatsReducer }) => ({
    chatsFromRedux: chatsReducer.chats
});
const mapDispatchToProps = dispatch => bindActionCreators({ /*createChat*/ }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);




