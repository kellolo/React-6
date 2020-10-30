import './style.css';
import React from 'react';

export default props => {
    let { sender, text } = props;

    return (
        <div className="d-flex flex-column msg"
            style={ 
                { alignSelf: sender === 'Bot' ? 'flex-start' : 'flex-end',
                textAlign: sender === 'Bot' ? 'left' : 'right' }
            }

        >
            { sender && <strong className="msgName">{ sender }</strong>}
            { !sender && <strong className="msgName">Anonim</strong>}
            <p className="msgText">{ sender || (!sender && text) ? text : 'Type your message'}</p>
        </div>               
    )
}
    