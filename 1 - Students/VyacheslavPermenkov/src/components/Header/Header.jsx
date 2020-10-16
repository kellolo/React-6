import React from 'react';
import './Header.css';
// import Profile from '../Profile/Profile.jsx'


const Header = () => {
	return (
		<div className="header">
			<h1 className="header__icon">Ano&#x301;nymous</h1>
			{/* <Profile /> */}
			<div className="header__profile header__item">
				<img src="https://i.pinimg.com/originals/54/ee/01/54ee018324e7463cf8beb69cef5a8504.jpg" alt="photo" className="header__profilePhoto header__item" />
				<div className="header__profileInfo header__item">
					<div className="header__profileName" >Name Surname</div>
					<div className="header__profilePhone" >Phone</div>
				</div>
				<button className="header__profileChange header__item">Change account</button>
				<button className="header__profileExit header__item">Exit</button>
			</div>
		</div>
	);
}
export default Header;