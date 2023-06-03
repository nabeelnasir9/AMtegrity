//import { Grid } from "@mui/material";
import { Grid } from "@mui/material";
import React , { useState, useEffect }from "react";
import ContactForm from "../Container/ContactForm";
import ConverterBar from "../Container/ConverterBar";
import Examplecontainer from "../Container/Examplecontainer";
import Feebtn from "../Container/Feebtn";
import Footer from "../Container/Footer";
import Header from "../Container/Header";
import Scopes from "../Container/AMntegrityPart1";
import AMntegrityPart2 from "../Container/AMntegrityPart2";
import AMntegrityPart3 from "../Container/AMntegrityPart3";
import PlanBoxContainer from "../Container/PlanBoxContainer";
import Scope from "../Container/Scope";
import ScopeWork from "../Container/ScopeWork";
import Sketchbox from "../Container/Sketchbox";
import Slider from "../Container/Slider";
import Sliderbar from "../Container/Sliderbar";
import SignIn from "./SignIn";
import Loader from '../Container/Jins';
import AnimmatedConfirmer from "../components/AnimmatedConfirmer";
import MyComponent from "../Container/MyComponent";
// import LoadingSpinner from 'react-loading-spinner';

function Home() {
  // const [showLoader, setShowLoader] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowLoader(false);
  //   }, 6000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);
  return (<>
      {/* {showLoader && <Loader />} */}
     
    <Grid container   sx={{backgroundColor:'rgb(248, 248, 248)'}}>
  
  
      {/* <Header/> */}
      
      <Scopes/>
      <AMntegrityPart2/>
      <Sketchbox/>
      <AMntegrityPart3/>
      {/* <ConverterBar/> */}
{/* <Sliderbar/> */}
      <Scope/>
      <ScopeWork/>
      <Feebtn/>
      <PlanBoxContainer/>
      <Grid item xs={12} sx={{backgroundColor:'#f2f6f7',pb:'2rem'}} >
      <Examplecontainer/>

      {/* <Slider/> */}
      
      </Grid>
      <ContactForm/>
      {/* <Footer/> */}
    </Grid>
    </>

  );
}

export default Home;
