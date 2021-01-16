import React, { Component } from "react";
import { Container, FormControl, Button } from "@material-ui/core";

const comeBackButton = {
  backgroundColor: "#d62e9a",
  color: "#fff",
};

export default class HomeButton extends Component {
  render() {
    return (
      <Container>
        <FormControl>
          <Button style={comeBackButton} href="/" variant="outlined">
            Regresar
          </Button>
        </FormControl>
      </Container>
    );
  }
}
