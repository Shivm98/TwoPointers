import React from 'react';
import './SectionTitle.scss';

const SectionTitle = (props) => {
    return (
        <div className='title'>
            <h2 className='heading-secondary'>
                {props.children}
            </h2>
            <div className='underline'></div>
        </div>
    )
}

export default SectionTitle;
