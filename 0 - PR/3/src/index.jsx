import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

const app = document.querySelector('#app');

import Messages from './components/Messages/Messages.jsx'
import ChatList from './components/ChatList/ChatList.jsx'




ReactDom.render(
    <StylesProvider>
        <div className="wrapper d-flex w-100 justify-content-center">
            <ChatList />
            <Messages />
        </div>
    </StylesProvider>,
    app
)


// let navLinks = ['About', 'Benefits', 'Contacts'];

// function createMenuItems(arr) {
//     return arr.map((title, i) => <li key = { i }><a>{ title }</a></li>)
// }

// let header = <header>
//     <nav>
//         { createMenuItems(navLinks) }
//     </nav>
// </header>

// let header = <header>
//     <nav>
//         <li><a>1</a></li>
//         <li><a>2</a></li>
//         <li><a>3</a></li>
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
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum molestiae neque illum corporis minus repudiandae accusamus natus mollitia. Accusantium adipisci dolor officia quibusdam dicta obcaecati odit a ratione nemo ducimus.</p>
// </footer>

// ReactDom.render(
//     <div>
//         { header }
//         { main }
//         { footer }
//     </div>,
//     app
// )