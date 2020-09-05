import React from 'react';

import './HealthyLivingItem.css';

export default ({photo, title, date, comments, description}) => {
    return (
        <div className="healthy-living-item">
            <img src={photo} alt="..." width="50px"/>
            <div>
                <div>
                    {title}
                </div>
                <small>
                    {`${date} | ${comments.length} Comments`}
                </small>
                <div>
                    {`${description}...`}
                </div>
                <div>
                    <a href="#">
                        Continue reading
                    </a>
                </div>
            </div>
    </div>
    )
}