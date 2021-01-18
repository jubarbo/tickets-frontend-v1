import React, { Component } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";

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


export default function Navigation() {
    
        const classes = useStyles();
        return (
            <IconButton
          edge="start"
        //   href="/"
        //   style={hideIfHome()}
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <ArrowBack />
        </IconButton>
        )
    }

