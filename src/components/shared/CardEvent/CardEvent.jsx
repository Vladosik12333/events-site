import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import propTypes from 'prop-types';
import './CardEvent.scss';
import mockup from '../../../mockup-photo.jpg';

export default function CardEvent({ title, place, photo, extraButtons }) {
  const currentPhoto = photo === '' ? mockup : photo;

  return (
    <li className="itemEvent">
      <ul>
        {extraButtons && (
          <li className="itemIconsEvent">
            <button type="button">
              <AiFillDelete />
            </button>
            <button type="button">
              <AiFillEdit />
            </button>
          </li>
        )}
        <li className="containerPhoto">
          <img src={currentPhoto} alt={title} />
        </li>
        <li className="containerInfo">
          <h3>{title}</h3>
          <p>{place}</p>
        </li>
      </ul>
    </li>
  );
}

CardEvent.propTypes = {
  title: propTypes.string.isRequired,
  place: propTypes.string.isRequired,
  photo: propTypes.string.isRequired,
  extraButtons: propTypes.bool.isRequired,
};
