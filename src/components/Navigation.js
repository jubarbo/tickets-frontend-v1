import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { IconButton, Box } from "@material-ui/core";
import {
  useLocation,
} from "react-router-dom";

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

  const hideIfHome = (ifHome) => {
    return ifHome ? { display: "block" } : { display: "none" };
  };
  return (
    <Box>
      <IconButton
        edge="start"
        href="/"
        style={hideIfHome(useLocation().pathname !== "/")}
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <ArrowBack />
      </IconButton>
    </Box>
  );
}
