import React, { Component } from "react";
import Loader from "../components/Loader";
import TicketDetails from "../components/Ticket/TicketDetails";



import {
  Container,
} from "@material-ui/core";

const API_URL = process.env.REACT_APP_TICKETS_API;

export default class TicketDetailsContainer extends Component {
  state = {
    data: [],
    loading: true,
    error: false,
  };

  deleteTicket = async (_id) => {
    const res = await fetch(`http://93.189.91.4:3000/api/tickets/${_id}`, {
      method: "DELETE",
    });
    return res;
  };

  onDelete = () => {
    const _id = this.state.data._id;
    this.deleteTicket(_id)
      .then(async (res) => {
        const message = await res.json();
        console.log(message.message);
        setTimeout(() => {
          this.props.history.push("/");
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: err });
      });
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

  onCheck = (_id) => {
    const ticket = this.state.data;
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

    return ticket;
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    const ticketId = this.props.match.params.ticketId;

    await fetch(`${API_URL}${ticketId}`)
      .then(async (res) => {
        const data = await res.json();
        this.setState({ loading: false, data: data });
      })
      .catch((err) => {
        this.setState({ loading: false, error: err });
        console.log(err);
      });
  };
  
  render() {

    if (this.state.loading) {
      return <Loader />;
    }

    return (
      <Container>
        <TicketDetails
          ticket={this.state.data}
          key={this.state.data._id}
          checkDone={this.onCheck}
          onDelete= {this.onDelete}
        />
      </Container>
    );
  }
}

