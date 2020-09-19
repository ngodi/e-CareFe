import React from "react";

import './Domains.css';

import SimpleSlider from '../SimpleSlider/SimpleSlider';

export default () => {
    return (
        <div className="domains py-5">
        <header className='pb-4'>
            <h3 className="text-center carouselh3 text-danger">Center of Excellence</h3>
            <p className="text-center carouselH3P">
                Combining the best specialists and equipment to provide you nothing
                short of the best in healthcare
            </p>
        </header>
        <div className="sections-carousel py-3">
          <SimpleSlider />
        </div>
    </div>
    )
  }