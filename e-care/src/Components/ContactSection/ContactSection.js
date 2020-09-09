import React from 'react';

import CustomButton from '../Partials/CustomButton/CustomButton';

import './Contactsection.css';

export default () => {
    return (
        <div className="contact-section">
            <div className="contact-form">
                <input type="text" name="first-name" />
                <input type="text" name="email" />
                <textarea></textarea>
                <CustomButton  buttonClass="send-nessage" buttonText="Send" />
            </div>
            <div className="contact-side-text">

            </div>
        </div>
    )
}