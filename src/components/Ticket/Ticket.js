import React, { Component } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  FormControl,
  Card,
  Checkbox,
  InputLabel,
  CardContent,
  Typography,
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
      <Card>
        <CardContent>
        <Typography  color="textSecondary" gutterBottom>
            {ticket._id}
          </Typography>

          <Typography variant="h5" component="h2">
            <Link to={`/ticket/${ticket._id}`}>
              <p>{ticket.title}</p>
            </Link>
          </Typography>

          <p>{ticket.description}</p>

          <p style={this.isDoneStyle()}>{ticket.done ? "Finalizado" : "Sin finalizar"}</p>

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
        </CardContent>
      </Card>
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
