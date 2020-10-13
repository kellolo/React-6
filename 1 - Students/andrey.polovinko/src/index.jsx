import React from 'react'
import ReactDom from 'react-dom'

const app = document.querySelector('#app')

// import Start from './components/Start/Start.jsx'
// import Button from './components/Start/Button.jsx'

var messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;
const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={ message } />);
};

const AddMessages = (props) => {
  function handleClick(){
    console.log(props.messages);
    props.messages.push['Новое сообщение']
  }
  return (
    <button onClick={() => handleClick()}>Добавить сообщение</button>
  );
}

ReactDom.render(
    <div className="wrapper">
        {/* <Start name="John" /> */}
        <AddMessages messages={ messages } />
        <MessageField messages={ messages } />
    </div>,
    app
)

