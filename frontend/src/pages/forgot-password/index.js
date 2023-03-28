//Author: Kavya_Kasaraneni

import { React, useState } from "react";
import {
    Grid,
    TextField,
    Paper,
    Box,
    Button,
    Container,
    Typography,
    Dialog,
    DialogContentText,
    DialogContent,
    DialogActions
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { validation, errorMessages } from "../../common";


export default function ForgotPassword() {

    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("error");
        const data = new FormData(event.currentTarget);

        setErrors({});

        let errors = {};
        const currentdata = {};

        data.forEach((value, key) => {
            const currentvalue = value.toString().trim();
            currentdata[key] = currentvalue;

            const isValid = validation(key, currentvalue);

            if (!isValid) {
                errors[key] = errorMessages(key, currentvalue);
            }
            setOpen(true);
        });

        const isError = Object.keys(errors).length === 0;

        if (!isError) {
            setErrors(errors);
            return;
        }

    };
     //Front-end 
    return (

        <Container maxWidth='sm' component="main" >

            <Grid container spacing={2} style={{ minHeight: "100vh" }} direction={"column"} justifyContent='center'>


                <Paper elevation={3} sx={{ padding: 7 }} >

                    <Box component="form" onSubmit={handleSubmit} >

                        <Grid container spacing={2} direction={"column"} justifyContent={'center'} >

                            <Typography component="h1" variant="h5" align='center'> Forgot Your Password</Typography>
                            <Typography textAlign={"center"} mt={2}>
                                To reset your password, enter your Email address
                            </Typography>
                            <Grid item>
                                <TextField type={"email"} label="Email Address" id="email" name="email" fullWidth variant="outlined" required error={!!errors.email} helperText={errors.email} />
                            </Grid>

                            <Grid item>
                                <Button type="submit" fullWidth variant="contained" > Send Email </Button>
                                <Dialog open={open} >
                                    <DialogContent>
                                        <DialogContentText>Email Successfully Sent</DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose}>
                                            Ok
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>


                        </Grid>
                    </Box>
                </Paper>
            </Grid>
        </Container>

    );
};


//References
//https://git.cs.dal.ca/kharwar/csci5709-group11-dal-media
