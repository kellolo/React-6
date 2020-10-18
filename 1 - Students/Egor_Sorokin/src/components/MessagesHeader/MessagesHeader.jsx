import './style.css'

import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default props => {
    let { currConversationName, avatarAddress } = props;
    // let currConversationName = 'TempName'
    // let avatarAddress = 'https://via.placeholder.com/50/0000FF'
    return(
        <div className="messagesHeader d-flex justify-content-between">
            <div className="searchBlock d-flex">
                <p className="seacrhIcon"><FontAwesomeIcon icon={faSearch} /></p>
                <input type="text" id="searchInput" />
            </div>
            <h3 className="currConversationName">{ currConversationName }</h3>
            <img className="currAvatar rounded" src= { avatarAddress } alt="avatar"></img>
        </div>
    )
}