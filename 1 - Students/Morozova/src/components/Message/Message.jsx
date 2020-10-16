
        import './style.css';
        import React, { Component, Fragment } from 'react';
        import Controls from '../Controls/Controls.jsx';
        import MessageField from '../MessageField/MessageField.jsx';

        export default class Message extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    messages: [
                        {
                            sender: 'John',
                            message: 'Hey, dude'
                        }
                    ],
                    counter: 0,
                }
            }

            AddMessage = (sender, message) => {
                this.setState({messages: [...this.state.messages, {sender, message}]});
            }

            componentDidUpdate = () => {
                let length = this.state.messages.length - 1;
                const botMsgs = ['Listen', 'I need to tell you one thing', 'As you could understand', 'I\'m robot', 'So', 'If you want', 'We can speak about your life', 'Cause in my life there is nothing interesting', 'Ok?'];
                if (this.state.messages[length].sender === 'Nick') {
                    setTimeout(() => {
                        const sender = 'John';
                        let message = botMsgs[this.state.counter];
                        this.setState({messages: [...this.state.messages, {sender, message}]});
                        this.setState({counter: this.state.counter+1});
                        if (this.state.counter === 9) {
                            this.setState({counter: 0});
                        }
                }, 1000);
                }
                this.render();
            }
        
            render() {
                <MessageField send = { this.AddMessage }/>;
                let msgArr = this.state.messages.map((msg, id) => 
                <div className="d-flex flex-column message" 
                style={ {alignSelf: msg.sender === 'John' ? 'flex-start' : 'flex-end', borderRadius: msg.sender === 'John' ? '0 25px 25px 25px' : '25px 0 25px 25px'} } 
                key={ id } >
                    <p className="sender" 
                    style={ {textAlign: msg.sender === 'John' ? 'start' : 'end'} } > { msg.sender } </p>
                    <p className="message-text" 
                    style={ {textAlign: msg.sender === 'John' ? 'start' : 'end'} } >{ msg.message } </p>
                </div>)
        
                return (
                    <Fragment>
                        { msgArr }
                        <Controls SendMsg = { this.AddMessage }/>
                    </Fragment>
                )
            }
        }
    