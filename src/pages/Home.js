//import { Grid } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";
import ContactForm from "../Container/ContactForm";
import ConverterBar from "../Container/ConverterBar";
import Examplecontainer from "../Container/Examplecontainer";
import Feebtn from "../Container/Feebtn";
import Footer from "../Container/Footer";
import Header from "../Container/Header";
import Scopes from "../Container/MPartialPart1";
import MPartialPart2 from "../Container/MPartialPart2";
import MPartialPart3 from "../Container/MPartialPart3";
import PlanBoxContainer from "../Container/PlanBoxContainer";
import Scope from "../Container/Scope";
import ScopeWork from "../Container/ScopeWork";
import Sketchbox from "../Container/Sketchbox";
import Slider from "../Container/Slider";
import Sliderbar from "../Container/Sliderbar";
import SignIn from "./SignIn";

function Home() {
  return (
    <Grid container   sx={{backgroundColor:'rgb(248, 248, 248)'}}>
  
  
      {/* <Header/> */}
      <Scopes/>
      <MPartialPart2/>
      <MPartialPart3/>
      <ConverterBar/>
<Sliderbar/>
      <Scope/>
      <ScopeWork/>
      <Feebtn/>
      <PlanBoxContainer/>
      <Grid item xs={12} sx={{backgroundColor:'#f2f6f7',pb:'2rem'}} >
      <Examplecontainer/>
      <Slider/>
      <Sketchbox/>
      </Grid>
      <ContactForm/>
      {/* <Footer/> */}
    </Grid>
  );
}

export default Home;
