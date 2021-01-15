import React, { Component } from "react";
import "./styles/ticketForm.css";
import { Button, FormControl, TextField, Container } from "@material-ui/core";

class TicketForm extends Component {
  state = {
    title: "",
    description: "",
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.setState({ loading: false });
  }
  onSubmit = (e) => {
    e.preventDefault();

    this.addTicket(this.state.title, this.state.description)
      .then(async (res) => {
        const ticketCreated = await res.json();
        console.log(`Ticket ${ticketCreated._id} created.`);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: err });
      });
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
    const res = await fetch("http://93.189.91.4:3000/api/tickets", {
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

  render() {
    return (
      <Container>
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
            Enviar
          </Button>
        </FormControl>
      </Container>
    );
  }
}

export default TicketForm;
