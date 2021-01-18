import React from "react";
import "./styles/Tickets.css";
import TicketList from "../components/Ticket/TicketList";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Fab, Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(1),
  },
}));

const tooltipStyles = () => {
  return {
    position: "fixed",
    zIndex: "999",
  };
};

function Tickets() {
  const classes = useStyles();
  return (
    <Container className="ticketsContainer">
      <Tooltip title="Add ticket" style={tooltipStyles()}>
        <Fab href="/new" color="primary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>

      <TicketList />
    </Container>
  );
}

export default Tickets;
