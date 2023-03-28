// Author : Kavya Kasaraneni
//References
// https://investmentu.com/wp-content/uploads/2020/04/shutterstock_252152341.jpg
// https://github.com/app-generator/sample-react-mui-introduction/tree/main/src/components

import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import image from '../../assets/images/about.jpg';
import { useNavigate } from 'react-router-dom';

export default function About(){

    const navigate = useNavigate();
    const handleSubmit = () => {
      navigate("/requestdemo")
  }

  //Front-end 
  return (
    <Box sx={{ alignItems: 'center', width: '100%', margin: '5px 0px 50px 0px',justifyContent: 'center', minHeight: '400px', display: 'flex'}}>
      <Grid container spacing={6} sx={{ maxWidth: '1300px', display: 'flex',alignItems: 'center', padding: '50px'}}>
        <Grid item xs={12} md={5}>
          <img src={image} style={{width: '100%'}} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700} style={{ paddingBottom: '15px'}}>
            What We Do?
          </Typography>
          <Typography style={{paddingBottom: '30px', fontSize: '18px', opacity: '0.7' }}>

            InvestNow offers different approaches for Investors and Incubators.
            We host the sample projects from the incubators across all fields and guide the investors about project investment into the field that interests them.
            At the same time, we help incubators by guiding them in choosing a capable investors
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
            onClick={handleSubmit}
          >
            REQUEST A DEMO
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

