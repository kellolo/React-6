import React from 'react';
import ReactDom from 'react-dom';


const app = document.querySelector('#app');

let messages = ['Hello', 'How are you?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
    let {messages} = props;
    return messages.map(message => <MessageComponent text={message} />);
}

ReactDom.render(
    <MessageField messages={messages} />,
    app
);


// import Start from './components/Start/Start.jsx'

// ReactDom.render(
//     <div className="wrappwr">
//         <Start name="John"/>
//     </div>,
//     app
// )

// let navLinks = ['Home', 'About', 'Contacts'];

// function createMenuItems(arr) {
// return arr.map((title, i) => <li key = { i }><a>{ title }</a></li>);
// }

// let header = <header>
//     <nav>
//         <ul>
//             { createMenuItems(navLinks) }
//         </ul>
//     </nav>

// </header>

// let main = <main>
//     <section>
//         <h1>Hello</h1>
//     </section>
//     <section>
//         <h1>React</h1>
//     </section>

// </main>

// let footer = <footer>
//     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto beatae quo ab dolorem excepturi consectetur et dolores aperiam reiciendis nulla?</p>
// </footer>

// ReactDom.render(
//     <div>
//         { header }
//         { main }
//         { footer }
//     </div>,
//     app
// )