import './style.css'
import React, { Component } from 'react'
// import {CurrentUser} from '../../moduls/User/User'
import {bindActionCreators} from "redux";
import {sendMessage} from "../../store/actions/messages.actions";
import {connect} from "react-redux";

class ChatInput extends Component {
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

    onKeyPressHandler = (e) => {
        if (e.charCode === 13) {
            this.send()
        }
    }

    send = () => {
        this.props.send({sender: this.props.user.name, text: this.state.text}); //работает метод из родителя
        this.setState({ text: '' });
    }

    render() {
        let { text } = this.state;
        return (
            <div className="msg-input-group">
                <input className="input-message" type="text" value = { text } onChange = { this.changeText } onKeyPress={this.onKeyPressHandler}/>
                <button className="button-send" onClick = { this.send }>Send</button>
            </div>
        )
    }
}

const mapStateToProps = ({userReducer}) => ({
    user: userReducer
});
const mapDispatchToProps = dipatch => bindActionCreators({ }, dipatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput)