const fs = require('fs');
const path = require('path');

module.exports = componentName => {
    const content = `
        import React, { Fragment } from 'react';
        import './Message.css';

        export default props => {

            return (
                <Fragment>
                    <div className="${componentName}">
                        //{props.sender}: {props.text}
                    </div>
                </Fragment>
            )
        }
    `;

    fs.writeFileSync(
        path.resolve(__dirname, '..', '..', 'src', 'components', componentName, `${componentName}.jsx`),
        content
    );
}