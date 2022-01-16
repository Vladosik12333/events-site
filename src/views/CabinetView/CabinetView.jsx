import React, { useEffect, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useHistory,
} from "react-router-dom";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import MainSection from "../../components/cabinetPage/MainSection";
import DeleteEvent from "../../components/cabinetPage/DeleteEvent";
import { selectors } from "../../redux/users";

const CreateEvent = lazy(() =>
  import("../../components/cabinetPage/CreateEvent"),
);
const EditEvent = lazy(() => import("../../components/cabinetPage/EditEvent"));

export default function CabinetView() {
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

      <Suspense fallback={<h1>Loading...</h1>}>
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
      </Suspense>
    </>
  );
}
