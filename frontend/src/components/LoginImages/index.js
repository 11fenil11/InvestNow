//Author: Kavya_Kasaraneni
//References
//https://mui.com/material-ui/react-stepper/#text-with-carousel-effect
//https://inc42.com/cdn-cgi/image/width=797,height=657,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2022/10/startup-investments-feature.png
//https://img.freepik.com/free-vector/capital-fund-financing-small-firm-with-high-growth-potential-venture-capital-venture-investment-venture-financing-business-angel-concept_335657-2154.jpg?w=797
//https://img.freepik.com/premium-vector/venture-capital-flat-modern-design-illustration_566886-823.jpg?w=797

import * as React from 'react';
import { useState } from 'react';
import { Container, Box, Grid } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        imgPath:
            "https://inc42.com/cdn-cgi/image/width=797,height=657,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2022/10/startup-investments-feature.png",
    },
    {
        imgPath:
            "https://img.freepik.com/free-vector/capital-fund-financing-small-firm-with-high-growth-potential-venture-capital-venture-investment-venture-financing-business-angel-concept_335657-2154.jpg?w=797",
    },
    {
        imgPath:
            "https://img.freepik.com/premium-vector/venture-capital-flat-modern-design-illustration_566886-823.jpg?w=797",
    },
   
];



export default function LoginImages() {

    const [active, setActive] = useState();

    const handleChange = (event) => {
        setActive(event);
    };

     //Front-end 
    return (
        <Box height="100vh">

            <AutoPlaySwipeableViews onChange={handleChange} enableMouseEvents>

                {images.map((step) => (

                    <div
                         
                        style={{

                            display: "flex",

                            alignItems: "center",

                            justifyContent: "center",

                        }}

                    >

                        <Box component="img" src={step.imgPath}/>

                    </div>

                ))}

            </AutoPlaySwipeableViews>

        </Box>
    );
};
