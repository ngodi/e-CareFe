import React from 'react';

import { Link } from 'react-router-dom';

import './CovidOverview.css';
import CustomButton from '../CustomButton/CustomButton';

export default ({ image, country, more, customClass }) => {
    return (
        <div className= {customClass? customClass : "covid-overview"}>
             {
                image && 
                <div className="corona-logo"><img src={image} width="250px" alt="corona logo"/><p>{country}</p></div>
            }
            <div className="total-cases">TOTAL CASES <p>2836926</p></div>
            <div className="active-cases">ACTIVE CASES <p>686395</p></div>
            <div className="recovered">RECOVERED <p>2096664</p></div>
            <div className="deaths">DEATHS <p>53866</p></div>
            {
                more &&
                <Link to = "/covid">
                   <CustomButton  buttonClass="know-more" buttonText="Know More" />
                </Link>
            }
        </div>
    )
}