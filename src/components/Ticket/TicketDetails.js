import React from "react";

function TicketDetails(props) {
  const ticket = props.data;
  return (
    <div>
      <p>{`${ticket._id}`}</p>
      <p>{`${ticket.title}`}</p>
      <p>{`${ticket.description}`}</p>
      <p>{`${ticket.done ? "Hecho" : "No hecho"}`}</p>
    </div>
  );
}

export default TicketDetails;
