import React from "react";
import TicketForm from "./TicketForm";
import HomeButton from "../HomeButton";

function TicketEdit(props) {
  const ticket = props.ticket;
  return (
    <div>
      Editar esto:
      <TicketForm
        _id={ticket._id}
        title={ticket.title}
        description={ticket.description}
      />
      <HomeButton />
    </div>
  );
}

export default TicketEdit;
