import React from "react";
import "./MainSection.scss";
import ControlSection from "./ControlSection";
import EventsSection from "./EventsSection";
import Anhcor from "../../shared/Anchor";

export default function MainSection() {
  return (
    <main>
      <ControlSection />
      <EventsSection />
      <Anhcor />
    </main>
  );
}
