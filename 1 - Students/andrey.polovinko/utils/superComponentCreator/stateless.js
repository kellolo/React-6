const fs = require('fs');
const path = require('path');

module.exports = componentName => {
const content = `import './style.css'
import React, { Fragment } from 'react'

let ${componentName} = (props) => {
    //let { some } = props;
    return (
        <Fragment>
            <div className="${componentName}"></div>
        </Fragment>
    )
}
export default ${componentName}`;

    fs.writeFileSync (
        path.resolve(__dirname, '..', '..', 'src', 'components', componentName, `${componentName}.jsx`),
        content
    );
}
