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
            {
                <div className="doctors-tips-body">
                    <h3 className="articles-preview-heading">Health Tips Videos</h3>
                    <p className="articles-preview-desc"> Condimentum egestas lobortis quis est adipiscing phasellus sed</p>
                {
                    doctorsTips
                    .filter((tips, i) => i < 2)
                    .map(({image, drName, tips}, i) => (
                        (i%2 == 0)? 
                        (
                            <div>
                            <div key={i} className="doctors-tips-preview row align-items-center">
                                <div className="col-md-2"></div>
                                <div className="col-md-4 mb-3">
                                    <img src={image} alt="" style={{width: "90%"}} />
                                </div>
                                <div className="col-md-4">
                                    <h5 className="text-tertiary">
                                        {drName}
                                    </h5>
                                    <p className="text-muted">
                                        {tips}
                                    </p>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                            <hr className="border border-tertiary " />
                            </div>
                        ) :
                        (
                        <div>
                        <div key={i} className="doctors-tips-preview row align-items-center">
                        <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <h5 className="text-tertiary">
                                    {drName}
                                </h5>
                                <p className="text-muted">
                                    {tips}
                                </p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src={image} alt="" style={{width: "90%"}} />
                            </div>
                            <div className="col-md-2"></div>
                            
                        </div>
                        <hr className="border border-tertiary w-70" />                        </div>
                    )
                ))
                }
            </div>
            }


        </div>
    )
}