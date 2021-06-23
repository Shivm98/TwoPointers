import React, { useState } from 'react';
import './Navigation.scss';
import { BiPhoneCall } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navigation = () => {
	const [showSideBar, setShowSideBar] = useState(true);

	const toggleSideBar = () => {
		setShowSideBar((showSideBar) => !showSideBar);
	};

	const navigation = (
		<ul className='navigation-list'>
			<li className='nav-item'>
				<a href='#' className='nav-link' data='Products'>
					Products
				</a>
			</li>
			<li className='nav-item'>
				<a href='#' className='nav-link' data='Resources'>
					Resources
				</a>
			</li>
			<li className='nav-item'>
				<a href='#' className='nav-link' data='About'>
					About
				</a>
			</li>
		</ul>
	);

	const sideBar = (
		<div className={showSideBar ? `sidebar active` : `sidebar`}>
			<ul className='sidebar-list'>
				<li className='nav-item'>
					<a href='#' className='nav-link' data='Products'>
						Products
					</a>
				</li>
				<li className='nav-item'>
					<a href='#' className='nav-link' data='Resources'>
						Resources
					</a>
				</li>
				<li className='nav-item'>
					<a href='#' className='nav-link' data='About'>
						About
					</a>
				</li>
			</ul>
		</div>
	);

	return (
		<div className='navigation'>
			<div className='logo-container'>
				<div className='logo'>codeopidea</div>
			</div>

			{navigation}
			{sideBar}

			<div className='call' title='call'>
				<BiPhoneCall />
			</div>

			<div className='toggleBtn' onClick={toggleSideBar}>
				<GiHamburgerMenu />
			</div>
		</div>
	);
};

export default Navigation;
