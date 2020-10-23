import React, {Component} from 'react';
import './Messages.css';
import Message from '../Message/Message'
import ChatInput from '../ChatInput/ChatInput'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from "../../store/actions/messages.actions";



class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.msgListRef = React.createRef();
    }

    componentDidUpdate() {
        
        // setTimeout(() => {
        //     if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
        //         this.setState({
        //             messages: [...this.state.messages, {sender: 'bot', message: 'и что дальше?'}]
        //         })
        //     }
        // }, 1500);
        
 
        //scroll to last messages
        this.msgListRef.current.scrollTop = this.msgListRef.current.scrollHeight     
    }


    render() {
    
        return (
            <div className='MessageField'>
                <div className="messageList" ref={this.msgListRef}>
                    {
                        this.props.messagesFromRedux.map((msg, i) => <Message key={`${i+1}`} sender={msg.sender} text={msg.message}/>)
                    }
                </div>

                <ChatInput 
                    buttonName='Send'
                    onClickButton={this.props.sendMessage}
                    />
            </div>
        )
    }
}

const mapStateToProps = ({ messagesReducer }) => ({
    messagesFromRedux: messagesReducer.messages
});
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Messages)

