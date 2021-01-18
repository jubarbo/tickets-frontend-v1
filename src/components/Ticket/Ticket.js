import React, { Component } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import isDoneChangeColor from "../../utils/isDoneChangeColor";
import "./styles/Ticket.css";

import {
  Button,
  FormControl,
  Card,
  Box,
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

  updateButton() {
    return {
      backgroundColor: "#c35858",
      color: "#fff",
    };
  }


  render() {
    const { ticket } = this.props;
    return (
      <Card className="ticketStyles">
        <CardContent>
          <Typography variant="h5" component="h2">
            <Link className="titleLink" to={`/ticket/${ticket._id}`}>
              <span>{ticket.title}</span>
            </Link>
          </Typography>

          <Card className="descriptionCard">
            <CardContent>
              <Typography className="descriptionText">
                {ticket.description}
              </Typography>
            </CardContent>
          </Card>

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

          <Typography className="isDoneText" style={isDoneChangeColor(this.state.data.ticket.done)}>
            {ticket.done ? "Finalizado" : "Pendiente"}
          </Typography>
          <Box className="buttonTicket">
            <FormControl>
              <Button
                className="buttonTicket"
                href={`/ticket/${ticket._id}`}
                variant="contained"
                color="primary"
              >
                Ver Más
              </Button>
            </FormControl>
          </Box>
          <FormControl>
            <Button
              style={this.updateButton()}
              href={`/edit/${ticket._id}`}
              variant="outlined"
            >
              Actualizar
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

export default Ticket;
