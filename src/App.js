import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Desktop from "./views/desktop.js";
import Archivos from "./views/archivos.js";
import MiPc from "./views/mipc.js";
import Papelera from "./views/papelera.js";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/desktop" exact>
            <Desktop />
          </Route>
          <Route path="/archivos">
            <Archivos />
          </Route>
          <Route path="/mipc">
            <MiPc />
          </Route>
          <Route path="/papelera">
            <Papelera />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
