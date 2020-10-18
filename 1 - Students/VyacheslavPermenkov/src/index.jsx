import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import Header from './components/Header/Header.jsx';
import MessageArchive from './components/MessageArchive/MessageArchive.jsx';
import NavMenu from './components/NavMenu/NavMenu.jsx';

const app = document.querySelector('#app');


ReactDom.render(
	<div className="wraper">
		{/* <BrowserRouter>
			<div className='wraper'>
				<Header />
				<NavMenu />
				<div className="wraperComponent">
					<Route path='/settings' component={Settings} />
					<Route path='/settings' component={Settings} />
					<Route path='/settings' component={Settings} />
					<Route path='/settings' component={Settings} />
					<Route path='/settings' component={Settings} />
				</div>
			</div>
		</BrowserRouter> */}
		<Header />
		<div className="main">
			<NavMenu />
			<MessageArchive />
		</div>
		{/* {buttonSendFixText} */}
	</div>,
	app
)