import React from 'react';
import Button from '../Button/Button';
import './Product.scss';

const Product = (props) => {
    return (
        <article className='article'>
            <div className='content'>
                <h3 className='title'>
                    {props.title}
                </h3>
                <p className='description'>
                {props.description}
                <br/>
                <br/>
                {props.description}
                </p>
                <Button>Know More</Button>
            </div>
            <div className='img-container'>
                <img src={props.image} alt={props.title}/>
            </div>
        </article>
    )
}

export default Product
