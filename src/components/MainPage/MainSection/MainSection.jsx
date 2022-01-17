import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useRouteMatch } from "react-router-dom";
import { selectors } from "../../../redux/events";
import Template from "../../Template";
import "./MainSection.scss";
import CardEvent from "../../shared/CardEvent/CardEvent";
import ButtonsPagination from "../ButtonsPagination";
import { eventsAPI } from "../../../redux/services";
import Anhcor from "../../shared/Anchor";

export default function MainSection() {
  const { isExact } = useRouteMatch();
  const filter = useSelector(state => selectors.getFilter(state));
  const [currentPage, setCurrentPage] = useState(1);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const { data, error, isError, isLoading, isSuccess } =
    eventsAPI.useGetEventsQuery();

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  const onChangePage = nextPage => {
    scrollToTop();
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    if (!isSuccess) return;

    const filteredData = data.filter(item =>
      item.title.toLowerCase().includes(filter.toLowerCase()),
    );

    const actualLastItem = currentPage * 15;
    const actualFirstItem = actualLastItem - 15;

    setTotalPage(Math.ceil(filteredData.length / 15));
    setCurrentEvents(filteredData.slice(actualFirstItem, actualLastItem));
    if (filteredData.length === 0) toast.error("There are no such events.");
  }, [currentPage, isSuccess, data, filter]);

  if (isError) {
    toast.error(`Oooops... We have unknown error: ${error.message}.`);
  }

  return (
    <main>
      <section className="sectionEventsHome">
        <Template>
          {!isLoading ? (
            <>
              <ul className="eventsHome">
                {currentEvents.map(({ id, title, place, photo }, index) => {
                  return (
                    <CardEvent
                      key={id}
                      title={title}
                      place={place}
                      photo={photo}
                      id={id}
                      index={index}
                      extraButtons={false}
                    />
                  );
                })}
              </ul>
              <ButtonsPagination
                currentPage={currentPage}
                onChangePage={onChangePage}
                totalPage={totalPage}
              />
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </Template>
      </section>
      <Toaster position="bottom-right" />
      {isExact && <Anhcor />}
    </main>
  );
}
