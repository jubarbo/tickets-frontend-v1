import React from "react";
import { Container, Button, FormControl, Typography } from "@material-ui/core";

function NotFound() {
  return (
    <Container>
      <Typography variant="h2" component="h1">404</Typography>
      <FormControl>
        <Button href="/" variant="contained" color="primary">
          Regresar
        </Button>
      </FormControl>
    </Container>
  );
}

export default NotFound;
