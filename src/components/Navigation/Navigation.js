import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import './Navigation.scss';

const Navigation = (props) => {
   

    return (
        <nav className='navbar'>
            <div className='navbar-center'>
                <div className='logo-container'>
                    TwoPointers
                </div>
                <div className='navigation-toggle' onClick={props.toggle}>
                    <GiHamburgerMenu/>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
