import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "../Home";
import About from "../About";

const CounterPage = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </Switch>
  </div>
);

export default CounterPage;
