import React, { Component } from "react";
import Tickets from "./pages/Tickets";
import TicketNew from "./pages/TicketNew";
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
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
