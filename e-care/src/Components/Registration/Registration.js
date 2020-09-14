import React from 'react';

import cross from '../../Assets/homepage/Images/cross.png';
import man from '../../Assets/homepage/Images/man.png';

export default () => {
    return (
        <div className="registration">
                    <div className="container-fluid pt-5">
        <div className="row row-cols-1">
            <h3 className="text-center" style={{ color: '#FC3B3B', fontFamily: "'Source Sans Pro', sans-serif", fontWeight: "600" }} >Register yourself</h3>
            <p className="text-center registerP">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    </div>
    <div className="container-fluid mt-5">
        <div className="row row-cols-1 pb-5 row-cols-md-2">
            <div className="col ttr text-center py-4">
                <img src={cross} className='img-fluid pt-5 pb-4' alt="red cross" />
                <h3 style={{ fontSize: '25px' }} className='pb-5 grr'>I am a Doctor/Nurse</h3>
                <p className='pb-3 text-dark'>
                    Sign in as a doctor or a nurse thus <br /> be able to post tips on
                    health and <br /> reach out to patients
                </p>
                <div className="mx-auto">
                    <button className="btn registerBtn pl-4 pr-4">
                        Register as a Doctor/Nurse
                    </button>
                </div>
            </div>
            <div className="col ttr text-center hero-image py-4">
                <img src={man} className='img-fluid pt-5 pb-4' alt="red cross" />
                <h3 className='text-white text-center pb-5'>I am a Patient</h3>
                <p className='text-white pb-3'>
                    Sign in as a candidate to be able to <br /> consult a doctor and get
                    notification
                </p>
                <div className="mx-auto">
                    <button className="btn registerBtn2 pl-4 pr-4">
                        Register as a Patient
                    </button>
                </div>
            </div>
        </div>
    </div>
 </div>
    )
}