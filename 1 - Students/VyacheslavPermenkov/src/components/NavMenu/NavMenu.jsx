import React from 'react';
import './NavMenu.css';


// let navLinks = ['To create a group', 'Create chanal', 'Contacts', 'Calls', 'Settings'];
// function creaateMenuItems(arr) {
// 	return arr.map((title, i) => <a key={i} >{title}</a>)
// }
const NavMenu = (props) => {
	return (
		<div className="navmenu">
			<nav className="navMenu__menu">
				{/* {creaateMenuItems(navLinks)} */}
				{/* <div className="navMenu__item">
				<NavLink to="/messages" className="navMenu__link navMenu__linkActive">Messages</NavLink>
			</div> */}
				{/* !привязать бургер к меню! */}
				<div className="navMenu__searchDialogs">
					<div action="#" className="navMenu__divSearchDialogs">
						<input type="text" placeholder="Search dialog" className="navMenu__divSearchDialogsInput" />
						<button className="navMenu__divSearchDialogsButton">Find</button>
					</div>
					<div className="navMenu__burger">
						<span className="navMenu__burgerLine"></span>
					</div>
				</div>
				<div className="navMenu__item">
					<a className="navMenu__link navMenu__linkActive">Messages</a>
				</div>
				<div className="navMenu__item">
					<a className="navMenu__link active">Contacts</a>
				</div>
				<div className="navMenu__item">
					<a className="navMenu__link">Calls</a>
				</div>
				<div className="navMenu__item">
					<a className="navMenu__link">Settings</a>
				</div>
				<div className="navMenu__item">
					<a className="navMenu__link">Anything</a>
				</div>
				<div className="navMenu__item">
					<a className="navMenu__link">Anything</a>
				</div>
				<div className="navMenu__item">
					<a className="navMenu__link">Anything</a>
				</div>
			</nav>
			<div className="navMenu__anonymousInfo">
				<div><a className="navMenu__anonymousInfoLink">Anonymous desktop</a></div>
				<div><a className="navMenu__anonymousInfoLink">Версия 1.0.0</a> - <a className="navMenu__anonymousInfoLink">About programm</a></div>
			</div>
		</div>
	);
}

export default NavMenu;