import React from "react";
import "./MainSection.scss";
import { useRouteMatch } from "react-router-dom";
import ControlSection from "./ControlSection";
import EventsSection from "./EventsSection";
import Anhcor from "../../shared/Anchor";

export default function MainSection() {
  const { isExact } = useRouteMatch();

  return (
    <main>
      <ControlSection />
      <EventsSection />
      {isExact && <Anhcor />}
    </main>
  );
}
