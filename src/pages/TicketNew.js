import React from "react";
import { Typography, Container, Box } from "@material-ui/core";
import TicketForm from "../components/Ticket/TicketForm";

function TicketNew() {
  return (
    <Box>
      <Container>
        <Typography style={titleStyle} variant="h5" component="h1">
          Nuevo ticket
        </Typography>
      </Container>
      <TicketForm isNew />
    </Box>
  );
}

const titleStyle = {
  textAlign: "center",
  marginTop: "1em"
} 

export default TicketNew;
