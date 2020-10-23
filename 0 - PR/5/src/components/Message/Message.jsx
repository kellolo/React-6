import './style.css'
import React from 'react'

export default props => {
    let { sender, text } = props;

    return (
        <div className="d-flex flex-column msg">
            <strong>{ sender }</strong>

            <p>{ text }</p>
        </div>
    )
}