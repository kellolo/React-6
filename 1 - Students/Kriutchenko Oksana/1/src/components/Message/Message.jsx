import './style.css';
import React from 'react';

export default props => {
    let { sender, text } = props;

    return (
       
      <div
            className="msg" style={  { alignSelf: sender === 'Me' ? 'flex-start' : 'flex-end',
            textAlign: sender === 'Me' ? 'left' : 'right' } }>
           
            <strong className="msg_name">{ sender }</strong>
          
            <p className="msg_text">{ text }</p>
       
        </div> 
       
    )
}