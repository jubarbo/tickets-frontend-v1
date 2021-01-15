import React, { Component } from "react";
import TicketEdit from "../components/Ticket/TicketEdit";

export default class TicketEditContainer extends Component {
  state = {
    data: [],
    loading: true,
    error: false,
  };

  render() {
    const ticketId = this.props.match.params.ticketId;
    return <TicketEdit ticket={ticketId} />;
  }
}
