import React from "react";
import TicketForm from "../components/Ticket/TicketForm";
import HomeButton from "../components/HomeButton";

function TicketNew() {
  return (
    <div>
      <TicketForm isNew />
      <HomeButton />
    </div>
  );
}

export default TicketNew;
