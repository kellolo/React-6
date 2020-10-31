import './style.css'

import React from 'react'


export default props => {

    let { author, sender, text } = props;
    let addClass;
    if (author == sender) {
        addClass = 'myMessage'
    } else {
        addClass = 'othersMessage'
    }
    return (
        <div className="message">
            <div className={addClass}>
                <strong>{ sender }</strong>
                <p dangerouslySetInnerHTML = { {__html: text} }></p>
            </div>
        </div>
    )
}