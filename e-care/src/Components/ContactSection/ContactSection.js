import React from 'react';

import CustomButton from '../Partials/CustomButton/CustomButton';

import './ContactSection.css';

export default (props) => {
    return (
          <div className="contact-section" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.67)), url(./Images/healthtips02.png)`}}>
            <div className="contact-form">
                <input value="Full Name" type="text" name="first-name" />
                <input value="Email" type="text" name="email" />
                <textarea value="Message Us" className="message-area" name="message-area" rows="4" cols="100"></textarea>
                <CustomButton  buttonClass="send-message" buttonText="Send" />
            </div>
            {props.children}
        </div>
    )
}