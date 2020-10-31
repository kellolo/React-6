import './style.css'
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    changeText = evt => {
        let val = evt.target.value;
        this.setState({ text: val });
    }

    send = (e) => {
        e.preventDefault();
        let {text} = this.state;
        let {send} = this.props;
        console.log(this.state.text);
        console.log(text);
        if(!text){
            alert('Введите текст сообщения');
            return;
        }
        if(typeof send === 'function'){
            send(this.state.text);
            this.setState({ text: '' });
        }
    }

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.send(e);
        }
     };

    render() {
        let { text } = this.state;
        return (
            <>
                <Form className="chat-input d-flex align-items-center">
                    <Form.Control  
                        as="textarea"
                         rows={3} type="text" 
                         value = { text } 
                         onChange = { this.changeText } 
                         onKeyUp={ this.handleKeyUp }  
                         />
                    <Button 
                        className="h-50 ml-2" 
                        variant="outline-success"
                        type="submit" 
                        onClick = { this.send }  
                        >
                        Отправить
                    </Button>
                </Form>
            </>
        )
    }
}