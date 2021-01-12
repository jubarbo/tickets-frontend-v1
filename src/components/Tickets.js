import React, { Component } from "react";
import Ticket from "./Ticket";
import propTypes from "prop-types";

class Tickets extends Component {
  render() {
    return this.props.tickets.map((ticket) => (
      <Ticket
        ticket={ticket}
        key={ticket._id}
        deleteTicket={this.props.deleteTicket}
        checkDone={this.props.checkDone}
      />
    ));
  }
}

Tickets.propTypes = {
  tickets: propTypes.array.isRequired,
};

export default Tickets;
