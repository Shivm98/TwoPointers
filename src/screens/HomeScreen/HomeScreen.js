import React, {useState} from 'react';
import './HomeScreen.scss';
import Button from '../../components/Button/Button';
import WebDevImg from '../../assets/images/webdev.svg';
import EcommerceImg from '../../assets/images/ecommerce.svg';
import SocialNetworksImg from '../../assets/images/social-network.svg';
import Particles from '../../components/Particals/Particles';
import products from '../../data/products';

const HomeScreen = () => {
	

	return (
		<>
			<header className='header'>
				<Particles />
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

			<main>
				<section className='products-section' id='products-section'>
					<Particles/>
					<div className='title'>
						<h2 className='heading-secondary'>
							Our Products
						</h2>
						<div className='underline'></div>
					</div>
					
					<div className='container'>
						{
							products.map(product => (
								<article className='article'>
									<div className='content'>
										<h3 className='title'>
											{product.title}
										</h3>
										<p className='description'>
										{product.description}
										<br/>
										<br/>
										{product.description}
										</p>
										<Button>Know More</Button>
									</div>
									<div className='img-container'>
										<img src={product.image} alt={product.title}/>
									</div>
								</article>
							))
						}
					</div>
				</section>
			</main>
		</>
	);
};

export default HomeScreen;
