import React, {useState} from 'react';
import './HomeScreen.scss';
import HeroImg from '../../assets/images/hero-img.svg';
import Button from '../../components/Button/Button';
import SquareImg from '../../assets/images/square.png';
import WebDevImg from '../../assets/images/webdev.svg';
import Hero1 from '../../assets/images/hero1.jpg';
import Particles from '../../components/Particals/Particles';
import Navigation from '../../components/Navigation/Navigation';
import Sidebar from '../../components/Sidebar/Sidebar';

const HomeScreen = () => {
	const [showSidebar,setShowSidebar] = useState(false);

	const toggleSidebar = () => {
		setShowSidebar(showSidebar => !showSidebar);
	}

	return (
		<>
			<header className='header'>
				<Particles />
				<Navigation toggle={toggleSidebar}/>
				<Sidebar show={showSidebar}/>
				<div className='container'>
					<div className='data'>
						<h1 className='primary-heading'>Shape your ideas into reality</h1>
						<p className='sub-heading'>
							we provide you the best web and mobile solution to build your
							product
						</p>
						<Button>Get started</Button>
					</div>
					<div className='img-container'>
						{/* <img src={HeroImg} alt='hero-img' /> */}
						<img src={WebDevImg} alt='hero-img' />
					</div>
				</div>
			</header>
			<main></main>
		</>
	);
};

export default HomeScreen;
