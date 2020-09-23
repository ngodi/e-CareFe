import React from 'react';

import { unitsData } from '../../data';

import UnitItem from '../Partials/UnitItem/UnitItem';

import './Units.css';

export default () => {
    return (
        <div className="intensive-units">
            {
                unitsData.map((unit, i) => {
                    return (<UnitItem key={i} {...unit } />)
                })
            }
        </div>
    )
}