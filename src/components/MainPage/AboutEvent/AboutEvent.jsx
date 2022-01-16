import React, { useState, useEffect } from "react";
import "./AboutEvent.scss";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";
import Modal from "../../shared/Modal";
import mockup from "../../../mockup-photo.jpg";
import { eventsAPI } from "../../../redux/services";

export default function AboutEvent() {
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const { data, isError, error, isLoading } =
    eventsAPI.useGetEventByIdQuery(id);
  const [
    counter,
    {
      isError: isErrorCounter,
      isSuccess: isSuccessCounter,
      error: errorCounter,
    },
  ] = eventsAPI.useCounterMutation();

  useEffect(() => {
    if (isSuccessCounter) toast.success("You are registered for the event.");

    if (isErrorCounter)
      toast.error(`Oooops... We have unknwon error: ${errorCounter.message}.`);
  }, [isSuccessCounter, isErrorCounter]);

  const changeInput = ({ target }) => {
    setEmail(target.value);
  };

  const preSubmit = evt => {
    evt.preventDefault();

    if (email.trim() === "")
      return toast.error("Ohhh... You have some empty label.");

    counter(id);
    setEmail("");

    return null;
  };

  if (isError) {
    return toast.error(`Oooops... We have unknwon error: ${error.message}.`);
  }

  return (
    <>
      <Modal urlHandleClose="/events">
        {!isLoading ? (
          <div className="aboutEvent">
            <div className="aboutEventImage">
              <img
                src={data.photo === "" ? mockup : data.photo}
                alt={data.title}
              />
            </div>
            <div className="aboutEventContent">
              <h2>{data.title}</h2>
              <ul className="aboutEventInfoList">
                <li>
                  <span className="modal-grey-text">Place</span>
                  <p className="information__place">{data.place}</p>
                </li>
                <li>
                  <span className="modal-grey-text">Date</span>
                  <p className="information__date">
                    {moment(data.date).format("DD.MM.YYYY")}
                  </p>
                </li>
                <li>
                  <span className="modal-grey-text">Time</span>
                  <p className="information__time">
                    {moment(data.date).format("HH:mm")}
                  </p>
                </li>
                <li>
                  <span className="modal-grey-text">Author</span>
                  <p className="information__author">{data.author}</p>
                </li>
              </ul>
              <div className="aboutEventDetails">
                <h3>about the event</h3>
                <p>{data.about}</p>
              </div>
              <div className="aboutEventButtons">
                <form onSubmit={preSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={changeInput}
                    placeholder="YOUR EMAIL"
                  />
                  <button type="submit" disabled={isSuccessCounter}>
                    i want go to event
                  </button>
                </form>
                <div>
                  <p>{`${data.member} people signed up for the event`}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </Modal>
      <Toaster position="bottom-right" />
    </>
  );
}
