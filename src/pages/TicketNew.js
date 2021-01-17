import React from "react";
import { Typography, Container, Box } from "@material-ui/core";
import TicketForm from "../components/Ticket/TicketForm";
import HomeButton from "../components/HomeButton";

function TicketNew() {
  return (
    <Box>
      <Container>
        <Typography variant="h5" component="h1">
          New ticket
        </Typography>
      </Container>
      <TicketForm isNew />
      <HomeButton />
    </Box>
  );
}

export default TicketNew;
