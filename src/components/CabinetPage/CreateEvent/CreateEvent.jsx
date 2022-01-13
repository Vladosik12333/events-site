import "./CreateEvent.scss";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ExtraModal from "../../shared/ExtraModal";
import { eventsAPI } from "../../../redux/services";
import { selectors } from "../../../redux/users";

export default function CreateEvent() {
  const history = useHistory();
  const id = useSelector(state => selectors.getCurrentUserId(state));
  const [addEvent, { data, isSuccess, isError, error }] =
    eventsAPI.useAddEventMutation();

  const onSubmit = info => {
    addEvent({ ...info, founder: id });
  };

  useEffect(() => {
    if (isSuccess) {
      if (data.message === "Event Created") {
        alert("Event created");
        history.push("/cabinet");
        return null;
      }

      if (data.message === "Data too long for column 'title' at row 1") {
        alert("The title must be up to 27 characters long.");
        return null;
      }

      if (data.message === "Data too long for column 'place' at row 1") {
        alert("The place must be up to 35 characters long.");
        return null;
      }

      if (data.message === "Data too long for column 'author' at row 1") {
        alert("The author must be up to 30 characters long.");
        return null;
      }

      if (data.message === "Data too long for column 'about' at row 1") {
        alert("The about must be up to 500 characters long.");
        return null;
      }

      if (data.message === "Data too long for column 'photo' at row 1") {
        alert("The photo must be up to 200 characters long.");
        return null;
      }

      alert("null");
      return null;
    }
    if (isError)
      return alert(`Ooops... We have unkwon error: ${error.message}`);

    return null;
  }, [isSuccess, isError]);

  return <ExtraModal onSubmit={onSubmit} actionEvent />;
}
