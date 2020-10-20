import React from 'react';
import './Message.css';

const Message = props => <div className='MessageComponent'>{props.sender}: {props.text}</div>


export default Message;