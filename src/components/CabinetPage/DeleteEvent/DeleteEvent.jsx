import "./DeleteEvent.scss";
import React from "react";
import Modal from "../../shared/Modal";

export default function DeleteEvent() {
  return (
    <Modal actionEvent stylesAbsoluteModal={false} urlHandleClose="/cabinet">
      <div className="deleteEvent">
        <p>Are you sure you want to delete the event ?</p>
        <div className="buttons">
          <button type="button" className="buttonAccept">
            Yes
          </button>
          <button type="button" className="buttonCancel">
            No
          </button>
        </div>
      </div>
    </Modal>
  );
}
