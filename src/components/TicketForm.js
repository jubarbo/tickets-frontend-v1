import React, { Component } from "react";
import "./ticketForm.css";
import { Button, FormControl, TextField, Container, InputLabel } from "@material-ui/core";

class TicketForm extends Component {
  state = {
    title: "",
    description: "",
  };

  onSubmit = (e) => {
    this.props.addTicket(this.state.title, this.state.description);
    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
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
