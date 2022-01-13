import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CabinetView from "./views/CabinetView";
import HomeView from "./views/HomeView";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/events">
          <HomeView />
        </Route>
        <Route path="/cabinet">
          <CabinetView />
        </Route>
        <Redirect to="/events" />
      </Switch>
    </>
  );
}
