import './style.css'

import React from 'react'
import ReactDom from 'react-dom'
{/*         <comp nameStaticProp="John Doe" :propDynamic="peremennaya" /> //Vue
            <comp nameStaticProp="John Doe" propDynamic = { peremennaya } /> //React 
*/}

let arr = [];

function getContent() {
    arr.push('Some text');
    ReactDom.render(
        <Messages messages = { arr } />, document.querySelector('#test')
    )

}

function Messages(props) {
    let { messages } = props;
    let msgs = messages.map(text => <p>{ text }</p>);
    
    return <div> 
               { messages.length ?  msgs : <h1>No messages</h1> } 
            </div>
    
}

export default props => {
    let { name } = props;

    return (
        <div>
            <div id='test'>
                 <Messages messages = { arr } />
            </div>
            <button onClick = { getContent }>add</button>
        </div>
    )
}