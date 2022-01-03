import React from 'react';
import propTypes from 'prop-types';
import './Template.scss';

export default function Template({ children }) {
  return <div className="container">{children}</div>;
}

Template.propTypes = {
  children: propTypes.array.isRequired,
};
