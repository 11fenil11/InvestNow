// Author : Kavya_Kasaraneni
// References
//https://github.com/app-generator/sample-react-mui-introduction/blob/main/src/components
//https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg
//https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg
//https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg

import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { Avatar } from '@mui/material';

export default function Success() {
  
  const responses = [
    {
      id: 1,
      name: 'Shelly Norwa',
      review:
        'As an investor I had worked with several companies. InnvestInn has a good foothold and is very knowledgeable about the impact investment field. We were able to successfully invest in the projects developed regarding Food scarcity.',
      imgPath:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg',
        designation: 'Senior Executive at Rally Assets'
    },
    {
      id: 2,
      name: 'Smitty Jones',
      review:
        'As newbies we had absolutely no idea with which investor I should move on for the project we devoloped.InvestInn helped us in gaining a benificial Investor by understanding all the financial and legal details.',
        imgPath:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg',
        designation: 'DMZ Incubator',
    },
    {
      id: 3,
      name: 'Ryan Duffy',
      review:
        'Several platforms might provide us with the projects in the specialized fields but InvestInn has gone beyond and has integrated the technology with the projects, which made our tasks much easier and worry free.',
        imgPath:
        'https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg',
        designation: 'Co-Founder at MaRS',
    },
  ];

   //Front-end 
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px',
      }}
    >
      <Grid container spacing={2}>
        {responses.map((element) => (
          <Grid item sm={12} md={4} key={element.id}>
            <Card style={{alignItems: 'center', backgroundColor: '#fff', minHeight: '200px',display: 'flex',padding: '10px'  }}>
              <CardContent>
                <Typography style={{ paddingBottom: '25px'}}>
                  "{element.review}"
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <Avatar
                    src={element.imgPath}
                    size="large"
                    style={{ marginRight: '10px'}}
                  />
                  <Box>
                    <Typography>{element.name}</Typography>
                    <Typography style={{fontSize: '14px', opacity: '0.6',}}>
                      {element.designation}
                    </Typography>
                  </Box>
                </Box> 
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
