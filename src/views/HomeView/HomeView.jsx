import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import MainSection from '../../components/mainPage/MainSection';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import AboutEvent from '../../components/AboutEvent';

export default function HomeView() {
  const { url } = useRouteMatch();

  return (
    <>
      <Header form />
      <MainSection />
      <Footer />

      <Route path={`${url}/:id`}>
        <AboutEvent />
      </Route>
    </>
  );
}
