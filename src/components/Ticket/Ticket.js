import React, { Component } from "react";
import propTypes from "prop-types";

class Ticket extends Component {
  isDoneStyle() {
    return {
      fontSize: "20px",
      textDecoration: "none",
      color: this.props.ticket.done ? "green" : "red",
    };
  }

  render() {
    const { ticket } = this.props;
    return (
      <p style={this.isDoneStyle()}>
        {ticket.title} - {ticket.description} -
        {ticket.done ? "Hecho" : "No hecho"} - {ticket._id}
        <input
          type="checkbox"
          checked={ticket.done}
          onChange={this.props.checkDone.bind(this, ticket._id)}
        />
        <button
          style={btnDelete}
          onClick={this.props.deleteTicket.bind(this, ticket._id)}
        >
          X
        </button>
      </p>
    );
  }
}

Ticket.propTypes = {
  ticket: propTypes.object.isRequired,
};

const btnDelete = {
  fontSize: "18px",
  background: "#ea2027",
  color: "#fff",
  border: "none",
  padding: "10px",
  borderRadius: "50%",
  cursor: "pointer",
};

export default Ticket;
