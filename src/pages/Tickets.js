import React from "react";
import "./styles/Tickets.css";
import TicketList from "../components/Ticket/TicketList";
import { Container } from "@material-ui/core";

function Tickets() {
  return (
    <Container className="ticketsContainer">
      <TicketList />
    </Container>
  );
}

export default Tickets;
