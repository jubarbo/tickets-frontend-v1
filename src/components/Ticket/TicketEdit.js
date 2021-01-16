import React, { Component } from "react";

function TicketEdit(props) {
  const ticket = props.ticket;
  return (
    <div>
      <h2>
        Editar esto:
        {ticket}
      </h2>
    </div>
  );
}

export default TicketEdit;
