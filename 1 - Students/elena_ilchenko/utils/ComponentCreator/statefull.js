const fs = require('fs');
const path = require('path');

module.exports = componentName => {
    const content = `
    import React, {Component, Fragment} from 'react';
    import './${componentName}.css';

    class ${componentName} extends Component {
        constructor(props) {
            super(props);
            this.state = {
                
            }
        }

        render() {
            return (
                <Fragment>
                    <div className='${componentName}'></div>
                </Fragment>
            )
        }
    }


    export default ${componentName};

    
    `;

    fs.writeFileSync(
        path.resolve(__dirname, '..', '..', 'src', 'components', componentName, `${componentName}.jsx`),
        content
    );
}