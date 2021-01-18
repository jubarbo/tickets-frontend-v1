import React, { Component } from "react";
import Tickets from "./pages/Tickets";
import TicketNew from "./pages/TicketNew";
import TicketDetailsContainer from "./pages/TicketDetailsContainer";
import TicketEditContainer from "./pages/TicketEditContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

class App extends Component {
  
  render() { 
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Tickets} />
            <Route exact path="/new" component={TicketNew} />
            <Route
              exact
              path="/ticket/:ticketId"
              component={TicketDetailsContainer}
            />
            <Route
              exact
              path="/edit/:ticketId"
              component={TicketEditContainer}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
