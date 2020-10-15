import React from 'react';
import { Input } from 'reactstrap';
import './style.css';

export default (props) => {
    let { change, text } = props;
  return (
      <Input placeholder="Type your message..." bsSize="sm" 
      onKeyUp = { change } onChange = { change } value = { text } className="inputMsg"/>
  )
}

