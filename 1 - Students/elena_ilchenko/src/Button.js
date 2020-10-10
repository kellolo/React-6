import React from 'react';
import './Button.css';

const Button = props => <button className='Button' onClick={props.onClickButton}>{props.buttonName}</button>


 export default Button;
