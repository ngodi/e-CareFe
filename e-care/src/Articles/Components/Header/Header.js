import React from 'react';

import './Header.css';

import heroImage from '../../Images/hero-image.png';

export default () => {
    return (
        <section style={{backgroundImage:`linear-gradient( rgba(0, 44, 156, 0.58), rgba(0, 44, 156, 0.58)), 
        url(${heroImage})`}} className="the-height hero-section__container hero-section__container--article-list container text-white mt-3 d-flex flex-column justify-content-center align-items-center">
        <h1>
            Articles for you
        </h1>
        <p>
            Get Healthy Tips from Doctors and Nurses to get a healthy lifestyle
        </p>
       </section>
    )
}