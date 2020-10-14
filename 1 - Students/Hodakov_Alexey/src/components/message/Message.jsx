import "./message.css";
import React from "react";

export default (props) => {
  let { sender, text } = props;

  return (
    <div className="d-flex flex-column message">
      <strong className="message__author"> {sender} </strong>
      <p>{text}</p>
    </div>
  );
};
