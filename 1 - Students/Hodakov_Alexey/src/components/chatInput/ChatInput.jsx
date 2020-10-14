import "./chatInput.css";
import React from "react";

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  changeText = (event) => {
    let val = event.target.value;
    this.setState({ text: val });
  };

  send = () => {
      this.props.send(this.state.text)
      this.setState({text: ''})
  }

  render() {
    let { text } = this.state;
    return (
      <div className="message__input">
        <input
          className="message__input__field"
          type="text"
          value={text}
          onChange={this.changeText}
        />
        <button className="message__input__btn" onClick={ this.send }>Отправить</button>
      </div>
    );
  }
}
