import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ChatIcon from "@mui/icons-material/Chat";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import NotificationDialog from "../notification/notificationDialog";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import * as React from "react";

function Home() {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = React.useState(false);

  useEffect(() => {if (localStorage.getItem("isAuth") === "true") {
    setIsVerified(true);
  }});

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePayment = () => {
    navigate("/payments");
  };

  const handleChat = () => {
    navigate("/chat");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      {isVerified && ( <NotificationDialog open={open} handleClose={handleClose}/>)}
      <AppBar color="primary" position="sticky" elevation={5}>
        <Toolbar>
          <Grid
            container
            spacing={0.5}
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            <Grid item xs>
              <Typography
                onClick={handleHome}
                color="inherit"
                variant="h5"
                component="h1"
                sx={{
                  display: { xs: "none", sm: "block" },
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "white",
                  boxShadow: 10,
                  borderRadius: 2,
                  borderColor: "black",
                  border: 2,
                  p: 2,
                }}
              >
                InvestNow
              </Typography>
            </Grid>
            <Box
              sx={{
                flexGrow: 1,
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body"
                component="div"
                sx={{
                  display: { xs: "none", sm: "block", alignContent: "center" },
                  cursor: "pointer",
                  color: "white",
                  fontSize: "18px",
                  p: 1.5,
                }}
                onClick={() => {
                  navigate("/invSearchBar");
                }}
              >
                Investors
              </Typography>
              <Typography
                variant="body"
                component="div"
                sx={{
                  display: { xs: "none", sm: "block", alignContent: "center" },
                  cursor: "pointer",
                  color: "white",
                  fontSize: "18px",
                  p: 1.5,
                }}
                onClick={() => {
                  navigate("/startupSearchBar");
                }}
              >
                Startups
              </Typography>            
              <Typography
                variant="body"
                component="div"
                sx={{
                  display: { xs: "none", sm: "block", alignContent: "center" },
                  cursor: "pointer",
                  color: "white",
                  fontSize: "18px",
                  p: 1.5,
                }}
                onClick={() => {
                  navigate("/hub");
                }}
              >
                Knowledge Hub
              </Typography>
              {isVerified && (
              <Typography
                variant="body"
                component="div"
                sx={{
                  display: { xs: "none", sm: "block", alignContent: "center" },
                  cursor: "pointer",
                  color: "white",
                  fontSize: "18px",
                  p: 1.5,
                }}
                onClick={() => {
                  navigate("/profile");
                }}
              >
                User Management
              </Typography>)}
            </Box>        
            <Grid item xs />
            {isVerified && (
            <Grid item>
              <Tooltip title="View Notifications">
                <IconButton color="inherit" onClick={handleClickOpen}>
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>)}
            {isVerified && (
            <Grid item>
              <Tooltip title="Payment">
                <IconButton color="inherit" onClick={handlePayment}>
                  <LocalAtmIcon />
                </IconButton>
              </Tooltip>
            </Grid>)}
            {isVerified && (
            <Grid item>
              <Tooltip title="Chat">
                <IconButton color="inherit" onClick={handleChat}>
                  <ChatIcon />
                </IconButton>
              </Tooltip>
            </Grid>)}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Home;
