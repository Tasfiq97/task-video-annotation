
import {  Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import {Link} from "react-router-dom"
import "./Hero.css"
const Hero = () => {
     const [text]= useTypewriter({
        words:[
            "Video annotation Tool",
            "Easier to Annotate"
        ],
        loop:true,
        delaySpeed:2000
     })
    return (
        <Box id="hero" sx={{ display:{
            sm:'flex',
             md:"flex",
             lg:"flex",
             xl:"flex"

        },justifyContent:"center",alignItems:"center",padding:"0px 50px"}} >
            <div className='hero-left'>
                <div className='bg1'>

                </div>
                <div className='bg2'>

                </div>
                <Typography  variant='h4' color='red'>
                     <span style={{color:"red",fontWeight:"700",marginBottom:"20px"}}>{text}</span>
                     <Cursor cursorColor='red'> </Cursor>
                </Typography>
              
                <Typography sx={{padding:{md:"10px 20px", lg:"10px 20px",sm:"0px 0px",}}} variant="body2">Develop AI faster and better with on-premise, enterprise-grade end-to-end solution for every task: from labeling to building production models.</Typography>
                <div className='btn-div'>
                    <Link to="/form">  <button className='btn'>Try Here</button></Link>
               
                </div>
            </div>
            <div className='hero-right' >
              <img className='img'  src="https://a.storyblok.com/f/139616/2519x1570/65eb827818/video-annotation.png" alt="" />
            </div>
        </Box>
    );
};

export default Hero;