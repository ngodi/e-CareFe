import React from 'react';
import {Link} from 'react-router-dom';

import './HealthyLivingItem.css';

export default ({photo, title, date, comments, description}) => {
    return (
        <div className="healthy-living-item shadow">
            <img src={photo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-primary m-0">
                    {title}
                </h5>
                <small className="small font-weight-bold text-danger">
                    {`${date} | ${comments.length} Comments`}
                </small>
                <p className="card-text mt-3">
                    {`${description}...`}
                </p>
                <p className="card-text text-right">
                    <a href="#" className="text-tertiary">
                        Continue reading
                    </a>
                </p>
            </div>
    </div>
    )
}