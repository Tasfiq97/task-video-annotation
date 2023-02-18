import React, { useState } from 'react';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import  { createTheme, MuiThemeProvider} from "@material-ui/core/styles"
import Services from '../Services/Services';
import Demo from '../Demo/Demo';
import Provide from '../Provide/Provide';
import { Paper } from '@material-ui/core';
import Companies from '../Companies/Companies';
import Footer from '../Footer/Footer';

const Home = () => {
    const [dark,setDark]=useState(false)
    const theme=createTheme({
   palette:{
    type:dark?"dark":"light"
   }
    })
   
    return (
        <div>
            <MuiThemeProvider theme={theme}>
            <Paper>
            <Navbar check={dark} change={()=>setDark(!dark)}></Navbar>
            <Hero></Hero>
            <Services></Services>
            <Companies></Companies>
            <Demo></Demo>
            <Provide></Provide>
            <Footer></Footer>
            </Paper>
            </MuiThemeProvider>
        </div>
    );
};

export default Home;