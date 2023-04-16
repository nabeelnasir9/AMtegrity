import React from "react";
import "../Styles/ConstructionEstimationDetails.css";
import Tap from '../images/Tap.jpg';
import Concrete from '../images/concrete.jpg';
import paint from '../images/paint.jpg';
import steel from '../images/steel.jpg';
import Mansonry from '../images/Masonry.jpg';
import sitework from '../images/sitework.jpg';
import ConstructionImage from '../images/ConstructionImage.jpg';



function ConstructionEstimationDetails() {
   
  return (
    <>
    {/* <img src={ConstructionImage} alt="" style={{marginTop:'5rem',height:'65rem', width:'100%'}}/> */}
    <div className="ConstructionEstimationDetails__Wrapper_11">
   <div className="ConstructionEstimationDetails__Wrapper_1">
    <div className="ConstructionEstimationDetails__Wrapper_2">
    CONSTRUCTION TAKEOFF SERVICES
    </div>
    <div className="ConstructionEstimationDetails__Wrapper_3">
    Our construction estimators have expertise in construction takeoffs in all CSI divisions.
    </div>
   </div>
 
    <div className="ConstructionEstimationDetails__Wrapper">
      <div className="ConstructionEstimationDetails__container">
        <div className="card_Constainer">
          <div className="card-front">
          <img src={Tap} className="subtitle"/>
            <p className="title">Concrete Estimating Services</p>
           
          </div>
          <div className="card-back">
            <p>
              We offer thorough and reliable concrete estimating services to
              contractors. Our concrete takeoffs and estimates include
              foundation, footing, slabs, blocks, pavers, driveways, garage,
              basement takeoffs, parking lots takeoffs, etc. Similarly, our
              services for thermal moisture protection include fire stop,
              fireproof, sprinklers, spray insulation, waterproof, dampproof,
              and fire stop takeoffs.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="ConstructionEstimationDetails__container">
        <div className="card_Constainer">
          <div className="card-front">
          <img src={Concrete} className="subtitle"/>
            <p className="title">
              MEP (Mechanical, Electrical, Plumbing) Estimating Services
            </p>
            
          </div>
          <div className="card-back">
            <p>
              We offer MEP estimating services and construction takeoff services
              to the concerned contractors. Our MEP services include mechanical,
              electrical, and plumbing services. With our separate department of
              expert MEP estimators, we cover everything in our MEP estimates.
              These estimates include HVAC, sheet metal, ductwork, process
              piping, pipe insulation, instrumentation & controls, etc.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="ConstructionEstimationDetails__container">
        <div className="card_Constainer">
          <div className="card-front">
          <img src={paint} className="subtitle"/>
            <p className="title">Painting Estimating Services</p>
         
          </div>
          <div className="card-back">
            <p>
              We prepare accurate estimates of material takeoffs, man-hours, and
              labor costs for painting contractors to avoid potential wastages.
              Quantities in our estimates include coatings, finishes, DTM,
              glazed and specialized coatings. All these are presented by
              mentioning the walls, partition details, and description in proper
              line items.
            </p>
          </div>
        </div>
      </div>
      <div className="ConstructionEstimationDetails__container">
        <div className="card_Constainer">
          <div className="card-front">
          <img src={steel} className="subtitle"/>
            <p className="title">Steel Estimating/ Detailing</p>
            
          </div>
          <div className="card-back">
            <p>
              We render our accurate and affordable steel estimating and
              takeoffs to detailing and steel contractors, framers,
              distributors, and fabricators. Our structural & miscellaneous
              steel takeoffs cover quantities of beams, columns, trusses,
              castings, railings, gratings, fasteners, joints, anchors & bolts,
              etc. Further for steel estimating, we deal with all decks,
              trusses, fences, stud framing, gratings etc.
            </p>
          </div>
        </div>
      </div>
      <div className="ConstructionEstimationDetails__container">
        <div className="card_Constainer">
          <div className="card-front">
          <img src={Mansonry} className="subtitle"/>
            <p className="title">Masonry Takeoffs</p>
          
          </div>
          <div className="card-back">
            <p>
              We provide masonry takeoffs services to all the contractors
              involved in residential and commercial projects. In our takeoffs,
              we quantify each and everything in the masonry trade with details
              and descriptions. These include concrete blocks, bricks, stones,
              glazed tiles, facing bricks, architectural precasts, marbles,
              precast lintels, precast sills, steels, and others.
            </p>
          </div>
        </div>
      </div>
      <div className="ConstructionEstimationDetails__container">
        <div className="card_Constainer">
          <div className="card-front">
          <img src={sitework} className="subtitle"/>
            <p className="title">Drywall, Lumber, Sitework Takeoffs</p>
         
          </div>
          <div className="card-back">
            <p>
              We deal with a diverse range of clients, including general
              contractors, drywall installation services providers, drywall
              contractors, homeowners, and designers. We help Framing
              contractors, Millwork contractors, Commercial Contractors, and
              Builders by providing them with precise millwork estimates or
              lumber takeoffs.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
   
  );
}

export default ConstructionEstimationDetails;

