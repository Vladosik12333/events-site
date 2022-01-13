import React, { useState } from "react";
import propTypes from "prop-types";
import moment from "moment";
import Modal from "../Modal";
import "./ExtraModal.scss";

export default function ExtraModal({ actionEvent, infoForEvent, onSubmit }) {
  const [title, setTitle] = useState(infoForEvent?.title ?? "");
  const [place, setPlace] = useState(infoForEvent?.place ?? "");
  const [author, setAuthor] = useState(infoForEvent?.author ?? "");
  const [about, setAbout] = useState(infoForEvent?.about ?? "");
  const [photo, setPhoto] = useState(infoForEvent?.photo ?? "");
  const [date, setDate] = useState(
    infoForEvent?.date ?? false
      ? moment(infoForEvent?.date).format("YYYY-MM-DDTHH:mm")
      : "",
  );

  const onChangeInput = ({ target }) => {
    const { value, name } = target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "place":
        setPlace(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "about":
        setAbout(value);
        break;
      case "photo":
        setPhoto(value);
        break;
      case "date":
        setDate(value);
        break;
      default:
        return null;
    }

    return null;
  };

  const preSubmit = evt => {
    evt.preventDefault();

    if (moment(date).fromNow().includes("ago"))
      return alert("The event cannot be in the past tense.");

    if (
      title.trim() === "" ||
      place.trim() === "" ||
      author.trim() === "" ||
      about.trim() === "" ||
      date.trim() === ""
    )
      return alert("Ohhh... You have some empty label.");

    onSubmit({ title, place, author, about, photo, date });

    return null;
  };

  return (
    <Modal urlHandleClose="/cabinet">
      <div className="createEvent">
        <h2>{actionEvent ? "Create" : "Edit"} event</h2>
        <form onSubmit={preSubmit} className="createEventForm">
          <label htmlFor="title">
            Title of event
            <input
              name="title"
              value={title}
              type="text"
              id="title"
              onChange={onChangeInput}
            />
          </label>
          <label htmlFor="place">
            Place of event
            <input
              name="place"
              value={place}
              type="text"
              id="place"
              onChange={onChangeInput}
            />
          </label>
          <label htmlFor="author">
            Author of event
            <input
              name="author"
              value={author}
              type="text"
              id="author"
              onChange={onChangeInput}
            />
          </label>
          <label htmlFor="about">
            About of event
            <textarea
              name="about"
              value={about}
              id="about"
              onChange={onChangeInput}
            />
          </label>
          <label htmlFor="date">
            Date and time of event
            <input
              name="date"
              value={date}
              type="datetime-local"
              id="date"
              placeholder="12-01-2021 12:00"
              onChange={onChangeInput}
            />
          </label>
          <label htmlFor="photo">
            URL photo of event (only 280x400)
            <input
              name="photo"
              value={photo}
              type="text"
              id="photo"
              onChange={onChangeInput}
            />
          </label>
          <button type="submit">{actionEvent ? "create" : "edit"} event</button>
        </form>
      </div>
    </Modal>
  );
}

ExtraModal.propTypes = {
  actionEvent: propTypes.bool.isRequired,
  onSubmit: propTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  infoForEvent: propTypes.object,
};
