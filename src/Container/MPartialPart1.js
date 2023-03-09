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

const Scopes = () => {
  return (
    <div>
    <div className="GridScope">
      <div className="GridContainer">
        <div className="Scope_Main">
          <div className="ScopePart1">
            <div className="ScopeTexts">
              <div className="ScopeText1">Make the most of</div>
              <div className="ScopeText2">Geospatial Platforms</div>
              <div className="ScopeText3">scans, and generate</div>
              <div className="ScopeText4">the perfect estimates.</div>
            </div>
          </div>
          <div className="ScopeCard">
          
            <Card sx={{ width: 450, marginBottom: 3, marginLeft: 5, borderRadius: 4 }}>
                <div className="CardMainSection">
            <div className="CardIcon">
                <FiCopy/>
                </div>
              <CardContent className="CardContents">
                
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                  className="headerContent"
                >
                AMintBed
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary" className="headerContent2">
                Allows Matterport users to make the most of a scan from utilizing mpartialTags to review various variables to using time-stamped tags to constrain fraud, and abuse.
                </Typography>
              </CardContent>
              </div>
            </Card>
            <Card sx={{ width: 450, marginBottom: 3 , borderRadius: 4 }}>
            <div className="CardMainSection">
            <div className="CardIcon">
                <TbArrowsRightLeft/>
                </div>
              <CardContent className="CardContentss">
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                  className="headerContent"
                >
                  AMintConvert
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary" className="headerContent2">
                Convert estimates bi-directionally between Xactimate and Symbility Claims Connect.
                </Typography>
              </CardContent>
              </div>
            </Card>
            <Card sx={{ width: 450, marginBottom: 3, marginLeft: 5 , borderRadius: 4 }}>
            <div className="CardMainSection">
            <div className="CardIcon">
                <RiListCheck2/>
                </div>
              <CardContent className="CardContentsss">
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                  className="headerContent"
                >
                  AMintScope
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary" className="headerContent2">
                Generate a carrier-approval worthy estimate by extracting relevant data from pre-mitigation and post-mitigation scans through Xactimate (TruePlan Included) or Symbility (mpartialSketch included).
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
