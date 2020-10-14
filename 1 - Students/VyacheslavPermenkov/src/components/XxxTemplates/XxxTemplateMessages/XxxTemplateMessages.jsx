// import './Messages.css'
// import React, { Component } from 'react'

// import Message from '../Message/Message.jsx'

// import ChatInput from '../ChatInput/ChatInput.jsx'

// export default class Messages extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			messages: [
// 				{ sender: 'Bot', text: '...' },
// 				{ sender: 'Me', text: 'Some text 1' },
// 				{ sender: 'Me', text: 'Some text2' },
// 				{ sender: 'Bot', text: '...' },
// 			]
// 		}
// 	}

// 	sendMessage = txt => {
// 		let { messages } = this.state;
// 		this.setState({
// 			messages: [...messages, { sender: 'Me', text: txt }],
// 		})
// 	}

// 	componentDidMount() {
// 		console.log('MOUNTED')
// 	}

// 	componentDidUpdate() {
// 		console.log('updated')
// 		//here bot adds message
// 	}

// 	render() {
// 		let { messages } = this.state;
// 		let messagesArray = messages.map((msg, i) => <Message sender={msg.sender} text={msg.text} key={i} />);

// 		return (
// 			<div className="d-flex flex-column align-items-center">
// 				<div className="msg-wrap">
// 					{messagesArray}
// 				</div>
// 				<ChatInput send={this.sendMessage} />
// 			</div>
// 		)
// 	}
// }