import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// IMPORTING IMAGES
import brain from "../../Assets/homepage/Images/carousel-brain.png";
import heart from "../../Assets/homepage/Images/carousel-heart.png";
import orthopaedic from "../../Assets/homepage/Images/carousel-orthopaedic.png";
import robotics from "../../Assets/homepage/Images/carousel-robotics.png";
import pharm from "../../Assets/homepage/Images/carousel-pharm.png";


export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
         };
    return (
        <Slider {...settings}>
            <div className="d-flex flex-column align-items-center">
                <img src={heart} alt="" />
                <p className='carouselText pt-3'>Heart</p>
            </div>
            <div className="d-flex flex-column align-items-center">
                <img src={brain} alt="" />
                <p className='carouselText pt-3'>Neuro</p>
            </div>
            <div className="d-flex flex-column align-items-center">
                <img src={orthopaedic} alt="" />
                <p className='carouselText pt-3'>Orthopaedics</p>
            </div>
            <div className="d-flex flex-column align-items-center">
                <img src={pharm} alt="" />
                <p className='carouselText pt-3'>Critical</p>
            </div>
            <div className="d-flex flex-column align-items-center">
                <img src={robotics} alt="" />
                <p className='carouselText pt-3'>Robotics</p>
            </div>
            <div className="d-flex flex-column align-items-center">
                <img src={robotics} alt="" />
                <p className='carouselText pt-3'>Robotics</p>
            </div>
    </Slider>
    )
    }
}