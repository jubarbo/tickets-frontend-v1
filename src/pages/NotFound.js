import React from "react";
import { Container, Button, FormControl, Typography } from "@material-ui/core";

function NotFound() {
  return (
    <Container>
      <Typography style={{ marginTop: ".4em" }} variant="h2" component="h1">
        404
      </Typography>
      <Typography
        style={{ width: "80%", margin: "0 0 .4em" }}
        variant="h3"
        component="h1"
      >
        Upps.. no hemos encontrado lo que buscas. 
        Por favor intentalo de nuevo más tarde.
      </Typography>
      <FormControl>
        <Button href="/" variant="contained" color="primary">
          Regresar
        </Button>
      </FormControl>
    </Container>
  );
}

export default NotFound;
