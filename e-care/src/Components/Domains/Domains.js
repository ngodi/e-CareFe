import React from 'react';

// IMPORTING IMAGES
import brain from "../../Assets/homepage/Images/carousel-brain.png";
import heart from "../../Assets/homepage/Images/carousel-heart.png";
import orthopaedic from "../../Assets/homepage/Images/carousel-orthopaedic.png";
import robotics from "../../Assets/homepage/Images/carousel-robotics.png";
import pharm from "../../Assets/homepage/Images/carousel-pharm.png";

export default () => {
    return (
        <div className="container-fluid py-5">
        <header className='pb-4'>
            <h3 className="text-center carouselh3 text-danger">Center of Excellence</h3>
            <p className="text-center carouselH3P">
                Combining the best specialists and equipment to provide you nothing
                short of the best in healthcare
            </p>
        </header>
        <div className="sections-carousel d-flex justify-content-around py-3">
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
        </div>
    </div>
    )
}