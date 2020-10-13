import React from 'react';
import './Header.css';

let navLinks = ['About', 'beneduts', 'Contacts'];
function creaateMenuItems(arr) {
	return arr.map((title, i) => <li key={i}><a>{title}</a></li>)
}

const Header = () => {
	return (
		<header>
			<nav>
				{creaateMenuItems(navLinks)}
			</nav>
		</header>
	)
}
export default Header;