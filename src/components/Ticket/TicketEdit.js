import React from "react";
import TicketForm from "./TicketForm";
import { Box, Container, Typography } from "@material-ui/core";

function TicketEdit(props) {
  const ticket = props.ticket;
  return (
    <Box>
      <Container>
        <Typography className="titleStyle" variant="h5" component="h1">
          Editar ticket:
        </Typography>
      </Container>
      <TicketForm
        _id={ticket._id}
        title={ticket.title}
        description={ticket.description}
        history={props.history}
      />
    </Box>
  );
}

export default TicketEdit;
