import React, { useEffect, useState } from 'react';
import Colors from './components/Colors/Colors';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const App = () => {
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		document.documentElement.className = theme;
		console.log(theme);
	}, [theme]);

	const changeThemeHandler = (theme) => {
		setTheme(theme);
	};

	return (
		<>
			<Colors changeThemeHandler={changeThemeHandler} />
			<HomeScreen />
		</>
	);
};

export default App;
