const fs = require('fs');
const path = require('path');

module.exports = componentName => {
    const content = `
        import './style.css'
        import React, { Fragment } from 'react'
        
        export default props => {
            //let { some } = props;
            let addClass;
            if (author == sender) {
                addClass = 'myMessage'
            } else {
                addClass = 'othersMessage'
            }
            return (
                <Fragment>
                    <div className="${componentName}">

                    </div>
                </Fragment>
            )
        }
    `;

    fs.writeFileSync (
        path.resolve(__dirname, '..', '..', 'src', 'components', componentName, `${componentName}.jsx`),
        content
    );
}