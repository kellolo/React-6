
        import './style.css';
        import React from 'react';

        export default props => {
            let { chatId } = props; 

            return (
                <header className="header d-flex justify-content-center">
                    <span>Chat number { chatId }</span>
                </header>
            )
        }
    