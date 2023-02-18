import { Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import img1 from "../../Images/boundingbox.webp"
import img2 from "../../Images/computer-vision-image-annotation-tool-cvat-for-business-viso-suite.png"
import img3 from "../../Images/featured_ai_data_solutions.webp"
import img4 from "../../Images/via_demo_screenshot2_via-2.0.2.jpg"

const Services = () => {
    return (
        <>
        <Box id="service" sx={{
            marginTop:"50px",
            padding:"30px",
            display:{
                sm:"block",
                md:"flex",
                lg:"flex",
                xl:"flex",
            },
            "& h4":{
                fontWeight:"700"
            },
            "& p":{
                fontSize:"15px"
            }
        }}>
            <div>
             <Typography variant='h4' >
             Trainable & customizable
             </Typography>
             <p>Neural network in the core of the smart tool can be re-trained to better fit your very unique case and produce unprecedented results with just a little bit of extra data.</p>
            
            </div>
            <div>
            <Typography variant='h4' >
            Designed for any thing
             </Typography>
             <p>
             Smart tool is class-agnostic — it was not trained to capture specific objects, but rather any forms that stand out.
             </p>
            </div>
        </Box>
        <Box sx={{display:{
            sm:"flex",
            md:"flex",
            lg:"flex",
            xl:"flex"
            
        } ,padding:"20px",
          margin:"10px auto"
        
        }} >
        <img style={{width:"45%",marginLeft:"20px",borderRadius:"10px"}}   src={img1} alt="" />
        <img style={{width:"45%",marginLeft:"20px",borderRadius:"10px"}}  src={img2} alt="" />
        </Box>
        <Box sx={{display:{
            sm:"flex",
            md:"flex",
            lg:"flex",
            xl:"flex"
            
        } ,padding:"20px"}}>
        <img style={{width:"50%",marginLeft:"20px",borderRadius:"10px"}}  src={img3} alt="" />
        <img style={{width:"40%",marginLeft:"20px",borderRadius:"10px"}}  src={img4} alt="" />
        </Box>
        </>
    );
};

export default Services;