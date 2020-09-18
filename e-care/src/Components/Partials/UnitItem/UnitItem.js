import React from 'react';

import './UnitItem.css';

export default ({ image, unit}) => {
    return (
        <div className="unit-item">
            <div className="unit-photo">
                <img src={ image } width="100%" height="100%" alt="Health Unit" />
            </div>
            <div className="unit-name">{ unit }</div>
        </div>
    )
}