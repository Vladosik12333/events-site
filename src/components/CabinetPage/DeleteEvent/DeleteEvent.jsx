import "./DeleteEvent.scss";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Modal from "../../shared/Modal";
import { eventsAPI } from "../../../redux/services";

export default function DeleteEvent() {
  const { id } = useParams();
  const history = useHistory();

  const [deleteEvent, { isSuccess, error, isError }] =
    eventsAPI.useDeleteEventMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Event deleted.");
      history.push("/cabinet");
      return null;
    }

    if (isError) {
      toast.error(`Ooops... We have unknwon error: ${error.message}.`);
    }

    return null;
  }, [isSuccess, isError]);

  const onDeleteEvent = () => {
    deleteEvent(id);
  };

  const onCloseModal = () => {
    history.push("/cabinet");
  };

  return (
    <>
      <Modal actionEvent stylesAbsoluteModal={false} urlHandleClose="/cabinet">
        <div className="deleteEvent">
          <p>Are you sure you want to delete the event ?</p>
          <div className="buttons">
            <button
              onClick={onDeleteEvent}
              type="button"
              className="buttonAccept"
            >
              Yes
            </button>
            <button
              onClick={onCloseModal}
              type="button"
              className="buttonCancel"
            >
              No
            </button>
          </div>
        </div>
      </Modal>
      <Toaster position="bottom-right" />
    </>
  );
}
