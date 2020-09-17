import React from 'react';

import { hospitalData } from '../../data';

import HospitalItem from '../Partials/HospitalItem/HospitalItem';

import './HospitalsSuper.css';

export default () => {
    return (
        <div className="hospitals-super">
            {
                hospitalData.map((hospital, i) => (
                    <HospitalItem key = {i} {...hospital }/>
                ))
            }
        </div>
    )
}