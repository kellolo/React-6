import './style.css';
import React from 'react';

export default props => {
    let { sender, text } = props;

    return (
       
      <div className="msg" style={ { alignSelf: sender === 'Me' ?  'flex-start' : 'flex-end' } }>
            <strong>{ sender }</strong>

            <p>{ text }</p>
       
        </div> 
       
    )
}