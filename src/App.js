import React, { Component } from "react";
import Tickets from "./pages/Tickets";
import TicketNew from "./pages/TicketNew";
import TicketDetailsContainer from "./pages/TicketDetailsContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Tickets} />
            <Route exact path="/new" component={TicketNew} />
            <Route exact path="/ticket/:ticketId" component={TicketDetailsContainer} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
