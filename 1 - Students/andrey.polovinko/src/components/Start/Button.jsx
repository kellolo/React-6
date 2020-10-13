import React from 'react'

let Button = () => {
    function handleClick(e) {
      e.preventDefault();
      console.log('По ссылке кликнули.');
    }
 
    return (
      <a href="#" onClick={handleClick}>
        Нажми на меня
      </a>
    );
  }

export default Button