import React, { Component } from "react";
import TicketDetails from "../components/Ticket/TicketDetails";
import { CircularProgress } from "@material-ui/core";
export default class TicketDetailsContainer extends Component {
  state = {
    data: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    const ticketId = this.props.match.params.ticketId;

    await fetch(`http://93.189.91.4:3000/api/tickets/${ticketId}`)
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
      return <CircularProgress />;
    }
    return <TicketDetails data={this.state.data} />;
  }
}
