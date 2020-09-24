import React from 'react';

import './AvailableDoctors.css';

import DoctorItem from '../Partials/DoctorItem/DoctorItem';

import { doctorList } from '../../data';
export default () => {
   return (
       <div className="available-doctors">
           <div className="heading">Doctors Available</div>
           <div className="available-doctors-list">
            {
                doctorList.map((doctor, i) => {
                    return ( <DoctorItem {...doctor } /> )
                })
            }
           </div>
       </div>
   )
}