import React, { lazy, Suspense } from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import MainSection from "../../components/mainPage/MainSection";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

const AboutEvent = lazy(() => import("../../components/mainPage/AboutEvent"));
const Authorization = lazy(() =>
  import("../../components/mainPage/Authorization/Authorization"),
);

export default function HomeView() {
  const { url } = useRouteMatch();

  return (
    <>
      <Header form />
      <MainSection />
      <Footer />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path={`${url}/aboutEvent/:id`}>
            <AboutEvent />
          </Route>
          <Route path={`${url}/authorization`}>
            <Authorization />
          </Route>
          <Redirect to="/events" />
        </Switch>
      </Suspense>
    </>
  );
}
