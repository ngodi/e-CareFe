import React from 'react';

import HealthyLivingItem from '../HealthyLivingItem/HealthyLivingItem';

const healthTipsData = [
    {
        "photo" : "../../Images/image-1.png",
        "title" : "Get relevant informations about Hepatitis-C",
        "date": "March 26",
        "comments" : [],
        "description" : "A group of homogenous tasks related by similarity of functions. When performed by an employee"
    }
]
export default () => {
    const healthTipsLising = healthTipsData.map((data, i) => (
        <HealthyLivingItem key={i} {...data} />
    ))
    return (
        <div className="healthy-living-list">
           <div>
              <h2 className=" heading w-100 text-center text-secondary p-3 mt-5 mb-3">
                 healthy living
              </h2>
          </div>
          <div className="health-list-content">
              {
                  healthTipsLising
              }
          </div>
        </div>
    )
}