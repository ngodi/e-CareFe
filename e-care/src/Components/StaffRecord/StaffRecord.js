import React from 'react';

export default () => {
    return (
        
        <div className="container-fluid bg-cl py-2">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div className="col d-flex flex-column align-items-center justify-content-center py-4">
                <h2 className="text-white">500+</h2>
                <p className="lead font-weight-bold text-white text-center">
                    Satisfied patients
                </p>
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center py-4">
                <h2 className="text-white">210+</h2>
                <p className="lead font-weight-bold text-white text-center">
                    Doctors
                </p>
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center py-4">
                <h2 className="text-white">100+</h2>
                <p className="lead font-weight-bold text-white text-center">
                    Nurses
                </p>
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center py-4">
                <h2 className="text-white">50+</h2>
                <p className="lead font-weight-bold text-white text-center">
                    Care units
                </p>
            </div>
        </div>
    </div>
    )
}