import React, { Component } from "react";
import Ticket from "./Ticket";

class TicketList extends Component {
  state = {
    data: [],
    loading: true,
    error: false,
  };

  async componentDidMount() {
    await this.fetchData()
      .then((res) => {
        this.setState({ loading: false, data: res.tickets });
      })
      .catch((err) => {
        this.setState({ loading: false, error: err });
      });

    this.intervalId = setInterval(async () => {
      await this.fetchData();
      console.log(this);
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    const res = await fetch("http://93.189.91.4:3000/api/tickets");
    const data = await res.json();
    this.setState({ loading: true, error: null, data: data.tickets });
    return data;
  };

  deleteTicket = (_id) => {
    const newTickets = this.state.data.filter((ticket) => ticket._id !== _id);
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
