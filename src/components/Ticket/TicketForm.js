import React, { Component } from "react";
import "../styles/ticketForm.css";
import {
  Button,
  FormControl,
  TextField,
  Container,
  Typography,
} from "@material-ui/core";

const API_URL = process.env.REACT_APP_TICKETS_API;

class TicketForm extends Component {
  state = {
    _id: this.props._id,
    title: this.props.title,
    description: this.props.description,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.setState({ loading: false });
    console.log(this.state._id);
    // console.log(this.props.match.params.ticketId)
  }
  onSubmit = (e) => {
    e.preventDefault();

    if (this.props.isNew) {
      this.addTicket(this.state.title, this.state.description)
        .then(async (res) => {
          const ticketCreated = await res.json();
          console.log(`Ticket ${ticketCreated._id} created.`);
        })
        .catch((err) => {
          console.log(err);
          this.setState({ error: err });
        });
    }

    if (!this.props.isNew && this.state._id) {
      this.updateTicket(this.state._id, this.state)
        .then(async (res) => {
          const ticketUpdated = await res.json();
          console.log(`${JSON.stringify(ticketUpdated.message)}`);
        })
        .catch((err) => {
          console.log(err);
          this.setState({ error: err });
        });
    }
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addTicket = async (title, description) => {
    const newTicket = {
      title: title,
      description: description,
    };
    const res = await fetch(API_URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(newTicket),
    });
    return res;
  };

  updateTicket = async (_id, newData) => {
    const res = await fetch(`${API_URL}/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newData.title,
        description: newData.description,
      }),
    });
    return res;
  };

  render() {
    return (
      <Container>
        <Typography>{this.props._id}</Typography>
        <FormControl>
          <TextField
            id="ticketTitle"
            name="title"
            variant="outlined"
            label="Write a title"
            onChange={this.onChange}
            value={this.state.title}
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <TextField
            id="ticketTextField"
            name="description"
            variant="outlined"
            multiline
            rows={5}
            label="Write a description"
            onChange={this.onChange}
            value={this.state.description}
          />
        </FormControl>
        <br />
        <FormControl>
          <Button variant="contained" color="primary" onClick={this.onSubmit}>
            Guardar
          </Button>
        </FormControl>
      </Container>
    );
  }
}

export default TicketForm;
