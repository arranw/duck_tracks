import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./features/common/Landing";
import { GlobalStyle } from "./features/styled/Lib";

import Navbar from "./features/common/Navbar";
import AddFeeding from "./features/feedings/AddFeeding";
import ViewFeeding from "./features/feedings/ViewFeeding";
import ThankYou from "./features/feedings/ThankYou";
import FeedingList from "./features/feedings/FeedingList";

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/submit">
          <AddFeeding />
        </Route>
        <Route exact path="/thankyou/:id">
          <ThankYou />
        </Route>
        <Route exact path="/view/:id">
          <ViewFeeding />
        </Route>
        <Route exact path="/view">
          <FeedingList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
