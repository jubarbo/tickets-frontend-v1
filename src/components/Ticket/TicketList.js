// import { CircularProgress } from "@material-ui/core";
import React, { Component } from "react";
import Ticket from "./Ticket";
import Loader from "../Loader"

const API_URL = process.env.REACT_APP_TICKETS_API
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
    const res = await fetch(API_URL);
    const data = await res.json();
    this.setState({ loading: true, error: null, data: data.tickets });
    return data;
  };

  deleteTicket = async (_id) => {
    const dataUrl = `${API_URL}/${_id}`;
    const res = await fetch(dataUrl, {
      method: "DELETE",
    });
    return res;
  };

  onCheck = (_id) => {
    this.state.data.map((ticket) => {
      if (ticket._id === _id) {
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
      return ticket;
    });
  };

  updateCheckDone = async (_id, isDone) => {
    const res = await fetch(`${API_URL}/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: isDone }),
    });
    return res;
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    return this.state.data.map((ticket) => (
      
      <Ticket ticket={ticket} key={ticket._id} checkDone={this.onCheck} />
      )).reverse();
      
    }
  
}

export default TicketList;
