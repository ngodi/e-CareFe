import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as $ from "jquery";

import './homepage.css';


// IMPORTING HEADER
import PublicNav from '../../Components/Partials/PublicNav/PublicNav';
import CovidOverview from '../../Components/Partials/CovidOverview/CovidOverview';
import Domains from '../../Components/Domains/Domains';
import EcareNews from '../../Components/EcareNews/EcareNews';
import StaffRecord from '../../Components/StaffRecord/StaffRecord';
import Registration from '../../Components/Registration/Registration';

import slider from '../../Functions/slider';
import ArticlesPreview from '../../Components/ArticlesPreview/ArticlesPreview';
import MainBanner from '../../Components/Partials/MainBanner/MainBanner';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <MainBanner page = 'home' image = "./Images/hero.png" heading ="Book an Appointment " description="React out to our Doctors or build your appointment right away"/>
                <CovidOverview />
                <Domains />
                <EcareNews />
                <StaffRecord />
                <Registration />
                <ArticlesPreview />
            </div>
        )
    }
}
