import './style.css'
import React from 'react'

export default props => {
    let { sender, text } = props;
   

    return (
        <div className="d-flex flex-column msg"    style={ { alignSelf: props.sender === 'bot' ?
        'flex-start' : 'flex-end' } }>
            <strong>{ sender }</strong>

            <p>{ text }</p>
        </div>
    )
}