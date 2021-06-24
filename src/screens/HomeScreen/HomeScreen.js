import React, {useState} from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

import './HomeScreen.scss';
import Button from '../../components/Button/Button';
import WebDevImg from '../../assets/images/webdev.svg';
import EcommerceImg from '../../assets/images/ecommerce.svg';
import SocialNetworksImg from '../../assets/images/social-network.svg';
import Particles from '../../components/Particals/Particles';
import products from '../../data/products';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Product from '../../components/Product/Product';

import ChatBotImg from '../../assets/images/Chat-bot.svg';
import services from '../../data/services';
import Service from '../../components/Service/Service';
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
						<img src={WebDevImg} alt='hero-img' />
					</div>
				</div>
			</header>

			<main>
				<section className='products-section' id='products-section'>
					<Particles/>
					<SectionTitle>Our Products</SectionTitle>
					<div className='container'>
						{
							products.map(product => (
							<Product title={product.title} description={product.description} image={product.image}/>
							))
						}
					</div>
				</section>

				<section className='services-section'>
					<SectionTitle>We Provide the best services</SectionTitle>
					<div className='container'>
						{
							services.map(service => (
								<Service title={service.title} image={service.image}/>
							))
						}
					</div>
				</section>

				<section className='about-section'>
					<SectionTitle>Meet Us</SectionTitle>
					<div className='container'>
						<article className='testimonial'>
							<div className='profile-img'>
								<img src='https://media-exp3.licdn.com/dms/image/C4D03AQGx3carXAYuYA/profile-displayphoto-shrink_800_800/0/1623953487191?e=1629936000&v=beta&t=5SZRjvpkzHCAM8Ft27IYlhFG4h6nwXWl43jLuoQ3WYI'/>
							</div>
							<h4 className='name'>Harsh Vijay</h4>
							<h5 className='work'>Machine Learning Engineer</h5>
							<div className='social-links'>
								<AiFillLinkedin/>
								<AiOutlineInstagram/>
								<AiOutlineGithub/>
							</div>
						</article>
						<article className='testimonial'>
							<div className='profile-img'>
								<img src='https://media-exp3.licdn.com/dms/image/C5103AQGTYoDEhO7x1w/profile-displayphoto-shrink_800_800/0/1568189139158?e=1629936000&v=beta&t=5s3qL7s7zuno2bNM3dim0DtAQEFPROzIIqhMO6CbSj8'/>
							</div>
							<h4 className='name'>Shivshankar Mishra</h4>
							<h5 className='work'>fullstack web developer</h5>
							<div className='social-links'>
								<AiFillLinkedin/>
								<AiOutlineInstagram/>
								<AiOutlineGithub/>
							</div>
						</article>
					</div>
				</section>
				
			</main>
		</>
	);
};

export default HomeScreen;
