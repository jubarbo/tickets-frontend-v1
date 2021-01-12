import React, { Component } from "react";
import Tickets from "./components/Tickets";
import TicketForm from "./components/TicketForm";
import sample from "./sample/sample.json";

class App extends Component {
  state = {
    tickets: sample.tickets,
  };

  addTicket = (title, description, _id) => {
    const newTicket = {
      title: title,
      description: description,
      _id: this.state.tickets.length,
    };
    this.setState({
      tickets: [...this.state.tickets, newTicket],
    });
  };

  deleteTicket = (_id) => {
    const newTickets = this.state.tickets.filter((ticket) => ticket._id !== _id);
    this.setState({tickets: newTickets})
  };

  checkDone = _id => {
    const newTickets = this.state.tickets.map( ticket => {
      if(ticket._id === _id){
        ticket.done = !ticket.done
      }
      return ticket
    
    })

    this.setState({tickets: newTickets})
  }

  render() {
    return (
      <div>
        <TicketForm addTicket={this.addTicket} />
        <Tickets
          tickets={this.state.tickets}
          deleteTicket={this.deleteTicket}
          checkDone={this.checkDone}
        />
      </div>
    );
  }
}

export default App;
