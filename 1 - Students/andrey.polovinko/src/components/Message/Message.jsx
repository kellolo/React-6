import React from 'react';
import './style.css'

let Message = (props) => {
    let { sender, text } = props

    return (
        <div className='d-flex flex-column alert alert-primary rounded'>
            <strong>{sender}</strong>
            <p>{text}</p>
        </div>
    )
}

export default Message