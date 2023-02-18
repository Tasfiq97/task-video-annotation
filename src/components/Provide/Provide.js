import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import {data} from "../data/data"
const Provide = () => {
    return (
        <>
        <Box sx={{marginTop:{
            md:"150px",
            lg:"150px",
            xl:"150px"
        }}}>
            <Typography sx={{textAlign:"center",fontWeight:"700"}} variant='h4' component={"div"}>
            Ultimate ecosystem for Developing Effecient works
            </Typography>
            <Typography sx={{textAlign:"center", marginX:"auto" ,width:{
                    sm:"100%",
                    md:"60%",
                    lg:"60%",
                    xl:"60%"
                }, padding:"20px"}} variant='h6' >
               See how your model performs with existing data as well as fresh information, and figure out how to improve performance and fix incorrect output.
                </Typography>
        </Box>
        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            {
data.map(data=>(
    <Card sx={{maxWidth:"300px",display:"flex",marginTop:"50px",marginLeft:"40px"}} key={data.id}>
     <CardActionArea>
        <CardMedia sx={{minHeight:"400px",background:"#E5E4E2"}} component={"img"} src={data.img} alt={data.title}/>
        <CardContent sx={{background:"#E5E4E2"}}>
            <Typography variant='h5' gutterBottom component={"div"}>
                {data.title}
            </Typography>
            <Typography variant='body2' gutterBottom component={"div"}>
                {data.description}
            </Typography>
        </CardContent>
     </CardActionArea>
    </Card>
))
            }
        </Box>
        </>
    );
};

export default Provide;