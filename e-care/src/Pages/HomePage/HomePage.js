import React, { Component } from 'react'
import * as $ from "jquery";

import './homepage.css';



import article1 from "../../Assets/homepage/Images/article-1.png";
import arcticle2 from "../../Assets/homepage/Images/article-2.png";
import article3 from "../../Assets/homepage/Images/article-3.png";
import healthtips01 from "../../Assets/homepage/Images/healthtips01.png";
import healthtips02 from "../../Assets/homepage/Images/healthtips02.png";


// IMPORTING HEADER
import SubHeader from '../../Components/Partials/SubHeader/SubHeader'
import PublicNav from '../../Components/Partials/PublicNav/PublicNav';
import CovidOverview from '../../Components/Partials/CovidOverview/CovidOverview';
import Domains from '../../Components/Domains/Domains';
import EcareNews from '../../Components/EcareNews/EcareNews';
import StaffRecord from '../../Components/StaffRecord/StaffRecord';
import Registration from '../../Components/Registration/Registration';

import slider from '../../Functions/slider';
import ArticlesPreview from '../../Components/ArticlesPreview/ArticlesPreview';
import Articles from '../../Components/Articles/Articles';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <PublicNav />
                <SubHeader page = 'home' image = "./Images/hero.png" heading ="Book an Appointment " description="React out to our Doctors or build your appointment right away"/>
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
