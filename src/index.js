import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/nucleo-svg.css";
import "./assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-design-system.scss?v1.0.0";

import WelcomePage from './views/WelcomePage.js';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <WelcomePage/>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
