import React, { useState } from 'react';

const Sidebar = () => {
	const [showSideBar, setShowSideBar] = useState(true);

	const toggleSideBar = () => {
		setShowSideBar((showSideBar) => !showSideBar);
	};

	return (
		<div className='sidebar'>
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
};

export default Sidebar;
