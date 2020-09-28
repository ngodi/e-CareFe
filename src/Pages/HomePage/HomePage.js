import React, { Component } from 'react';
import * as $ from "jquery";

import './homepage.css';

import CovidOverview from '../../Components/Partials/CovidOverview/CovidOverview';
import Domains from '../../Components/Domains/Domains';
import EcareNews from '../../Components/EcareNews/EcareNews';
import Registration from '../../Components/Registration/Registration';

import ArticlesPreview from '../../Components/ArticlesPreview/ArticlesPreview';
import MainBanner from '../../Components/Partials/MainBanner/MainBanner';
import MainHeader from '../../Components/Partials/MainHeader/MainHeader'

export default class HomePage extends Component {
    render() {
        return (
            <div id="landing-page">
                <MainHeader />
                <MainBanner page = 'home' image = "./Images/hero.png" heading ="Book an Appointment " description="React out to our Doctors or build your appointment right away"/>
                <CovidOverview image="./Images/corona-logo.png" country="INDIA" more="Know More" />
                <Domains />
                <EcareNews />
                <Registration />
                <ArticlesPreview />
            </div>
        )
    }
}
