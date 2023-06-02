import React, {useState} from "react";
import {Link, Button} from "@mui/material";
import '../Styles/Construction.css';
import ScrollTrigger from 'react-scroll-trigger';
import '../Styles/myComponent.css';

function ConstructionEstimation() {

  const [animate, setAnimate] = useState(false);

  const handleScrollEnter = () => {
    setAnimate(true);
  }
  return (
    <>
    <ScrollTrigger onEnter={handleScrollEnter}>
    <div className={animate ? 'animated' : ''}>
    <div className="Banner__wrap">
     <div className="Banner__wrapper">
        <div className="Banner__wrapper__outer">
            <div className="Banner__wrapper__inner">
            WORK WITH US! WE ARE A GLOBAL NETWORK OF CONSTRUCTION COST EXPERTS
            </div>
            <div className="Banner__button">
                <Link to="/#contactus">
                <Button className="BannerButton" href="/#contactus">
GET A QUOTE WITH 30% OFF
                </Button>
                </Link>
            </div>

        </div>
     </div>
    </div>
    </div>
    </ScrollTrigger>
    </>
  );
}

export default ConstructionEstimation;
