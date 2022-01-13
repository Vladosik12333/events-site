import React, { useEffect, useState } from "react";
import "./EventsSection.scss";
import { useSelector } from "react-redux";
import Template from "../../../Template";
import CardEvent from "../../../shared/CardEvent";
import { eventsAPI } from "../../../../redux/services";
import { selectors } from "../../../../redux/users";

export default function EventsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentEvents, setCurrentEvents] = useState([]);
  const idUser = useSelector(state => selectors.getCurrentUserId(state));
  const { data, isError, error, isLoading, isSuccess } =
    eventsAPI.useGetEventsByFounderIdQuery(idUser);

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
    if (!isSuccess) return;

    const actualLastItem = currentPage * 15;

    setCurrentEvents(data.slice(0, actualLastItem));
  }, [currentPage, data]);

  if (isError) return alert(`Ooops... We have unknwon error: ${error.message}`);

  return (
    <section>
      <Template>
        {!isLoading ? (
          <div className="yourEvents">
            <h2>Your events</h2>
            <ul className="eventsCabinet">
              {data.length === 0 ? (
                <h3>You have not any events.</h3>
              ) : (
                currentEvents.map(({ id, title, place, photo }) => {
                  return (
                    <CardEvent
                      key={id}
                      id={id}
                      title={title}
                      place={place}
                      photo={photo}
                      extraButtons
                    />
                  );
                })
              )}
            </ul>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </Template>
    </section>
  );
}
