import React,{useEffect} from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";



import { createTheme, Grid, ThemeProvider } from "@mui/material";
import SignIn from "./pages/SignIn";
import Header from "./Container/Header";
import AboutUs from "./Container/AboutUs";
import Footer from "./Container/Footer";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Services from "./Container/Services";
import Aos from 'aos';
import 'aos/dist/aos.css';
import ContactBanner from "./Container/ContactBanner";
// import {Audio} from 'react-loading-spinner';
// import LoadingSpinner from 'react-loading-spinner';

const theme=createTheme({
  typography:{
  fontFamily:  'Raleway'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lgr:1000,
      lg: 1200,
      
      xl: 1536,
    },
  },
})

function App() {
  
  // console.log(location);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
   
    <>
      {/* <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/> */}
    <ThemeProvider theme={theme}>
    <Grid container >
      <Header/>
      <Router>
    

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Signin' element={<SignIn/>} />
      <Route path='/forgotpassword' element={<Forgotpassword/>} />
      <Route path='/signup' element={<Signup/>} />


      <Route path='/aboutus' element={<AboutUs/>} />
      <Route path='/Services' element={<Services/>} />
    
      </Routes>
      <ContactBanner/>
      <Footer/>
      </Router>
      
      </Grid>
      </ThemeProvider>
   
    
  
    </>
  );
}

export default App;
