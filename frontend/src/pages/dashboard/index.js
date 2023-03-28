//Author: Kavya_Kasaraneni

import React from "react";
import Intro from "../../components/Dashboard/intro";
import Details from "../../components/Dashboard/details";
import About from "../../components/Dashboard/about";
import Success from "../../components/Dashboard/successstories";
import { Button, Box, Paper, Typography } from "@mui/material";

export default function Dashboard() {
   //Front-end 
  return (
    <Box sx={{ height: "100%", width: '80%',marginBottom: "10%", marginTop: "1%", marginLeft:"10%", marginRight:"10%" }}>
      <div>
        <Intro />
        <Details />
        <About />
        <Success />
      </div>
    </Box>
  );
}
