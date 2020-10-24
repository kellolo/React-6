import './style.css'

import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core'

export default props => {
    let { currConversationName, avatarAddress, myAvatar } = props;

    if ( avatarAddress == '') {
        return(
        <div className="messages-header d-flex">
            <h3 className="curr-conversation-name col-11">{ currConversationName }</h3>
            <Link className="col-1" to="/profile/" >
                <div className="profile-link d-flex align-items-center">
                    <Avatar alt="me" src={ myAvatar }>
                        <FontAwesomeIcon icon={faIdBadge} />
                    </Avatar>
                </div>
            </Link>
        </div>)
    } else {
        return(
        <div className="messages-header d-flex">
            <div className="messages-header-main d-flex justify-content-between col-11">
                <div className="search-block d-flex">
                    <p className="seacrh-icon"><FontAwesomeIcon icon={faSearch} /></p>
                    <input type="text" id="search-input" />
                </div>
                <h3 className="curr-conversation-name">{ currConversationName }</h3>
                <img className="curr-avatar rounded" src= { avatarAddress } alt="avatar"></img>
            </div>
            <Link className="col-1" to="/profile/" >
                <div className="profile-link d-flex align-items-center">
                    <Avatar alt="me" src = { myAvatar }>
                        <FontAwesomeIcon icon={faIdBadge} />
                    </Avatar>
                </div>
            </Link>
        </div>)
    }
}