// Author: Neelansh Gulati
// used template from material ui
// code reference: https://mui.com/material-ui/getting-started/templates/, https://github.com/mui/material-ui/blob/v5.10.16/docs/data/material/getting-started/templates/sign-in/SignIn.js

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const user = new FormData(e.currentTarget);

    const userData={
      name: user.get('name'),
      email: user.get('email'),
      password: user.get('password'),
      gender: 'male',
      address: ''
    };
    
    const response = await axios
      .post('https://investnow-backend.herokuapp.com/users/signup',userData)
      .catch((err) => {
        console.error(err);
      });

    try {
      if (response.status == 200) {
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Yaya! Profile created..",
          });
        navigate("/login");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Hold onn.....",
        text: "Something is not right. Try again!",
      });
    }

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" sx={{ mb:3 }}>
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSignUp}>
          <TextField
              margin="dense"
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
            <TextField
              margin="dense"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              margin="dense"
            />
            <Button
              sx={{ mt: 2, mb: 1 }}
              type="submit"
              fullWidth
              variant="contained"
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


export default SignUp;