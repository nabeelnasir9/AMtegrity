import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { createTheme, Grid, ThemeProvider } from "@mui/material";
import SignIn from "./pages/SignIn";
import Header from "./Container/Header";
import AboutUs from "./Container/AboutUs";
import Footer from "./Container/Footer";
import Forgotpassword from "./pages/Forgotpassword";
const theme=createTheme({
  typography:{
  fontFamily:  'Raleway'
  }
})
function App() {
  return (


    <>
    <ThemeProvider theme={theme}>
    <Grid container>
      <Header/>
      <Router>
    

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Signin' element={<SignIn/>} />
      <Route path='/forgotpassword' element={<Forgotpassword/>} />

      <Route path='/aboutus' element={<AboutUs/>} />
    
      </Routes>
      </Router>
      <Footer/>
      </Grid>
      </ThemeProvider>
    {/* <ThemeProvider theme={theme}>
    <Grid container>
    <Home/>
    </Grid> */}
 
    {/* </ThemeProvider> */}
    
    </>
  );
}

export default App;
