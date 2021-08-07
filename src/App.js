import SongSearch from "./search";

import React, { Component } from "react";

import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import "./css/index.css";
import "./css/app.css";

import { Link } from "react-router-dom";

class App extends Component {
  render() {
    const history = createBrowserHistory();
    return (
      <>
        <Router history={history}>
          <div className="App">
            <div className="nav-bar">
              <Link to="/">Home</Link>
              <Link to="/search">Search Songs</Link>
              <Link to="/contact">Contact</Link>
              <Link className="float-right login" to="/login">
                Log In
              </Link>
            </div>

            <Switch>
              <div className="App-header">
                <Route exactly path="/" component={App}>
                  <Route exactly path="/search" component={SongSearch} />
                  <Route exactly path="/contact" component={Contact} />
                </Route>
                <Route exactly path="/login" component={Login} />
              </div>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

function AboutUs() {
  return (
    <>
      <div>About Us</div>
    </>
  );
}

function Contact() {
  return (
    <>
      <div>Contact</div>
    </>
  );
}

function Login() {
  return (
    <>
      <div>Log Me In</div>
    </>
  );
}

export default App;
