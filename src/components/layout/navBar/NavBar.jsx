import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {  Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <AppBar sx={{background:"green"}} position="static">
        <Container >
          <Toolbar sx={{ display: "flex", height:"20vh",  }}>
            <Link to={"/"} >
            <Box>
              
              <img 
                src="public\Logo Beltran.png" 
                alt="Club Logo"
                style={{ height: "16vh" }} 
              />
            </Box>
            </Link>
            <Typography variant="h5" sx={{width:"10%",}}>
              Club Cooperativa Beltrán
            </Typography>
          </Toolbar>
        </Container>
        <Box sx={{backgroundColor:"red", height:"3vh"}}></Box>
      </AppBar>
      
    </>
  );
};

export default NavBar;
