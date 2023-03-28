// Author : Kavya_Kasaraneni
//References
// https://github.com/app-generator/sample-react-mui-introduction/tree/main/src/components

import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import image from "../../assets/images/login.jpg";
import { useNavigate } from "react-router-dom";
import Link from '@mui/material/Link';

export default function Intro() {

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/signup")
  }

   //Front-end 
  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', minHeight: '500px' }}>
      <Grid container spacing={6} sx={{ padding: '50px', display: 'flex', maxWidth: '1300px', alignItems: 'center' }}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} style={{ paddingBottom: '15px' }}>
            Who we are
          </Typography>
          <Typography variant="h6" style={{ opacity: '0.4', paddingBottom: '30px', }}>
            We are an one stop platform which connects startup incubators and investors with each other.
            At InvestNow, we offer investors a wide range of field specific projects that interests them
            while offering incubators with several options of investors.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
            onClick={handleSubmit}
          >
            JOIN US TODAY
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={image} style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Box>

  );
};

