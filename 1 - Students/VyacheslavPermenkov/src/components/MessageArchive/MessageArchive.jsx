import React, { Component } from 'react';
import { render } from 'react-dom';
import './MessageArchive.css';

import Message from '../Message/Message.jsx';
import ChatInput from '../ChatInput/ChatInput.jsx'


export default class MessageArchive extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
			text: ''
		}
	}
	sendMessage = txt => {
		let { messages } = this.state;
		this.setState({
			messages: [...messages, { sender: 'Me', text: txt }]
		})
	}

	componentDidMount() {
		console.log('MOUNTED')
	}
	componentDidUpdate() {
		if (this.state.messages.length % 2 === 1) {  // Остаток от деления на 2
			setTimeout(() =>
				this.setState(
					{ messages: [...this.state.messages, { sender: 'Bot', text: 'Не приставай ко мне, я робот!', }] }),
				1000);
		}

	}



	render() {
		let { messages } = this.state
		let messageArray = messages.map((msg, i) => <Message sender={msg.sender} text={msg.text} key={i} />);

		return (
			<div className="messageArchive">
				<div action="#" className="messageArchive__divSearchName">
					<input type="text" placeholder="Search mail" className="messageArchive__divSearchNameInput" />
					<button className="messageArchive__divSearchNameButton">Find</button>
				</div>
				<div className="msg-wrap">
					{messageArray}
				</div>
				<ChatInput send={this.sendMessage} />
				{/* <div className="123">
					<input type="text" className="1234" value={text} onChange={this.changeText} />
					<button className="12345" onClick={this.sendMessage}>Send</button>
				</div> */}
			</div>
		)
	}
}

// export default class MessageArchive extends Component {
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
// 				{/* <ChatInput send={this.sendMessage} /> */}
// 			</div>
// 		)
// 	}
// }



// const MessageArchive = () => {
// 	return (
// 		<div className="messageArchive">

// 			{/*<Header/>   +   <Header/>   +        <Header/> + <Header/> +<Header/>


// 			<Search />     +<Burger/>    +            <Message/>+  <Message/> +  <Message/>


// 			<Messages/> + <Messages/> +                <Message/>+  <Message/> +  <Message/>
// 			<Messages/> + <Messages/> +                <Message/>+  <Message/> +  <Message/>
// 			<Messages/> + <Messages/> +                <Message/>+  <Message/> +  <Message/>
// 			<Messages/> + <Messages/> +                <Message/>+  <Message/> +  <Message/>


// }




// 		</div>
// 	)
// }
// export default MessageArchive;