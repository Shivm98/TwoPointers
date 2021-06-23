import React from 'react';
import './Button.scss';

const Button = (props) => {
	return <button className='primary-btn'>{props.children}</button>;
};

export default Button;
