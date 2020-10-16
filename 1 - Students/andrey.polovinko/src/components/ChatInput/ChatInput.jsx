import React, { Component } from 'react'


class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    changeText = evt => {
        let { text } = this.state;
        let val = evt.target.value;
        this.setState({ text: val })
    }

    changeAuthor = evt => {
        let { sender } = this.state;
        let val = evt.target.value;
        this.setState({ sender: val })
    }

    send = () => {
        this.props.send(this.state.sender, this.state.text)
        this.setState({ sender: '', text: '' })
    }

    render() {
        let { sender, text } = this.state;
        return (
            <div className="input-group w-25">
                <input type="text" className="form-control" value={sender} placeholder="Author" onChange={this.changeAuthor} />
                <input type="text" className="form-control" value={text} placeholder="Text" onChange={this.changeText} />
                <div className="input-group-append">
                    <button onClick={this.send} className="btn btn-outline-success">Send</button>
                </div>
            </div>
        )
    }
}

export default ChatInput