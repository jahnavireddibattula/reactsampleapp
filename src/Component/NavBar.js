import React from 'react';
// import { makeStyles } from '@mui/material';
// import { AppBar } from '@mui/material';
// import { Typography } from '@mui/material';
// import {Toolbar} from '@mui/material';
// import {IconButton} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
// import './NavBar.css';


//   const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//   }));
    
  // Exporting Default Navbar to the App.js File
  export default function Navbar() {
    // const classes = useStyles();
  return (
    <React.Fragment>
    <div className="linkcolor1">
                
      <ul>
                       
        <Link to="/">
          <li>Cards</li>
        </Link>
        &emsp;&emsp;&emsp;
        <Link to="/Home">
          <li>Home</li>
        </Link>
                   
        <Link to="Signinform1">
          <li>SignUp</li>
        </Link>
                      
        <Link to="LoginComponent">
          <li>LogIn</li>
        </Link>

        {/* <Link to="laptoinfo">
          <li>laplopinfo</li>
        </Link> */}
                                   
      </ul>           
    </div>
    {/* <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" 
            className={classes.menuButton} 
            color="inherit" aria-label="menu">
              <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Geeks for Geeks
          </Typography>
        </Toolbar>
      </AppBar>
    </div> */}

      </React.Fragment>
  );
}


