import React from 'react';
import './Sidebar.scss';

const Sidebar = (props) => {
    return (
        <div className={props.show ? `sidebar show`: 'sidebar'}>
             <div className='logo-container'>
                    TwoPointers
                </div>
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
        </div>
    )
}

export default Sidebar;
