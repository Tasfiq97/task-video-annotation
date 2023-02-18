import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{marginTop:"40px",padding:"30px",background:"black",color:"white"}}>
             <Typography sx={{textAlign:"center"}} variant='h6' component={"div"}>
                All rights reserved || 2023
             </Typography>
        </Box>
    );
};

export default Footer;