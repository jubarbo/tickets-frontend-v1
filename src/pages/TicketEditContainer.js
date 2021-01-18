import React, { Component } from "react";
import TicketEdit from "../components/Ticket/TicketEdit";
import Loader from '../components/Loader';

const API_URL = process.env.REACT_APP_TICKETS_API

export default class TicketEditContainer extends Component {
  state = {
    data: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.fetchTicket()
    
  }

  fetchTicket() {

    const ticketId = this.props.match.params.ticketId;

    fetch(`${API_URL}${ticketId}`)
    .then(async (res)=>{
      const data = await res.json()
      this.setState({loading:false, data:data})
    })
    .catch(err => {
      this.setState({error:err})
      console.log(err)
    })
  }

  render() {
    if(this.state.loading){
      return <Loader />
    }
    return <TicketEdit ticket={this.state.data} history={this.props.history} />;
  }
}
