// Author: Fenil Milankumar Parmar
// Author: Group 3
// Code reference: https://git.cs.dal.ca/ampatel/csci5709-advweb/-/blob/main/src/FeedPosts/
// I have referred some part of my code from another subject called csci5709 which I already completed in summer 2022.

import { useLocation } from "react-router-dom";
import moment from "moment";
import * as uuid from "uuid";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

function StartupProfile(props) {
  const location = useLocation();

  const [post, setPosts] = React.useState([]);

  useEffect(() => {
    console.log(location.state.id);
    const url = "https://investnow-backend.herokuapp.com/startups/" + location.state.id;
    const fetchAllData = () => {
      axios
        .get(`${url}`)
        .then((response) => {
          const allData = response.data.startup;
          console.log("Startup DAATTTAA:", allData);
          setPosts(allData);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    fetchAllData();
  }, [location?.state?.id]);

  return (
    <Box
      sx={{
        height: "100%",
        marginLeft: "20%",
        marginRight: "20%",
        marginTop: "5%",
      }}
    >
      <Grid item xs={12} sm={6} md={4} lg={3} key={1}>
        <Card
          sx={{
            maxWidth: "auto",
            maxHeight: "auto",
          }}
        >
          <CardMedia
            component="img"
            //   height={300}
            height={"500"}
            image={post.photo}
            alt="Startup's Photo"
            sx={{ border: 1, borderColor: "primary.main" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.name}
            </Typography>
            <Typography variant="body2">
              <b>Description:</b> {post.description}
            </Typography>
            <Typography variant="body2">
              <b>Locations:</b> {post.locations}
            </Typography>
            <Typography variant="body2">
              <b>Website:</b> {post.website}
            </Typography>
            <Typography variant="body2">
              <b>Industries:</b> {post.industries}
            </Typography>
            <Typography variant="body2">
              <b>Amount Raised till Date:</b> {post.amoundRaised}
            </Typography>
            <Typography variant="body2">
              <b>Total funded round:</b> {post.fundedOver}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <div>
        <table className="table table-primary table-striped table-responsive table-hover">
          <thead>
            <tr>
              <th>Products</th>
              <th>Team Strength</th>
              <th>Team Leader</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Titlepedia</td>
              <td>8 members</td>
              <td>Fenil Parmar</td>
            </tr>
            <tr>
              <td>DocuFY</td>
              <td>10 members</td>
              <td>Neelansh Gulati</td>
            </tr>
            <tr>
              <td>Pixplore</td>
              <td>15 members</td>
              <td>Parampal</td>
            </tr>
            <tr>
              <td>Digify</td>
              <td>5 members</td>
              <td>Jenish Patel</td>
            </tr>
            <tr>
              <td>GigaFY</td>
              <td>9 members</td>
              <td>Kavya</td>
            </tr>
            <tr>
              <td>PicoFiy</td>
              <td>10 members</td>
              <td>Aitzaz</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Box>
  );
}

export default StartupProfile;
