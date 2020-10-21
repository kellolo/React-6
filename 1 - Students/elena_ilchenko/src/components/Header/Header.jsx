
        import React, { Fragment } from 'react';
        import './Header.css';

        export default props => {

            return (
                <Fragment>
                    <div className="Header">
                        <h1>Чат {props.selected}</h1>
                    </div>
                </Fragment>
            )
        }
    