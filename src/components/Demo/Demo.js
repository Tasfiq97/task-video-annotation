
import { Box, Typography } from '@mui/material';
import React from 'react';
import demo from "../../Video/My Movie.mp4"

const Demo = () => {
    return (
        <Box id="demo" sx={{padding:"20px 20px",mt:10}}>
            <Box sx={{
                sm:{
                    padding:"20px"
                },
                 md:{
                   
                    padding:"100px"
                 },
                 lg:{
                    
                     padding:"100px"
                 },
                 xl:{
 
                     padding:"100px"
                 },
 
            }}>
                <Typography sx={{textAlign:"center", fontWeight:"700",}} variant='h4' >
                     A simple Demo video
                </Typography>
                <Typography sx={{textAlign:"center", marginX:"auto" ,width:{
                    sm:"100%",
                    md:"60%",
                    lg:"60%",
                    xl:"60%"
                }, padding:"20px"}} variant='h6' >
                Tools for management and cooperation that assist you in organizing your important assets, doing quality and performance monitoring, and automating repetitive tasks.
                </Typography>
            </Box>
            <Box sx={{
                md:{
                   
                   padding:"200px"
                },
                lg:{
                   
                    padding:"200px"
                },
                xl:{

                    padding:"200px"
                },

            }}>
            <video  height="500px" width="100%" src={demo} autoPlay muted loop>

</video>
            </Box>

        </Box>
    );
};

export default Demo;