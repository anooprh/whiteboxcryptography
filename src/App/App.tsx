import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom"

import "./App.css";
import { SHA256 } from "./Sha256"

export class App extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/sha256" component={SHA256} />
                <Route path="/">
                    <div>App Home Page</div>
                </Route>
                <Redirect to="/" />
            </Switch>
        )
    }
}