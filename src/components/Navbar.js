import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBack from "@material-ui/icons/ArrowBack";
import "./styles/Navbar.css";
import Navigation from "../components/Navigation";

import { AppBar, IconButton, Typography, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

//Pendiente para ocultar en home
const hideIfHome = (ifHome) => {
  return true ? { display: "block" } : { display: "none" };
};

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Navigation />
        {/* <IconButton
          edge="start"
          href="/"
          style={hideIfHome()}
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <ArrowBack />
        </IconButton> */}
        <Typography variant="h6" className={classes.title}>
          Tickets App
        </Typography>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
}
