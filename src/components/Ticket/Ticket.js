import React, { Component } from "react";
import propTypes from "prop-types";
import {
  Button,
  FormControl,
  Container,
  Checkbox,
  InputLabel,
} from "@material-ui/core";

class Ticket extends Component {
  state = {
    data: this.props,
    loading: false,
    error: false,
  };
  isDoneStyle() {
    return {
      fontSize: "20px",
      textDecoration: "none",
      color: this.props.ticket.done ? "green" : "red",
    };
  }


  // onDelete = (e) => {
  //   const _id = this.props.ticket._id;
  //   this.deleteTicket(_id)
  //     .then(async (res) => {
  //       const message = await res.json();
  //       console.log(message);
  //       console.log(this.state)
  //       // const newTickets = this.state.data.filter((ticket) => ticket._id !== _id);
  //       // this.setState({ data: newTickets });

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       this.setState({ error: err });
  //     });
  // };

  // deleteTicket = async (_id) => {
  //   const res = await fetch(`http://93.189.91.4:3000/api/tickets/${_id}`, {
  //     method: "DELETE",
  //   });
  //   return res;

    
  // };

  render() {
    const { ticket } = this.state.data;
    
    return (
      <Container>
        <p style={this.isDoneStyle()}>
          {ticket.title} - {ticket.description} -
          {ticket.done ? "Hecho" : "No hecho"} - {ticket._id}
        </p>
        <InputLabel htmlFor="done">
          Hecho
          <Checkbox
            id="done"
            color="primary"
            laber="Hecho"
            checked={ticket.done}
            onChange={this.props.checkDone.bind(this, ticket._id)}
          />
        </InputLabel>
        <FormControl>
          <Button
            style={btnDelete}
            // onClick={this.props.deleteTicket.bind(this, ticket._id)}
            onClick={this.props.onDelete.bind(this, ticket._id)}
            variant="contained"
            color="secondary"
          >
            Eliminar
          </Button>
        </FormControl>
      </Container>
    );
  }
}

Ticket.propTypes = {
  ticket: propTypes.object.isRequired,
};

const btnDelete = {
  background: "#ea2027",
  // fontSize: "18px",
  // color: "#fff",
  // border: "none",
  // padding: "10px",
  // borderRadius: "50%",
  // cursor: "pointer",
};

export default Ticket;
