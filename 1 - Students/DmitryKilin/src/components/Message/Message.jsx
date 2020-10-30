import './style.css'
import React from 'react'
import {chatBot} from "../../moduls/Bot/Bot"

export default props => {
    let { sender, text } = props;

    return (
        <div className="d-flex flex-column msg" style={ {backgroundColor: sender === "Bot" ? 'PaleTurquoise' : 'lightblue'}}>
            <strong>{ sender }</strong>
            <p>{ text }</p>
        </div>
    )
}