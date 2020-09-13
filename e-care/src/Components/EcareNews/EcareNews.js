import React from 'react';

import './EcareNews.css';

import hero from '../../Assets/homepage/Images/hero.png';
import smlogo from '../../Assets/homepage/Images/sm-logo.png';
import star from '../../Assets/homepage/Images/Star.png';

export default () => {
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`}} className="hero-image">
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 pt-4 pb-5 text-center">
                <p className='next text-white'>E-Care on News</p>
                <img src={smlogo} className='img-fluid p-4' alt="sm-logo" />
                <p className='next2 text-white'>Condimentum egestas lobortis quis est <br /> adipiscing phasellus sed.</p>
                <div className="row d-flex justify-content-center">
                    <img src={star} alt="star" className='img-fluid' />
                    <img src={star} alt="star" className='img-fluid' />
                    <img src={star} alt="star" className='img-fluid' />
                    <img src={star} alt="star" className='img-fluid' />
                    <img src={star} alt="star" className='img-fluid' />
                </div>
            </div>
        </div>
    </div>
    )
}