import React, { Component } from "react";
import Ticket from "./Ticket";

class TicketList extends Component {

    
  state = {
    data: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.fetchData();

    // this.intervalId = setInterval(this.fetchData, 5000);
  }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await (
        await fetch("http://93.189.91.4:3000/api/tickets")
      ).json();
      this.setState({ loading: false, data: data.tickets });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  deleteTicket = (_id) => {
    const newTickets = this.state.data.filter(
      (ticket) => ticket._id !== _id
    );
    this.setState({ data: newTickets });
  };

  checkDone = (_id) => {
    const newTickets = this.state.data.map((ticket) => {
      if (ticket._id === _id) {
        ticket.done = !ticket.done;
      }
      return ticket;
    });

    this.setState({ data: newTickets });
  };


  render() {
    return this.state.data.map((ticket) => (
      <Ticket
        ticket={ticket}
        key={ticket._id}
        deleteTicket={this.deleteTicket}
        checkDone={this.checkDone}
      />
    ));
  }
}

export default TicketList;
