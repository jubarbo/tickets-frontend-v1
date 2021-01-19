import React from "react";
import Navbar from "./Navbar";
import { Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(1),
  },
}));

const tooltipStyles = () => {
  return {
    position: "fixed",
    zIndex: "999",
  };
};

function Layout(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Tooltip title="Add ticket" style={tooltipStyles()}>
        <Fab href="/new" color="primary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </React.Fragment>
  );
}

export default Layout;
