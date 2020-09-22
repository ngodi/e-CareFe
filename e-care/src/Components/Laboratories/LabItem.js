import React from 'react'
import Slider from "react-slick";

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainHeading from '../Partials/MainHeading/MainHeading';

import './Laboratories.css';

export default ({title, slides, tests}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
       <>
          <MainHeading title={title} />
          <div className="lab-container">
            <div className="tests-list">
                <h6 className="lab-heading">Tests</h6>
                {
                    tests.map((test, i) => <span>{test}</span>)
                }
            </div>
            <div className="lab-slider">
               <h6 className="lab-heading">Labs Available</h6>
                <Slider {...settings}>
                    {slides.map((slide, i) => {
                        return(
                            <div>
                                <img src={slide.img} width="100%" height="100px" />
                                <div className="slide-details">
                                    <span><FaPhoneAlt />&nbsp;{slide.phone}</span>
                                    <span><FaMapMarkerAlt />&nbsp; {slide.address}</span>
                                </div>
                            </div>
                        )
                    })}
              </Slider>
            </div>
        </div>
       </>
    )
}


