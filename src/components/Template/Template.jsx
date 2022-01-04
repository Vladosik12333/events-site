import React from 'react';
import propTypes, { array, object } from 'prop-types';
import './Template.scss';

export default function Template({ children }) {
  return <div className="container">{children}</div>;
}

Template.propTypes = {
  children: propTypes.oneOfType([array, object]).isRequired,
};
