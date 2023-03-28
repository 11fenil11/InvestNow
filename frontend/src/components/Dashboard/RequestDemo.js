//Author: Kavya_Kasaraneni

import {React,useState} from "react";
import {
    Box,
    Link,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button,
    Container,
    Typography
} from "@mui/material";

export default function RequestDemo() {
   
     //Front-end 
    return (

        <Container maxWidth='sm' component='main'  >
            <Grid container spacing={2} style={{ minHeight: "100vh" }} direction={"column"} justifyContent='center'>
                <Paper elevation={3} sx={{ padding: 7 }}>

                    <Box component="form" >
                        <Grid container spacing={2} direction={"column"} justifyContent='center' >
                            <Typography component="h1" variant="h5" align={'center'}>
                                Request a Demo
                            </Typography>
                            <Grid item>
                                <TextField label="First Name" name="firstName" id="firstName" fullWidth variant="outlined" required />
                            </Grid>
                            <Grid item>
                                <TextField label="Last Name" name="lastName" id="lastName" fullWidth variant="outlined" required />
                            </Grid>
                            <Grid item>
                                <TextField type={"email"} label="Email Address" name="email" id="email"  fullWidth variant="outlined" required />
                            </Grid>

                            <Grid item>
                                <Button type="submit" fullWidth variant="contained"> Request Demo </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Grid>
        </Container>

    );
}