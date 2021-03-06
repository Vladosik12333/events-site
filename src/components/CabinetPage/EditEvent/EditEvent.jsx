import "./EditEvent.scss";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import ExtraModal from "../../shared/ExtraModal";
import { eventsAPI } from "../../../redux/services";
import Modal from "../../shared/Modal";

export default function CreateEvent() {
  const history = useHistory();
  const { id } = useParams();
  const {
    data: dataGet,
    isError: isErrorGet,
    error: errorGet,
    isSuccess: isSuccessGet,
  } = eventsAPI.useGetEventByIdQuery(id);
  const [changeEvent, { data, isSuccess, isError, error }] =
    eventsAPI.useChangeEventMutation();

  useEffect(() => {
    if (isSuccess) {
      if (data.message === "Event Updated") {
        toast.success("Event changed.");
        history.push("/cabinet");
        return null;
      }

      if (data.message === "Data too long for column 'title' at row 1") {
        toast.error("The title must be up to 27 characters long.");
        return null;
      }

      if (data.message === "Data too long for column 'place' at row 1") {
        toast.error("The place must be up to 35 characters long.");
        return null;
      }

      if (data.message === "Data too long for column 'author' at row 1") {
        toast.error("The author must be up to 30 characters long.");
        return null;
      }

      if (data.message === "Data too long for column 'about' at row 1") {
        toast.error("The about must be up to 500 characters long.");
        return null;
      }

      if (data.message === "Data too long for column 'photo' at row 1") {
        toast.error("The photo must be up to 200 characters long.");
        return null;
      }

      return null;
    }

    if (isError)
      return toast.error(`Ooops... We have unkwon error: ${error.message}.`);

    return null;
  }, [isError, isSuccess]);

  const onSubmit = info => {
    changeEvent({ ...info, id });
  };

  if (isErrorGet)
    toast.error(`Ooops... We have unknwon error: ${errorGet.message}.`);

  return (
    <>
      {!isSuccessGet ? (
        <Modal urlHandleClose="/cabinet">
          <h1>Loading...</h1>
        </Modal>
      ) : (
        <ExtraModal
          onSubmit={onSubmit}
          actionEvent={false}
          infoForEvent={{
            title: dataGet?.title,
            about: dataGet?.about,
            photo: dataGet?.photo,
            author: dataGet?.author,
            place: dataGet?.place,
            date: dataGet?.date,
          }}
        />
      )}
      <Toaster position="bottom-right" />
    </>
  );
}
