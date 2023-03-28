// Author: Neelansh Gulati
// used template from material ui
// code reference: https://mui.com/material-ui/getting-started/templates/, https://github.com/mui/material-ui/blob/v5.10.16/docs/data/material/getting-started/templates/sign-in/SignIn.js

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

function Login({setIsAuthenticated}) {
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const user = new FormData(e.currentTarget);

    const userData={
      email: user.get('email'),
      password: user.get('password'),
    };
    
    const response = await axios
      .post('https://investnow-backend.herokuapp.com/users/login',userData)
      .catch((err) => {
        console.error(err);
      });

    try {
      if (response.status == 200) {
        localStorage.setItem("user", user.get('email'));
        const userDetails = await axios.get("https://investnow-backend.herokuapp.com/users/fetchUserByEmail/?email=" +  localStorage.getItem("user"));       
        localStorage.setItem("name", userDetails.data[0].name);
        localStorage.setItem("key", userDetails.data[0].password);
        localStorage.setItem("addr", userDetails.data[0].address);
        localStorage.setItem("gender", userDetails.data[0].gender);
        setIsAuthenticated(true);
        localStorage.setItem('isAuth', "true");
        Swal.fire({
            icon: "success",
            title: "Welcome back.....",
            text: "Hey! " + userData.email,
          });

        navigate("/");
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSignIn}>
            <TextField
              margin="dense"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
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
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link variant="body2" sx={{ ml: 12, mr: 1, mt:5 }} onClick={() => {
                  navigate("/signup");
                }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


export default Login;