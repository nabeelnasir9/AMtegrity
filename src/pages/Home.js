//import { Grid } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";
import ContactForm from "../Container/ContactForm";
import Examplecontainer from "../Container/Examplecontainer";
import Feebtn from "../Container/Feebtn";
import Footer from "../Container/Footer";
import Header from "../Container/Header";
import PlanBoxContainer from "../Container/PlanBoxContainer";
import Scope from "../Container/Scope";
import ScopeWork from "../Container/ScopeWork";
import Sketchbox from "../Container/Sketchbox";
import Slider from "../Container/Slider";

function Home() {
  return (
    <Grid container>
      <Header/>
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
      <Footer/>
    </Grid>
  );
}

export default Home;
