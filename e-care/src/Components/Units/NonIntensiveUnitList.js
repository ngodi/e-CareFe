import React from 'react';

import { nonUnitsData } from '../../data';

import './Units.css';

export default () => {
    return (
        <div className="non-intensive-units">
            {
              nonUnitsData.map((unit, i) => {
                  return(<div className="unit-data">
                            <div className="unit-icon">
                               <img src={unit.image} alt="Non Intensive care Unit" />
                            </div>
                            <div className="unit-type">
                                { unit.name}
                            </div>
                        </div>
                      
                      )
              })
            }
        </div>
    )
}