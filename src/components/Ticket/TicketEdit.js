import React from "react";
import TicketForm from "./TicketForm";

function TicketEdit(props) {
  const ticket = props.ticket;
  // console.log(props.history)
  return (
    <div>
      
      <TicketForm
        _id={ticket._id}
        title={ticket.title}
        description={ticket.description}
        history={props.history}
        
      />
    </div>
  );
}

export default TicketEdit;
