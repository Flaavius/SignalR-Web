import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import MainPage from "../modules/mainPage";

const history = createBrowserHistory();

const AppRoute = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </Router>
);

export default AppRoute;
