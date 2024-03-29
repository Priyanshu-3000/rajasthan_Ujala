// router.js

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute"; // Custom private route component
import PublicRoute from "./PublicRoute"; // Custom public route component
import LoginPage from "./LoginPage"; // Example login page component
import AdminPage from "./AdminPage"; // Example admin page component
import Admin from "./Admin/Admin";

const RouterConfig = () => {
  return (
    <Router>
      <Switch>
        {/* Public Routes */}
        <PublicRoute exact path="/login" component={LoginPage} />

        {/* Private Routes */}
        {/* <PrivateRoute exact path="/admin" component={AdminPage} /> */}

        {/* Redirect any unknown routes to login page */}
        <Route path="*">
          <Route path="/admin" element={<Admin />} />
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterConfig;
