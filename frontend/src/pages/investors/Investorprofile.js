// Authors: Fenil Milankumar Parmar & Jenish Patel
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
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function InverstorProfile(props) {
  const location = useLocation();
  // const [id, setId] = useState();

  const [post, setPosts] = React.useState([]);

  //baseUrl = https://investnow-backend.herokuapp.com/
  // const baseUrl = process.env.REACT_APP_BASEURL;
  // let id = "Param@gmail.com";
  // console.log("here id :",id);

  // console.log("urls: ", url);

  useEffect(() => {
    console.log(location.state.email);
    const url = "https://investnow-backend.herokuapp.com/investors/" + location.state.email;
    const fetchAllData = () => {
      axios
        .get(`${url}`)
        .then((response) => {
          const allData = response.data.investor;
          console.log("DAATTTAA:", allData);
          setPosts(allData);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    fetchAllData();
  }, [location?.state?.email]);

  return (
    <Box sx={{ height: "100%", marginLeft: "20%", marginRight: "20%", marginTop: "5%"}}>
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
            alt="Investor's Photo"
            sx={{ border: 1, borderColor: "primary.main" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.name}
            </Typography>
            <Typography variant="body2">
              <b>Email:</b> {post.email}
            </Typography>
            <Typography variant="body2">
              <b>Contact No:</b> {post.contactNo}
            </Typography>
            <Typography variant="body2">
              <b>Field:</b> {post.field}
            </Typography>
            <Typography variant="body2">
              <b>Total Investment till date:</b> {post.totalInvestment}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <div>
        <table className="table table-primary table-striped table-responsive table-hover">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Investment in CAD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alphabet</td>
              <td>1M</td>
            </tr>
            <tr>
              <td>Meta</td>
              <td>2.5M</td>
            </tr>
            <tr>
              <td>RBC</td>
              <td>10M</td>
            </tr>
            <tr>
              <td>GoDaddy</td>
              <td>15M</td>
            </tr>
            <tr>
              <td>AngelCo</td>
              <td>3M</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Box>
  );
}

export default InverstorProfile;
