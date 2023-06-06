// import React from 'react';
// import EstiVideo from '../images/EstimateVideo.mp4';

// const EstimateVideo = () => {
//   return (
//     <div style={{height:'auto%', width:'100%', objectFit:'contain'}}>
//       <video autoPlay loop style={{height:'auto%', width:'300px', objectFit:'contain'}}>
//           <source src={EstiVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//     </div>
//   )
// }

// export default EstimateVideo

import React, {useEffect} from "react";
import EstiVideo from "../images/EstimateVideo.mp4";
import Aos from 'aos';
import 'aos/dist/aos.css';


const EstimateVideo=()=>{

    useEffect(()=>{
        Aos.init({duration: 1400});
          },[]);

    return (
        <div style={{background:'white', display:'flex', flexDirection:'column'}} data-aos="fade-up">

            
           
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginBottom:'2rem'}}>

        <ul>
        <div style={{textAlign:'center', fontSize:'42px', marginBottom:'2rem'}}>Why Should You Choose Us?</div>

            <li style={{fontSize:'28px', color:'#4267b2'}}>Bid with confidence and <span style={{color:'black'}}>never lose again!</span></li>
            <li style={{fontSize:'28px', color:'#4267b2'}}>Limitless industry <span style={{color:'black'}}>awareness.</span></li>
            <li style={{fontSize:'28px', color:'#4267b2'}}>Affordable <span style={{color:'black'}}>solutions.</span></li>
            <li style={{fontSize:'28px', color:'#4267b2'}}>Accurate Services <span style={{color:'black'}}>without errors.</span></li>
            <li style={{fontSize:'28px', color:'#4267b2'}}>Expertise forged <span style={{color:'black'}}>through experience.</span></li>
            <li style={{fontSize:'28px', color:'#4267b2'}}>Rapid turnaround <span style={{color:'black'}}>time guaranteed.</span></li>
        </ul>
          <video
          style={{ height: "700px", width: "300px", objectFit: "contain", marginTop:'0rem', marginBottom:'4rem' }}
          autoPlay={true}
            muted
            loop={true}
            controls={false}
            src={EstiVideo} 
            type="video/mp4"
          ></video>
      </div>
      </div>
    );
  }


export default EstimateVideo;
