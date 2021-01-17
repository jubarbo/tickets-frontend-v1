import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
// import { Link } from "react-router-dom";
// import logo from '../images/logo.png';
import "./styles/Navbar.css";
import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Navbar() {

    const classes = useStyles();

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tickets App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      // <div className="Navbar">
      //     <div className="container-fluid">
      //         <Link to="/">
      //             <span className="font-weight-light">Encabezado </span>
      //             <span className="font-weight-bold">de algo</span>
      //         </Link>
      //     </div>
      // </div>
    );
  }


