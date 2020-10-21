import './style.css'
import React, { Component } from 'react'

import { Toast } from 'react-bootstrap'

export default class Message extends Component {

    itsMe = () => {
        if(this.props.sender == 'Me'){
            return true
        }
        return false
    }
    render() {
        let { sender, text } = this.props;

        return (
            <>
                { this.itsMe() ?
                    <Toast className="ml-auto message_me" >
                        <Toast.Header closeButton={false}>
                            <strong className="mr-auto">{ sender }</strong>
                        </Toast.Header>
                        <Toast.Body>{ text }</Toast.Body>
                    </Toast> :
                    <Toast className="mr-auto">
                         <Toast.Header closeButton={false}>
                             <strong className="mr-auto">{ sender }</strong>
                         </Toast.Header>
                         <Toast.Body>{ text }</Toast.Body>
                    </Toast>
                }
            </>
        )
    }
}