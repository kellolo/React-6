import './style.css';
import React from 'react';

export default props => {
    let { sender, text } = props;

    return (
       
      <div
            className="msg d-flex flex-column" style={ { alignSelf: sender === 'Me' ? 'flex-end' : 'flex-start',
            textAlign: sender === 'Me' ? 'left' : 'right',backgroundColor: sender === 'Me' ? '#fa81f3' : '#FF69B4' } }>
        
            <strong className="msg_name">{ sender }</strong>
          
            <p className="msg_text">{ text }</p>
       
        </div> 
       
    )
}