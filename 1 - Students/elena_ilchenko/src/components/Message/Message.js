import React from 'react';
import './Message.css';

const Message = (props) => {

    const cls = [];
    if (props.sender !== 'bot') {
        cls.push('selfMessage');
    } 

    return (<div className={`MessageComponent ${cls.join(' ')}`}>
                                    {props.sender}: {props.text}
                            </div>)
    }


export default Message;