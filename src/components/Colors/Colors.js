import React from 'react';
import './Colors.scss';

const Colors = (props) => {
	return (
		<div className='color-themes'>
			<button
				className='color green'
				onClick={() => props.changeThemeHandler('green')}
			></button>
			<button
				className='color blue'
				onClick={() => props.changeThemeHandler('blue')}
			></button>
			<button
				className='color dark'
				onClick={() => props.changeThemeHandler('dark')}
			></button>

			<button
				className='color black'
				onClick={() => props.changeThemeHandler('black')}
			></button>
			<button
				className='color random'
				onClick={() => props.changeThemeHandler('random')}
			></button>
		</div>
	);
};

export default Colors;
