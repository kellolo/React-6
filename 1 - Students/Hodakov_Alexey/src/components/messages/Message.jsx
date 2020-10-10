import "./message.css";
import React from "react";

export default () => {
  const placeToRender = document.querySelector("main");
  let messageArr = ["Вася", "Петя", "Люба"];

  function test(arr){
      return arr.map((title, i) => <p key = { i }>Приветствую, { title }!</p>)
  }

  
  return (
    <div className="message__text">
      <h2>Приветствую, учитель!</h2>
     { test(messageArr) }
    </div>
  );
};
