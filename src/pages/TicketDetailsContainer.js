import React, { Component } from "react";
import TicketDetails from "../components/Ticket/TicketDetails";

export default class TicketDetailsContainer extends Component {
  state = {
    data: [],
    loading: true,
    error: false,
  };

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = async () => {
//     this.setState({ loading: true, error: null });

//     try {
//         console.log(this.props.match)
//     //   const data = await api.badges.read(this.props.match.params.badgeId);
//       this.setState({ loading: false, data: data });
//     } catch (e) {
//       this.setState({ loading: false, error: e });
//     }
//   };

  render() {
    return <TicketDetails />;
  }
}
