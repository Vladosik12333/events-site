import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectors } from "../../../redux/events";
import Template from "../../Template";
import "./MainSection.scss";
import CardEvent from "../../shared/CardEvent/CardEvent";
import ButtonsPagination from "../ButtonsPagination";
import { eventsAPI } from "../../../redux/services";

export default function MainSection() {
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
  }, [currentPage, isSuccess, data, filter]);

  if (isError) {
    alert(`Oooops... We have unknown error: ${error.message}`);
  }

  return (
    <main>
      <section>
        <Template>
          {!isLoading ? (
            <>
              <ul className="eventsHome">
                {currentEvents.map(({ id, title, place, photo }) => {
                  return (
                    <CardEvent
                      key={id}
                      title={title}
                      place={place}
                      photo={photo}
                      id={id}
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
    </main>
  );
}
