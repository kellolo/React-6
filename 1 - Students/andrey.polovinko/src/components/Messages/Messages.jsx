import React from 'react';
import './style.css'
import Message from '../Message/Message.jsx'
import ChatInput from '../ChatInput/ChatInput.jsx'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sendMessage} from "../../store/actions/messages.actions";

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    send = txt => {
        this.props.sendMessage(txt, 'Me');
    }

    componentDidMount() {
        console.log('MOUNTED');
    }

    componentDidUpdate() {
        let { messages } = this.props;
        if (messages[[messages.length - 1]].sender === 'Me') {
            setTimeout(() =>
                    this.setState(
                        {messages: [...messages, {sender: 'Bot', text: 'Я всегда готов помочь'}]}),
                1000);

            console.log(messages[[messages.length - 1]].sender);
        }
    }

    render() {
        let { messages } = this.props;
        let messagesArray = messages.map((msg, i) => <Message sender={msg.sender} text={msg.text} key={i}/>)
        return (
            <div className=" ">
                <div className="messages">
                    {messagesArray}
                </div>
                <ChatInput send={this.send}/>
            </div>
        )
    }
}

const mapStateToProps = ({messagesReducer}) => ({
    messages: messagesReducer.messages
});
const mapDispatchToProps = dispatch => bindActionCreators({sendMessage}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
