import './style.css'

import React from 'react'

function createMessages(messagesArray) {
    return messagesArray.map((title, i) => <p key={ i }>{ title }</p>)
}

export default props => {
    let { messagesArray } = props;
    let textToShow = createMessages(messagesArray);
    return (
        <div>
            { textToShow }
        </div>
    )
}