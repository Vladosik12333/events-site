import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CabinetView from './views/CabinetView';
import HomeView from './views/HomeView';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/cabinet">
          <CabinetView />
        </Route>
        <Route path="modal/:id"></Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}
