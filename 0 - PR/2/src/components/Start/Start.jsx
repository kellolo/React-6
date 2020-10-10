import './style.css'

import React from 'react'
{/*         <comp nameStaticProp="John Doe" :propDynamic="peremennaya" /> //Vue
            <comp nameStaticProp="John Doe" propDynamic = { peremennaya } /> //React 
*/}

export default props => {
    let { name } = props;
    return (
        <div>
            <h2>From component</h2>
            <p>Hello, { name }</p>
        </div>
    )
}