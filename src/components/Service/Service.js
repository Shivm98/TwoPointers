import React from 'react';
import './Service.scss';

const Service = (props) => {
    return (
        <article className='card'>			
            <div className='card-img'>
                <img src={props.image} alt={props.title}/>
            </div>
            <h3 className='title'>
                {props.title}
            </h3>
    </article>
    )
}

export default Service;
