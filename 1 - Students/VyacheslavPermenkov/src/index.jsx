import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/Header/Header.jsx';

const app = document.querySelector('#app');




// let textArr = ["некий текст", "некий текст"];



// let buttonSendFixText = <div>
// 	<button id="buttonDom">Show mail</button>
// </div>
// let text = "некий текст";
// buttonDom.onclick = function () {
// 	text.push(textArr);
// };
// buttonDom.onclick = function () {
// 	let text = "некий текст";
// 	function creaateNewElem(textArr) {
// 		return textArr.map((item, i) => <div key={i}>{item}</div >)
// 	}
// };



ReactDom.render(
	<div className="wraper">
		<Header />
		{/* {buttonSendFixText} */}
	</div>,
	app
)