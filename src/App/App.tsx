import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { SHA256 } from "./Sha256";
import "./App.css";

export class App extends React.Component {
  render() {
    return (
      <div className={"body"}>
        <Switch>
          <Route path="/sha256" component={SHA256} />
          <Route path="/">
            <div>App Home Page</div>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
