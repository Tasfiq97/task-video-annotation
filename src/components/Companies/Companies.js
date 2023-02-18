import { Box, Card, CardActionArea,CardMedia, Typography,  } from '@mui/material';
import React from 'react';
import {images} from "../data/image"

const Companies = () => {
    return (
        <Box sx={{padding:"40px"}}>
            <Typography sx={{textAlign:"center",fontWeight:"700"}} variant='h6' component={"div"}>
            Regarded by More than 65,000 businesses and researchers use it globally.
            </Typography>
        <Box sx={{display:"flex"}}>
           {
images.splice(0,6). map(data=>(
    <Card sx={{width:"100%",display:"flex",marginTop:"50px",marginLeft:"20px"}} key={data.id}>
     <CardActionArea>
        <CardMedia sx={{width:"100%",background:"#E5E4E2"}} component={"img"} src={data.img} alt={"no pic"}/>
        
     </CardActionArea>
    </Card>
))
            }
            
            
        </Box>
        <Box sx={{display:"flex"}}>
           {
images.splice(6,12). map(data=>(
    <Card sx={{width:"100%",display:"flex",marginTop:"50px",marginLeft:"20px"}} key={data.id}>
     <CardActionArea>
        <CardMedia sx={{background:"#E5E4E2"}} component={"img"} src={data.img} alt={"no pic"}/>
        
     </CardActionArea>
    </Card>
))
            }
            
            
        </Box>
        </Box>
    );
};

export default Companies;