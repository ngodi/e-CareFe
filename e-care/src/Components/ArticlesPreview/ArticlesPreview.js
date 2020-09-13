import React from 'react';
import { healthTipsData, doctorsTips } from '../../Components/Articles/Data/HealthTipsData';

import HealthyLivingItem from '../../Components/Articles/Components/HealthyLivingItem/HealthyLivingItem';
import './ArticlesPreview.css';

export default () => {
 const healthTipsPreview =  healthTipsData
 .filter(( tip, i) => i < 4)
 .map((tip , i) => (
    <HealthyLivingItem key={i} { ...tip } />
))  
    return (
        <div className="articles-preview">
            <h3 className="articles-preview-heading">Health Articles</h3>
            <p className="articles-preview-desc">Health and disease related news and contents post everyday</p>
            <div className="healthy-living-preview">
                {  
                healthTipsPreview                
                }                
            </div>


        </div>
    )
}