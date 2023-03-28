// Author: Fenil Milankumar Parmar
// Author: Group 3
// Content Reference: https://angel.co/startups/location/nova-scotia
// Code reference: https://git.cs.dal.ca/ampatel/csci5709-advweb/-/blob/main/src/FeedPosts/Posts.js
// I have referred some part of my code from another subject called csci5709 which I already completed in summer 2022.

import react from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate, Navigate } from "react-router-dom";

function Posts(props) {
  let navigate = useNavigate();
  return (
    <div className="posts">
      <Box sx={{ flexGrow: 1, margin: "2% 10% 10% 10%" }}>
        <Grid container spacing={4}>
          {props.posts.map((post, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <Card
                sx={{
                  maxWidth: "auto",
                  maxHeight: "auto",
                }}
              >
                <CardMedia
                  component="img"                  
                  height={"200"}
                  image={post.photo}
                  alt="Investor's Photo"
                  sx={{ border: 1, borderColor: "primary.main" }}                
                  onClick={() => {
                    navigate("/investors", {
                      state: { email : post.email },
                    });
                  }}
                />
                <CardContent >              
                  <Typography gutterBottom variant="h5" component="div">
                    {post.name}
                  </Typography>
                  <Typography variant="body2">
                    <b>Field:</b> {post.field}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Posts;
