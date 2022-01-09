import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import CreateEvent from "../../components/cabinetPage/CreateEvent";
import DeleteEvent from "../../components/cabinetPage/DeleteEvent";
import EditEvent from "../../components/cabinetPage/EditEvent";
import MainSection from "../../components/cabinetPage/MainSection";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function HomeView() {
  const { url } = useRouteMatch();

  return (
    <>
      <Header form={false} />
      <MainSection />
      <Footer />

      <Switch>
        <Route path={`${url}/createEvent`}>
          <CreateEvent />
        </Route>
        <Route path={`${url}/editEvent/:id`}>
          <EditEvent />
        </Route>
        <Route path={`${url}/deleteEvent/:id`}>
          <DeleteEvent />
        </Route>
        <Redirect to="/cabinet" />
      </Switch>
    </>
  );
}
