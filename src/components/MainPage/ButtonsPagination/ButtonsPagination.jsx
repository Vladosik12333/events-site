import React from 'react';
import Pagination from 'react-pagination-library';
import './ButtonsPagination.scss';
import 'react-pagination-library/build/css/index.css';
import propTypes from 'prop-types';

export default function ButtonsPagination({
  currentPage,
  onChangePage,
  totalPage,
}) {
  return (
    <div className="containerPagination">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPage}
        changeCurrentPage={onChangePage}
        theme="square"
      />
    </div>
  );
}

ButtonsPagination.propTypes = {
  currentPage: propTypes.number.isRequired,
  onChangePage: propTypes.func.isRequired,
  totalPage: propTypes.number.isRequired,
};
