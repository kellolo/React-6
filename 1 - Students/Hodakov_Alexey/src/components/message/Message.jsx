import "./style.css";
import React from "react";

export default (props) => {
  let { sender, text } = props;

  return (
    <div
      className="d-flex flex-column message"
      style={{
        backgroundColor: sender === "Me" ? "#2f847c" : "#2F8491",
        alignSelf: sender === "Me" ? "flex-end" : "flex-start",
      }}
    >
      <strong className="message__author"> {sender} </strong>
      <p className="message__text__line">{text}</p>
    </div>
  );
};
