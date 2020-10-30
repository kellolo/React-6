import React, { Component } from 'react'


class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    changeText = evt => {
        
        let val = evt.target.value;
        this.setState({ text: val })
    }

    send = () => {
        this.props.send(this.state.text)
        this.setState({ text: '' })
    }

    render() {
        let { text } = this.state;
        return (
            <div className="input-group mt-3">
                <input type="text" className="form-control" value={text} placeholder="Text" onChange={this.changeText} />
                <div className="input-group-append">
                    <button onClick={this.send} className="btn btn-outline-success">Send</button>
                </div>
            </div>
        )
    }
}

export default ChatInput