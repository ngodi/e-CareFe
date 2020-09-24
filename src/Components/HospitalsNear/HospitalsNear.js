import React from 'react';

import { hospitalData } from '../../data';

import HospitalItem from '../Partials/HospitalItem/HospitalItem';

import './HospitalsNear.css';

export default () => {
    return (
        <div className="hospitals-near">
            {
                hospitalData.map((hospital, i) => (
                    <HospitalItem key = {i} {...hospital }/>
                ))
            }
        </div>
    )
}