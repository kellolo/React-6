import './style.css';
import React, { Fragment } from 'react';


export default (props) => {
    let { chatName } = props;
    return  <div className="header">
             <h1> { props.chatName ? props.chatName : 'Welcome' } </h1>
            </div>
    }  
    