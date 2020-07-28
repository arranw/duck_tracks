import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./features/common/Landing";
import { GlobalStyle } from "./features/styled/Lib";
import Navbar from "./features/common/Navbar";
import AddFeeding from "./features/feedings/AddFeeding";
import ThankYou from "./features/feedings/ThankYou";

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
        <Route path="/redux">
          <header className="App-header">
            <Counter />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <span>
              <span>Learn </span>
              <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                React
              </a>
              <span>, </span>
              <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                Redux
              </a>
              <span>, </span>
              <a className="App-link" href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
                Redux Toolkit
              </a>
              ,<span> and </span>
              <a className="App-link" href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
                React Redux
              </a>
            </span>
          </header>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
