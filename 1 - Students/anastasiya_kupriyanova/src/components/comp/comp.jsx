import './style.css';

import React, { Component } from 'react';

export default class Comp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: true
        }
    }

    handleClick = () => {
        this.setState({
            test: !this.state.test
        })
    }

    render() {
        let { test } = this.state;

        return (
            <div className="test">
                <button onClick={ this.handleClick }>Toggle</button>

                <br/>

                {
                    test &&
                    <div>
                        <h1>Test = true</h1>
                    </div>
                }

                {
                    !test &&
                    <div>
                        <h1>Test = false</h1>
                    </div>
                }
            </div>
        )
    }
}

