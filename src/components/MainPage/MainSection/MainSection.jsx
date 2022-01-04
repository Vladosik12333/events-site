import React, { useEffect, useState } from 'react';
import Template from '../../Template';
import './MainSection.scss';
import bd from '../../../base';
import CardEvent from '../../shared/CardEvent/CardEvent';
import ButtonsPagination from '../ButtonsPagination';

export default function MainSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  const onChangePage = nextPage => {
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    const actualLastItem = currentPage * 15;
    const actualFirstItem = actualLastItem - 15;

    setTotalPage(Math.ceil(bd.length / 15));
    setCurrentEvents(bd.slice(actualFirstItem, actualLastItem));
  }, [currentPage]);

  return (
    <section>
      <Template>
        <ul className="eventsHome">
          {currentEvents.map(({ id, title, place, photo }) => {
            return (
              <CardEvent
                key={id}
                title={title}
                place={place}
                photo={photo}
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
      </Template>
    </section>
  );
}
