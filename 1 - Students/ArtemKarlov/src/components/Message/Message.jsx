import './style.css';
import React from 'react';

export default props => {
    let {sender, message} = props;

    return (
        <div className="message">
            <strong>{ sender }</strong>
            <p>{ message }</p>
        </div>
    );
}