import React from 'react';

import DoctorItem from '../Partials/DoctorItem/DoctorItem';

import { doctorList } from '../../data';

import './DoctorsFreeTreatment.css';

export default () => {
    return (
        <div className="doctors-free-treatment">
            {
                doctorList.map((doctor, i) => {
                    return (<DoctorItem {...doctor } >
                        <span className="fee">Fee: 500$</span>
                    </DoctorItem>)
                })
            }
        </div>
    )
}