// Author: Fenil Milankumar Parmar
// Author: Group 3
// Code reference: https://git.cs.dal.ca/ampatel/csci5709-advweb/-/blob/main/src/FeedPosts/PostFeed.js
// I have referred some part of my code from another subject called csci5709 which I already completed in summer 2022.

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Posts from "./Posts";
import { Box, Grid } from "@mui/material";
import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
function InvSearchBar() {
  const [searchBy, setSearchBy] = React.useState("");
  const [posts, setPosts] = React.useState([]);
  const [tempProfiles, setTempProfiles] = React.useState([]);

  // const baseUrl = https://investnow-backend.herokuapp.com/
  // const baseUrl = process.env.REACT_APP_BASEURL;
  const url = "https://investnow-backend.herokuapp.com/investors/fetchAll";

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const allData = response.data.investor;
        setPosts(allData);
        setTempProfiles(allData);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const onSumbit = () => {
    const newPosts = posts.filter(
      (post) =>
        post.name.toLowerCase().indexOf(searchBy.toLowerCase()) > -1 ||
        post.field.toLowerCase().indexOf(searchBy.toLowerCase()) > -1
    );
    setTempProfiles(newPosts);
  };

  return (
    // // <>
    // {/* <br></br> */}
    <Box sx={{ height: "100%", marginBottom: "10%", marginTop: "1%" }}>
      <Box sx={{ height: "10%", display: "flex", justifyContent: "center" }}>
        <Grid
          container
          spacing={1}
          sx={{ width: "20%", justifyContent: "center" }}
        >
          <Grid item md={9} sx={{ height: "10%", width: "90%" }}>
            {/* <div className="App"> */}
            <TextField
              value={searchBy}
              name="searchBy"
              id={searchBy}
              onChange={(e) => setSearchBy(e?.target?.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  onSumbit();
                }
              }}
              label="Search By Name/Field"
            />
          </Grid>
          <Grid item md={3} sx={{ marginTop: "2.5%", width: "10%" }}>
            <Button variant="outlined" size="large" onClick={onSumbit}>
              Go
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* </div> */}
      {/* <br></br> */}
      <Box sx={{ height: "90%" }}>
        <Posts posts={tempProfiles} />
        {/* </> */}
      </Box>
    </Box>
  );
}

export default InvSearchBar;
