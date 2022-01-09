import React from "react";
import "./MainSection.scss";
import ControlSection from "./ControlSection";
import EventsSection from "./EventsSection";

export default function MainSection() {
  return (
    <main>
      <ControlSection />
      <EventsSection />
    </main>
  );
}
