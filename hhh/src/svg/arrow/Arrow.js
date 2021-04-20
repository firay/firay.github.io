import React from 'react';
import './arrow.scss'

const Arrow = (props) => {
    const {color,cssClass} = props
    console.log(color);
    return (
        <svg className={cssClass} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6416 7.75462L24.846 7.75463L24.846 22.2466" stroke={color} strokeWidth="2"/>
            <path d="M24.8477 7.75464L8.04798 24.8944" stroke={color} strokeWidth="2"/>
        </svg>
    );
};

export default Arrow;