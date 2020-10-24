
import './style.css'
import React, { Fragment } from 'react'

import MessagesHeader from '../MessagesHeader/MessagesHeader.jsx'

export default props => {
    let { myAvatar } = props;

    return (
        <Fragment>
            <div className="messages-blank col-sm-8">
                <MessagesHeader currConversationName={'Select chat'} avatarAddress="" myAvatar = { myAvatar }/>
            </div>
        </Fragment>
    )
}
    