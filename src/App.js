import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { Grid } from "@mui/material";

function App() {
  return (

    <>
    <Grid container>
    <Home/>
    </Grid>
  
    </>
  );
}

export default App;
