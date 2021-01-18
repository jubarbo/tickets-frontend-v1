import React, { Component } from "react";
import "./styles/Loader.css";
import { Box, CircularProgress } from "@material-ui/core";

export default class Loader extends Component {
  render() {
    return (
      <Box className="boxLoaderContainer">
        <Box className="boxLoader">
          <CircularProgress />
        </Box>
      </Box>
    );
  }
}
