import React, { Component } from "react";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import "./styles/TicketForm.css";
import {
  FormControl,
  TextField,
  Container,
  Tooltip,
  Fab,
  Card,
  CardContent,
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
          this.setState({ error: err });
          console.log(err);
        });
    }

    if (!this.props.isNew && this.state._id) {
      this.updateTicket(this.state._id, this.state)
        .then(async (res) => {
          const ticketUpdated = await res.json();
          console.log(`${JSON.stringify(ticketUpdated.message)}`);
          setTimeout(() => {
            this.props.history.push("/");
          }, 500);
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
      <Card className="ticketFormStyles">
        <CardContent>
          <Container style={frmContainer} className="formContainer">
          
            <FormControl>
              <TextField
                id="ticketTitle"
                name="title"
                variant="outlined"
                label="Edit title"
                onChange={this.onChange}
                value={this.state.title}
              />
              <br />
              <TextField
                id="ticketTextField"
                name="description"
                variant="outlined"
                multiline
                rows={5}
                label="Edit description"
                onChange={this.onChange}
                value={this.state.description}
              />
              <br />
             
              <Tooltip title="Save ticket">
                <Fab style={btnSave} onClick={this.onSubmit} color="primary">
                  <SaveOutlinedIcon />
                </Fab>
              </Tooltip>
            </FormControl>
          </Container>
        </CardContent>
      </Card>
    );
  }
}

const frmContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const btnSave = {
  margin: "-.6em .4em .4em .4em ",
  alignSelf: "center",
};

export default TicketForm;
