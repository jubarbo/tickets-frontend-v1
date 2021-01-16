import React, { Component } from "react";
import TicketList from "../components/Ticket/TicketList";
import { Button, Container, FormControl } from "@material-ui/core";

class Tickets extends Component {
  render() {
    return (
      <Container>
        <Container>
          <FormControl>
            <Button href="/new" variant="outlined" color="primary">
              Nuevo Ticket
            </Button>
          </FormControl>
        </Container>

        <TicketList />
      </Container>
    );
  }
}

export default Tickets;
