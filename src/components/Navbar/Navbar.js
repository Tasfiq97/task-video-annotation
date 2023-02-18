import React, { useState } from 'react';
 import {Box,AppBar, Typography, Toolbar, IconButton, Drawer, Divider, Switch} from "@mui/material"
 import TheatersIcon from '@mui/icons-material/Theaters';
 import MenuIcon from '@mui/icons-material/Menu';
import {  NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { display } from '@mui/system';
const Navbar = ({check,change}) => {
    const [mobileOpen,setMobileOpen]=useState(false);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
     const handleDrawerToggle=()=>{
        setMobileOpen(!mobileOpen);
     }
    const drawer=(
        <Box onClick={handleDrawerToggle} sx={{textAlign:"center",mt:5}}>
 <Link to="/">
 <Typography sx={{color:"black",textAlign:"center"}} variant="h6" component="div">
                <TheatersIcon ></TheatersIcon>
                 Video Mate
             </Typography>
 </Link>
             <Divider></Divider>
                <ul style={{listStyle:"none",}}>
                <HashLink style={{textDecoration:"none",color:"black"}} to="/home#hero">
                    <li style={{margin:" 20px 0px"}}>
                        Home
                    </li>
                    </HashLink>
                    <HashLink  style={{textDecoration:"none",color:"black"}}  to="/home#service">
                    <li style={{margin:" 20px 0px"}}>
                        Service
                    </li>
                    </HashLink>
                    <HashLink style={{textDecoration:"none",color:"black"}} to="/home#demo">
                    <li style={{margin:" 20px 0px"}}>
                        Demo Video
                    </li>
                    </HashLink>
                </ul>
        </Box>
    )
    return (
        <>
        <Box>
            <AppBar component={`nav`} sx={{bgcolor:"white"}}>
                <Toolbar>
                    <IconButton color='inherit'aria-lebel="open drawer" edge="start"sx={{mr:2, display:{sm:"none"}}}>
                     <MenuIcon sx={{color:"black"}} onClick={handleDrawerToggle}/>
                    </IconButton>
                   
             <Typography sx={{color:"black",display:"flex",flexGrow:1,alignItems:"center",}} variant="h6" component="div">
                <TheatersIcon ></TheatersIcon>
                Video Mate
                
             </Typography>
             
             <Switch {...label} 
             defaultChecked 
             color="default" 
             onChange={change}
             checked={check}
              />
             <Box sx={{display:{xs:"none", sm:"block"},color:"black"}}>
                <ul style={{listStyle:"none",display:"flex", alignItems:"center",justifyContent:"center"}}>
                    <HashLink style={{textDecoration:"none",color:"black"}} to="/home#hero">
                    <li style={{margin:" 0px 20px"}}>
                       Home
                    </li></HashLink>
                   <HashLink  style={{textDecoration:"none",color:"black"}}  to="/home#service">
                   <li style={{margin:" 0px 20px"}}>
                        Services
                    </li>
                   </HashLink>
                   <HashLink style={{textDecoration:"none",color:"black"}} to="/home#demo">
                    <li style={{margin:" 0px 20px"}}>
                       Video Demo
                    </li></HashLink>
                </ul>
             </Box>
             </Toolbar>
            </AppBar>
            <Box component="nav">
              <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{
                boxSizing:"border-box",
                width:"240px"
              }}}>
                 {drawer}
              </Drawer>
            </Box>
            <Box sx={{p:2}}>
            <Toolbar></Toolbar>
            </Box>
        </Box>
        </>
    );
};

export default Navbar;