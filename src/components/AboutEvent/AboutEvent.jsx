import React, { useState } from 'react';
import './AboutEvent.scss';
import Modal from '../shared/Modal';
import mockup from '../../mockup-photo.jpg';

export default function AboutEvent() {
  const [email, setEmail] = useState('');

  const changeInput = ({ target }) => {
    setEmail(target.value);
  };

  const preSubmit = evt => {
    evt.preventDefault();

    if (email.trim() === '') return alert('Ohhh... You have some empty label.');

    console.log(email);

    setEmail('');

    return null;
  };

  return (
    <Modal urlHandleClose="/events" stylesAbsoluteModal={false}>
      <div className="aboutEvent">
        <div className="aboutEventImage">
          <img src={mockup} alt="" />
        </div>
        <div className="aboutEventContent">
          <h2>title of event</h2>
          <ul className="aboutEventInfoList">
            <li>
              <span className="modal-grey-text">Place</span>
              <p className="information__place">online or place</p>
            </li>
            <li>
              <span className="modal-grey-text">Date</span>
              <p className="information__date">01.01.2022</p>
            </li>
            <li>
              <span className="modal-grey-text">Time</span>
              <p className="information__time">19:00</p>
            </li>
            <li>
              <span className="modal-grey-text">Author</span>
              <p className="information__author">VLAD</p>
            </li>
          </ul>
          <div className="aboutEventDetails">
            <h3>about the event</h3>
            <p>
              Four of the West’s most infamous outlaws assemble to steal a huge
              stash of gold from the most corrupt settlement of the gold rush
              towns. But not all goes to plan one is killed and the other three
              escapes with bags of gold hide out in the abandoned gold mine
              where they happen across another gang of three – who themselves
              were planning to hit the very same bank! As tensions rise, things
              go from bad to worse as they realise the bags of gold are filled
              with lead... they’ve been double crossed – but by who and how?
            </p>
          </div>
          <div className="aboutEventButtons">
            <form onSubmit={preSubmit}>
              <input
                type="text"
                name="email"
                value={email}
                onChange={changeInput}
                placeholder="YOUR EMAIL"
              />
              <button type="submit">i want go to event</button>
            </form>
            <div>
              <p>133 people signed up for the event</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
