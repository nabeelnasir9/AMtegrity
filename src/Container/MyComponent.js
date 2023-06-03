import React from 'react';
import '../Container/ImageAnimation.css';
import Logo_1 from '../images/Estimation.jpg';
import Logo_2 from '../images/Masonry.jpg';;

const MyComponent = () => {
  return (
    <div>
      <div className="image-container">
        <img src={Logo_1} alt="" />
      </div>
      <div className="image-container">
        <img src={Logo_2} alt="" />
      </div>
      {/* Add more image containers as needed */}
    </div>
  );
};

export default MyComponent;