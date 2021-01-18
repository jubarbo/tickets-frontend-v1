import React, { Component } from "react";
import propTypes from "prop-types";
import "./styles/Ticket.css";
import isDoneChangeColor from "../../utils/isDoneChangeColor";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import {
  Card,
  Checkbox,
  InputLabel,
  CardContent,
  Typography,
  Fab,
  Tooltip,
} from "@material-ui/core";

class TicketDetails extends Component {
  state = {
    data: this.props,
    loading: false,
    error: false,
  };


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
          <Typography
            className="isDoneText"
            style={isDoneChangeColor(this.state.data.ticket.done)}
          >
            {ticket.done ? "Finalizado" : "Pendiente"}
          </Typography>

          <Tooltip title="Edit ticket">
            <Fab
              style={btnEdit}
              href={`/edit/${ticket._id}`}
              color="primary"
            >
              <EditOutlinedIcon />
            </Fab>
          </Tooltip>

          <Tooltip title="Delete ticket">
            <Fab
              style={btnDelete}
              onClick={this.props.onDelete.bind(this, ticket._id)}
              color="secondary"
            >
              <DeleteOutlineRoundedIcon />
            </Fab>
          </Tooltip>
        </CardContent>
      </Card>
    );
  }
}

export default TicketDetails;

TicketDetails.propTypes = {
  ticket: propTypes.object.isRequired,
};

const btnDelete = {
  background: "#ea2027",
  margin: ".2em .6em .2em",
};

const btnEdit = {
  margin: ".2em .6em .2em",
};
