import React, { useEffect, useState } from "react";
import "./EventsSection.scss";
import Template from "../../../Template";
import bd from "../../../../base";
import CardEvent from "../../../shared/CardEvent";

export default function EventsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentEvents, setCurrentEvents] = useState([]);

  const scrollHandler = evt => {
    if (
      evt.target.documentElement.scrollHeight -
        (evt.target.documentElement.scrollTop + window.innerHeight) <
      100
    )
      return setCurrentPage(page => page + 1);
    return null;
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    const actualLastItem = currentPage * 15;

    setCurrentEvents(bd.slice(0, actualLastItem));
  }, [currentPage]);

  return (
    <section>
      <Template>
        <ul className="eventsCabinet">
          {currentEvents.map(({ id, title, place, photo }) => {
            return (
              <CardEvent
                key={id}
                title={title}
                place={place}
                photo={photo}
                extraButtons
              />
            );
          })}
        </ul>
      </Template>
    </section>
  );
}
