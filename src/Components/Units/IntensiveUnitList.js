import React from 'react';

import { unitsData } from '../../data';
import MainHeader from '../../Components/Partials/MainHeader/MainHeader'
import UnitItem from '../Partials/UnitItem/UnitItem';

import './Units.css';

export default () => {
    return (
        <div className="intensive-units">
            <MainHeader/>
            {
                unitsData.map((unit, i) => {
                    return (<UnitItem key={i} {...unit } />)
                })
            }
        </div>
    )
}