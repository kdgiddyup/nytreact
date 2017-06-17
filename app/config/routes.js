// this file exports our react-router nesting

import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

// to do: import components needed for nytreact app
import Main from "../components/Main";
import Results from "../components/Results";
import Saved from "../components/Saved";

// to do: set up routes for nytreact (these are c/p from quotes app)
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="/results" component={Results} />
      <Route path="/saved" component={Saved} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;