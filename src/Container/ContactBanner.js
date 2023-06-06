import React, { useState } from 'react';
import '../Styles/ContactBanner.css';
import {FiPhoneCall} from 'react-icons/fi'

const ContactBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const hideBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <div className={`contact-banner ${isBannerVisible ? 'visible' : 'hidden'}`}>
      <div className="banner-content">
        <p>Contact us without delay for a hassle-free experience!</p>
       
      <div style={{display: 'flex', alignItems:'center', marginLeft:'3rem'}}> 
      <FiPhoneCall style={{height:'30px', width:'30px', color:'white', marginRight:'5px'}}/>
        <p>   571-520-9119</p>
        </div>
      </div>
     
    </div>
  );
};

export default ContactBanner;
