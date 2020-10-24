import './style.css';

import React, { Component } from 'react';

import {TextField} from '@material-ui/core';
import FloatingActionButton from '../FloatingButton/FloatingButton.jsx';

export default class InputComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleChange = evt => {
        if (evt.keyCode !== 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.props.send(this.state.text);
            this.setState({ text: '' });
        }
    }

    sendM = () => {
        this.props.send(this.state.text);
        this.setState({ text: '' });
    }

    render() {
        let { text } = this.state;

        return (
            <div className="controls d-flex justify-content-around align-items-baseline" style={ {width: '100%', display: 'flex'} }>
                <TextField
                    name="input"
                    fullWidth={ true }
                    placeholder="Type your message here"
                    style={ {fontSize: '22px', margin: '0 0 20px 0', width: '80%'} }
                    onChange={ this.handleChange }
                    onKeyUp={ this.handleChange }
                    value={ text }
                />
                <FloatingActionButton send = { this.sendM }>Send</FloatingActionButton>
            </div>
        )
    }
}