import './Message.css'
import React from 'react'

// export default props => {
//     let { sender, text } = props;

//     return (
//         <div className="d-flex flex-column msg">
//             <strong>{ sender }</strong>

//             <p>{ text }</p>
//         </div>
//     )
// }

const Message = (props) => {
	let { sender, text } = props;

	return (
		<div className="message msg">
			<strong>{sender}</strong>
			<p>{text}</p>
		</div>
		// 	<div className="message msg">
		// 	<div><span>{photo}</span><strong>{sender}</strong></div>
		// 	<p>{text}</p>
		// </div>
	)
}
export default Message;