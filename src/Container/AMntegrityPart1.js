// import { Grid } from "@mui/material";
import React from "react";
import "../Styles/Scope.css";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import {FiCopy} from 'react-icons/fi';
import {TbArrowsRightLeft} from 'react-icons/tb';
import {RiListCheck2} from 'react-icons/ri';
// Get precise Scans and estimates in no time with Xactimate - the ultimate solution for accurate construction estimates!
const Scopes = () => {
  return (
    <div>
    <div className="GridScope">
      <div className="GridContainer">
        <div className="Scope_Main">
          <div className="ScopePart1">
            <div className="ScopeTexts">
              <div className="ScopeText1">Get precise Scans,estimates &</div>
              <div className="ScopeText2">MaterialTakeoff in no time with</div>
              <div className="ScopeText3"> AMntegrity - the ultimate solution</div>
              <div className="ScopeText4">for accurate construction estimates!</div>
            </div>
          </div>
          <div className="ScopeCard">
          
            <Card sx={{ width: 450, marginBottom: 3, marginLeft: 5, borderRadius: 4 }}>
                <div className="CardMainSection">
            <div className="CardIcon">
                {/* <FiCopy/> */}
                <TbArrowsRightLeft/>
                </div>
              <CardContent className="CardContents">
                
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                  className="headerContent"
                >
                AMSketch
                </Typography>
                <Typography sx={{ mb: 1 }} color="text.secondary" className="headerContent2">
                {/* 3D scanning platform that lets you create immersive virtual experiences with ease. Our technology captures every detail of your space, from floor plans to stunning 4K visuals, giving your audience an unparalleled sense of presence.  */}
                The ultimate solution for converting your Matterport scans into Xactimate Sketches. With our advanced technology, you can quickly and easily transform your 3D scans into detailed Xactimate sketches files.
                </Typography>
              </CardContent>
              </div>
            </Card>
            <Card sx={{ width: 450, marginBottom: 3 , borderRadius: 4 }}>
            <div className="CardMainSection">
            <div className="CardIcon">
                {/* <TbArrowsRightLeft/> */}
                <RiListCheck2/>
                </div>
              <CardContent className="CardContentss">
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                  className="headerContent"
                >
                  AMXactimate

                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary" className="headerContent2">
                {/* The ultimate solution for converting your Matterport scans into Xactimate Sketches. With our advanced technology, you can quickly and easily transform your 3D scans into detailed Xactimate sketches files. */}
                The premier platform for accurate, efficient construction estimating. With our advanced technology and expert team, you can trust that your estimates will be fast, reliable, and precise every time.

                </Typography>
              </CardContent>
              </div>
            </Card>
            <Card sx={{ width: 450, marginBottom: 3, marginLeft: 5 , borderRadius: 4 }}>
            <div className="CardMainSection">
            <div className="CardIcon">
                {/* <RiListCheck2/> */}
                <FiCopy/>
                </div>
              <CardContent className="CardContentsss">
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                  className="headerContent"
                >
                  AMEstimate
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary" className="headerContent2">
                The premier platform for accurate, efficient construction estimating. With our advanced technology and expert team, you can trust that your estimates will be fast, reliable, and precise every time.
                </Typography>
              </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Scopes;
