import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const HomeView = lazy(() => import("./views/HomeView"));
const CabinetView = lazy(() => import("./views/CabinetView"));

export default function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/events">
            <HomeView />
          </Route>
          <Route path="/cabinet">
            <CabinetView />
          </Route>
          <Redirect to="/events" />
        </Switch>
      </Suspense>
    </>
  );
}
