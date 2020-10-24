import "./style.css";
import React from "react";

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      text: "",
    };
  }

  changeText = (event) => {
    let val = event.target.value;
    this.setState({ text: val });
  };

  send = () => {
    this.props.send(this.state.text);
    this.setState({ text: "" });
  };
  
  sendKey = (event) => {
    if (event.keyCode === 13) {
      this.props.send(this.state.text);
      this.setState({ text: "" });
    }
  };

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    let { text } = this.state;
    return (
      <div className="message__input">
        <input
          ref={this.textInput}
          className="message__input__field"
          type="text"
          value={text}
          onKeyUp={(event) => this.sendKey(event)}
          onChange={this.changeText}
        />
        <button className="message__input__btn" onClick={this.send}>
          Отправить
        </button>
      </div>
    );
  }
}