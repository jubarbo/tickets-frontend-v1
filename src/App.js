import React, { Component } from "react";
import Tickets from "./pages/Tickets";
import TicketForm from "./components/Ticket/TicketForm";

class App extends Component {
  state = {
    tickets: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    console.log(this.state.loading);
    this.setState({ loading: true, error: null });
    try {
      const data = await (
        await fetch("http://93.189.91.4:3000/api/tickets")
      ).json();
      this.setState({ loading: false, tickets: data.tickets });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
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
    const newTickets = this.state.tickets.filter(
      (ticket) => ticket._id !== _id
    );
    this.setState({ tickets: newTickets });
  };

  checkDone = (_id) => {
    const newTickets = this.state.tickets.map((ticket) => {
      if (ticket._id === _id) {
        ticket.done = !ticket.done;
      }
      return ticket;
    });

    this.setState({ tickets: newTickets });
  };

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
