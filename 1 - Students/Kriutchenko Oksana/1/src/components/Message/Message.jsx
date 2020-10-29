import './style.css';
import React from 'react';

export default props => {
    let { sender, text } = props;

    return (
       
      <di
            className="msg" style={  { alignSelf: sender === 'Bot' ? 'flex-start' : 'flex-end',
            textAlign: sender === 'Bot' ? 'left' : 'right' } }>
           
            <strong>{ sender }</strong>

            <p>{ text }</p>
       
        </di> 
       
    )
}