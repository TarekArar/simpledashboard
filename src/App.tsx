import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DashboardLayout from "./shared/dashboardLayout";
import Dashboard from "./pages/dashboard";
import Reports from "./pages/reports";
import Projects from "./pages/projects";
import Employees from "./pages/employees";

export default function App() {
  return (
    <Router>
      <DashboardLayout>
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/employees">
            <Employees />
          </Route>
        </Switch>
      </DashboardLayout>
    </Router>
  );
}
