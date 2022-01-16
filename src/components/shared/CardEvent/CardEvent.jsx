/* eslint-disable react/require-default-props */
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import propTypes from "prop-types";
import "./CardEvent.scss";
import { Link, useRouteMatch } from "react-router-dom";
import mockup from "../../../mockup-photo.jpg";
import TemplateAdversting from "../../TemplateAdversting";

export default function CardEvent({
  id,
  title,
  place,
  photo,
  extraButtons,
  index,
}) {
  const { url } = useRouteMatch();

  const currentPhoto = photo === "" ? mockup : photo;

  if (extraButtons)
    return (
      <li className="itemEvent">
        <ul>
          <li className="itemIconsEvent">
            <Link to={`${url}/deleteEvent/${id}`}>
              <AiFillDelete />
            </Link>
            <Link to={`${url}/editEvent/${id}`}>
              <AiFillEdit />
            </Link>
          </li>
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

  return (
    <>
      {index > 3 && index % 2 === 0 && (
        <li className="itemEvent itemEventCursor">
          <TemplateAdversting>
            Your advertisement could be here.
          </TemplateAdversting>
          <div className="containerInfo">
            <h3>Vlad</h3>
            <a href="tel:+380980225564">+38 098 022 55 64</a>
          </div>
        </li>
      )}
      <Link to={`${url}/aboutEvent/${id}`}>
        <li className="itemEvent itemEventCursor">
          <ul>
            <li className="containerPhoto">
              <img src={currentPhoto} alt={title} />
            </li>
            <li className="containerInfo">
              <h3>{title}</h3>
              <p>{place}</p>
            </li>
          </ul>
        </li>
      </Link>
    </>
  );
}

CardEvent.propTypes = {
  title: propTypes.string.isRequired,
  place: propTypes.string.isRequired,
  photo: propTypes.string.isRequired,
  extraButtons: propTypes.bool.isRequired,
  id: propTypes.number,
  index: propTypes.number,
};
