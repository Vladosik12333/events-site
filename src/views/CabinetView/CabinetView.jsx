import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useHistory,
} from "react-router-dom";
import CreateEvent from "../../components/cabinetPage/CreateEvent";
import DeleteEvent from "../../components/cabinetPage/DeleteEvent";
import EditEvent from "../../components/cabinetPage/EditEvent";
import MainSection from "../../components/cabinetPage/MainSection";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import { selectors } from "../../redux/users";

export default function HomeView() {
  const { url } = useRouteMatch();
  const statusAuth = useSelector(state => selectors.getCurrentUserId(state));
  const history = useHistory();

  useEffect(() => {
    if (!statusAuth ?? false) return history.push("/events");
    return null;
  }, []);

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
