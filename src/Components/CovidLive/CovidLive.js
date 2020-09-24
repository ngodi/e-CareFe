import React from 'react';

import { FaRegDotCircle, FaGlobeAfrica  } from "react-icons/fa";
import CovidOverview from '../Partials/CovidOverview/CovidOverview';
import './CovidLive.css';

export default () => {
    return (
        <div className="covid-live">
            <div className="covid-live-heading">
                <span ><FaRegDotCircle /></span>
                <span>Corona Tracker Live</span>
            </div>
            <div className="corona-news">
                <div className="country-picker">
                    <FaGlobeAfrica className="globe-icon" />
                    <select name="country">
                        <option>Global</option>
                    </select>
                </div>
                <div className="country-info">
                    <span> Corona News For You</span>
                    <div className="news-content">
                        <p>Stay Alert! Always wear Mask and Use Sanitizers</p>
                        <div className="covid-record">
                        <CovidOverview className="covid-record" customClass="covid-record" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="google-map">
                <img src='./Images/googlemap.png' alt="google maps placeholder" width="100%" />
            </div>
            <div className="covid-alert">
                Alert! 20 People Suspected Positive
            </div>
            <div className="filter-covid">
                <button className="filter-button">500m</button>
                <button className="filter-button-inverse">1 Km </button>
                <button className="filter-button">5 Km </button>
                <button className="filter-button"> 10 Km </button>
            </div>
            <div className="self-diagnosis">
                <span className="sub-heading">Diagnose Yourself</span>
                <div className="check-symptoms">
                    <ul className="covid-symptoms-list">
                        <li><span className="covid-symptom">Suffering from High Fever</span></li>
                        <li><span className="covid-symptom">Suffering from Cold and Cough</span>
                            <span className="covid-symptom">Have Breathing Problem</span>  
                        </li>
                        <li><span className="covid-symptom">Travelled from Abroad</span></li>
                        <li><span className="covid-symptom">Visit someone who has recently tested positive</span></li>
                        <li><span className="covid-symptom-selected">None of the Above</span></li>
                    </ul>
                    <div className="diagnosis-feedback">
                        <p>Congrats! You are safe, stay alert and stay Inside as much as possible. Use masks while going outside, sanitize yourself and your belongings, avoid contamination from any thing. Drink hot water and keep yourself clean always</p>
                        <p>Thank you</p>
                    </div>
                    <button className="corona-helpline">Corona HelpLine No: +234-234-7654</button>
                </div>
                
            </div>
        </div>
    )
}