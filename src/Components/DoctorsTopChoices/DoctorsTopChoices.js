import React from 'react';

import DoctorItem from '../Partials/DoctorItem/DoctorItem';

import { doctorList } from '../../data';

import './DoctorsTopChoices.css';

export default () => {
    return (
        <div className="doctors-top-choices">
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