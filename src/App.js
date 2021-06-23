import React, { useEffect, useState } from 'react';
import Colors from './components/Colors/Colors';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Navigation from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		document.documentElement.className = theme;
		console.log(theme);
	}, [theme]);

	const changeThemeHandler = (theme) => {
		setTheme(theme);
	};

	const [showSidebar,setShowSidebar] = useState(false);

	const toggleSidebar = () => {
		setShowSidebar(showSidebar => !showSidebar);
	}

	return (
		<>
			<Colors changeThemeHandler={changeThemeHandler} />
			<Navigation toggle={toggleSidebar}/>
				<Sidebar show={showSidebar} toggle={toggleSidebar}/>
			<HomeScreen />
			
		</>
	);
};

export default App;
