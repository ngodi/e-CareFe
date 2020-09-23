import React from 'react';

import { hospitalData } from '../../data';

import HospitalItem from '../Partials/HospitalItem/HospitalItem';

import './HospitalsTop.css';

export default () => {
    return (
        <div className="hospitals-top">
            {
                hospitalData.map((hospital, i) => (
                    <HospitalItem key = {i} {...hospital }/>
                ))
            }
        </div>
    )
}