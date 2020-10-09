import React from 'react'
import ReactDom from 'react-dom'


const app = document.querySelector('#app');

import Start from './components/Start/Start.jsx'

ReactDom.render(
    <div className="wrapper">
        <Start name="John" />
    </div>,
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