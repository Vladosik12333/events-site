import React, { useState } from 'react';
import Modal from '../shared/Modal';
import './CreateEvent.scss';

export default function CreateEvent() {
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');
  const [author, setAuthor] = useState('');
  const [about, setAbout] = useState('');
  const [photo, setPhoto] = useState('');
  const [date, setDate] = useState('');

  const onChangeInput = ({ target }) => {
    const { value, name } = target;

    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'place':
        setPlace(value);
        break;
      case 'author':
        setAuthor(value);
        break;
      case 'about':
        setAbout(value);
        break;
      case 'photo':
        setPhoto(value);
        break;
      case 'date':
        setDate(value);
        break;
      default:
        return null;
    }

    return null;
  };

  const preSubmit = evt => {
    evt.preventDefault();

    if (
      title.trim() === '' ||
      place.trim() === '' ||
      author.trim() === '' ||
      about.trim() === '' ||
      photo.trim() === '' ||
      date.trim() === ''
    )
      return alert('Ohhh... You have some empty label.');

    console.log({ title, place, author, about, photo, date });

    setTitle('');
    setPlace('');
    setAuthor('');
    setAbout('');
    setPhoto('');
    setDate('');

    return null;
  };

  return (
    <Modal urlHandleClose="/cabinet" stylesAbsoluteModal>
      <div className="createEvent">
        <h2>Create event</h2>
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
          <button type="submit">create event</button>
        </form>
      </div>
    </Modal>
  );
}
