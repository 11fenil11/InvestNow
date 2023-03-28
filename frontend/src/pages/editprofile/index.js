//Author : Kavya_Kasaraneni && Neelansh Gulati

import {
  Avatar,
  Button,
  Container,
  Typography,
  Grid,
  Stack,
  Paper,
  Card,
  TextField,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import Box from '@mui/material/Box';

const theme = createTheme();

export default function EditProfile() {

  const navigate = useNavigate();

  const handleProfile = async (e) => {
    e.preventDefault();
    const user = new FormData(e.currentTarget);
    console.log(user.get('name'));
    const userData = {
      name: user.get('name'),
      password: user.get('password'),
      address: user.get('address'),
      gender: user.get('gender'),
    };

    const response = await axios
      .put('https://investnow-backend.herokuapp.com/users/updateUserProfile/?email=' + localStorage.getItem("user"), userData)
      .catch((err) => {
        console.error(err);
      });

    try {
      if (response.status == 200) {
        const userDetails = await axios.get("https://investnow-backend.herokuapp.com/users/fetchUserByEmail/?email=" + localStorage.getItem("user"));
        localStorage.setItem("name", userDetails.data[0].name);
        localStorage.setItem("key", userDetails.data[0].password);
        localStorage.setItem("addr", userDetails.data[0].address);
        localStorage.setItem("gender", userDetails.data[0].gender);

        Swal.fire({
          icon: "success",
          title: "Profile Update Done !!",
          text: "Hey! " + userData.name,
        });

        navigate("/profile");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Hold onn.....",
        text: "Something is not right. Try again!",
      });
    }

  };

   //Front-end 
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
            <Typography variant="h4" sx={{ mb: 3 }}>
              Update Profile
            </Typography>
            <Box component="form" onSubmit={handleProfile}>
              <TextField
                label="Name"
                fullWidth
                defaultValue={localStorage.getItem("name")}
                variant="outlined"
                id="name"
                name="name"
                required
              />
              <TextField
                margin="dense"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                defaultValue={localStorage.getItem("user")}
                autoFocus
                disabled
              />
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                defaultValue={localStorage.getItem("key")}
                margin="dense"
                required
              />
              <TextField
                label="Address"
                fullWidth
                defaultValue={localStorage.getItem("addr")}
                variant="outlined"
                id="address"
                name="address"
                margin="dense"
                required
              />
              <TextField
                label="Gender"
                fullWidth
                defaultValue={localStorage.getItem("gender")}
                variant="outlined"
                id="gender"
                name="gender"
                margin="dense"
                required
              />
              <Button
                sx={{ mt: 2, mb: 1 }}
                type="submit"
                fullWidth
                variant="contained"
              >
                Save
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
  );
}
