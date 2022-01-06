import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import CreateEvent from '../../components/CreateEvent';
import Footer from '../../components/shared/Footer';
import Header from '../../components/shared/Header';

export default function HomeView() {
  const { url } = useRouteMatch();

  return (
    <>
      <Header form={false} />
      <Footer />

      <Route path={`${url}/createEvent`}>
        <CreateEvent />
      </Route>
    </>
  );
}
