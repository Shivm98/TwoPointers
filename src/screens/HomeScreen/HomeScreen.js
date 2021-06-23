import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './HomeScreen.scss';
import HeroImg from '../../assets/images/hero-img.svg';
import Button from '../../components/Button/Button';
import SquareImg from '../../assets/images/square.png';
import Hero1 from '../../assets/images/hero1.jpg';
import Particles from '../../components/Particals/Particles';

const HomeScreen = () => {
	return (
		<>
			<header className='header'>
				<Particles />
				<nav className='navbar'>
					<Navigation />
				</nav>
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
						<img src={Hero1} alt='hero-img' />
					</div>
				</div>
			</header>
			<main></main>
		</>
	);
};

export default HomeScreen;
