import React, { Component } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
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

  classCheckDone() {
    return {
      width: "4em",
    };
  }

  isDoneStyle() {
    return {
      fontSize: "20px",
      textDecoration: "none",
      color: this.state.data.ticket.done ? "green" : "red",
    };
  }

  render() {
    const { ticket } = this.props;
    return (
      <Container>
        <Link to={`/ticket/${ticket._id}`}>
          <p style={this.isDoneStyle()}>
            {ticket.title} - {ticket.description} -
            {ticket.done ? "Hecho" : "No hecho"} - {ticket._id}
          </p>
        </Link>
        <InputLabel htmlFor="done">
          Hecho
          <Checkbox
            id="done"
            className="checkDone"
            color="primary"
            laber="Hecho"
            checked={ticket.done}
            onChange={this.props.checkDone.bind(this, ticket._id)}
          />
        </InputLabel>
        <FormControl>
          <Button
            style={btnDelete}
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
