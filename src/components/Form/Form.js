import {  Paper } from '@material-ui/core';
import { Box, Button, Grid,  TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [user,setUser]=useState({});
    const navigate=useNavigate()
     const handleChange=(e)=>{
          const field=e.target.name
          const value=e.target.value
          const newUser={...user}
          newUser[field]=value;
          setUser(newUser);
     }
     const handleSubmit=(e)=>{
    e.preventDefault();
        if(user.password.length<6){
               toast.error("password have to greater than 6 character")
               return;
        }
        else{
            toast.success("successfully registered")
            navigate("/annotation")
        }
     }
    return (
    
        <Box  sx={{height:"100vh"}}>
            <Paper sx={{height:"100vh"}}>
            
                <Grid align="center">
                    <Paper elevation={20} style={{width:"300px",padding:"30px 20px",margin:"20px auto"}}>
                        <Grid>

                       <h1>User Information</h1>
                       <Typography gutterBottom variant='h6'>
                        Please fill the form to try
                       </Typography>
                        </Grid>
                        <form onSubmit={handleSubmit}>
                            <TextField required onChange={handleChange} sx={{mb:2}}  fullWidth label="Name" name="name" placeholder='enter your name'/>
                            <TextField onChange={handleChange} required sx={{mb:2}}  fullWidth label="Email" name="email" placeholder='enter your emil'/>
                            <TextField type="password" name="password" onChange={handleChange} required sx={{mb:2}}  fullWidth label="Password"placeholder='enter a password '/>
                            <TextField required onChange={handleChange} sx={{mb:2}}  fullWidth label="Username" name="userName" placeholder='enter your name'/>
                            <Button type='submit' variant='contained'color="secondary" >Submit</Button>
                        </form>
                    </Paper>
                </Grid>
               
              </Paper>
            
        </Box>
     
    );
};

export default Form;