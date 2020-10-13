import './style.css'

import React from 'react'

export default props => {
    let { isActive, conversationAvatar, conversationHeader, lastMessage } = props;
    let addClass = ''
    if (isActive) {
        addClass = ' conversationActive'
    }
    return(
        <div className={"conversationContainer d-flex align-items-center" + addClass}>
            <img src= { conversationAvatar } alt="avatar" className = "rounded conversationAvatar" />
            <div className="convInfo">
                <h4 className="conversationHeader">{ conversationHeader }</h4>
                <p className="converstionText">{ lastMessage }</p>
            </div>
        </div>
    )
}