import React, { Component } from "react";
import propTypes from "prop-types";
import "./styles/Ticket.css";
import isDoneChangeColor from '../../utils/isDoneChangeColor'
// import { Link } from "react-router-dom";

import {
  Card,
  Checkbox,
  InputLabel,
  CardContent,
  Typography,
} from "@material-ui/core";

class TicketDetails extends Component {
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


  render() {
    const { ticket } = this.props;
    return (
      <Card className="ticketStyles">
        <CardContent>
          <Typography variant="h5" component="h2">
            <span>{ticket.title}</span>
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
          {/* <Typography className="isDoneText" style={this.isDoneStyle()}> */}
          <Typography className="isDoneText" style={isDoneChangeColor(this.state.data.ticket.done)}>
            {ticket.done ? "Finalizado" : "Sin finalizar"}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

TicketDetails.propTypes = {
  ticket: propTypes.object.isRequired,
};

export default TicketDetails;
