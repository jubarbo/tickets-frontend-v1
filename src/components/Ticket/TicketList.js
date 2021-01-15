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

    // this.intervalId = setInterval(async () => {
    //   await this.fetchData();
    // }, 10000);
  }

  componentWillUnmount() {
    // clearInterval(this.intervalId);
  }

  fetchData = async () => {
    const res = await fetch("http://93.189.91.4:3000/api/tickets");
    const data = await res.json();
    this.setState({ loading: true, error: null, data: data.tickets });
    return data;
  };

  deleteTicket = async (_id) => {
    const res = await fetch(`http://93.189.91.4:3000/api/tickets/${_id}`, {
      method: "DELETE",
    });
    return res;
  };

  onDelete = (_id) => {
    this.deleteTicket(_id)
      .then(async (res) => {
        const message = await res.json();
        console.log(message);
        const newTickets = this.state.data.filter(
          (ticket) => ticket._id !== _id
        );
        this.setState({ data: newTickets });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: err });
      });
  };

  onCheck = (_id) => {
    this.state.data.map((ticket) => {
      if (ticket._id === _id) {
        const ticketState = JSON.stringify(this.state)
        ticket.done = !ticket.done;
        this.setState({ done: ticket.done });

        this.updateCheckDone(_id, ticket.done)
          .then(async (res) => {
            const ticketUpdated = await res.json();
            console.log(`${JSON.stringify(ticketUpdated.message)}`);
          })
          .catch((err) => {
            console.log(err);
            this.setState({ error: err });
          });
      }
    });
    console.log(_id);
  };

  updateCheckDone = async (_id, isDone) => {
    const res = await fetch(`http://93.189.91.4:3000/api/tickets/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: isDone }),
    });
    return res;
  };

  render() {
    return this.state.data.map((ticket) => (
      <Ticket
        ticket={ticket}
        key={ticket._id}
        onDelete={this.onDelete}
        checkDone={this.onCheck}
      />
    ));
  }
}

export default TicketList;
