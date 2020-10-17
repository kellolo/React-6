import React from 'react';
import './style.css'

let Message = (props) => {
    let { sender, text } = props

    return (
        <div className='d-flex flex-column msg'
        style={ { alignSelf: sender === 'Bot' ?
                   'flex-start' : 'flex-end' } }>
            <strong>{sender}</strong>
            <p>{text}</p>
        </div>
    )
}

export default Message