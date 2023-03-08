import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { createTheme, Grid, ThemeProvider } from "@mui/material";
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
    <Home/>
    </Grid>
    </ThemeProvider>
    </>
  );
}

export default App;
