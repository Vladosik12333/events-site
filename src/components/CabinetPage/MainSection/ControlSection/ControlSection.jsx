import React from "react";
import "./ControlSection.scss";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Template from "../../../Template";
import { selectors, actions } from "../../../../redux/users";

export default function ControlSection() {
  const { url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const name = useSelector(state => selectors.getCurrentUserName(state));

  const onExit = () => {
    dispatch(actions.changeUserName(""));
    dispatch(actions.changeUserId(null));
    history.push("/events");
  };

  return (
    <section className="controlSection">
      <Template>
        <div className="containerControl">
          <h2>{`Hello, ${name}!`}</h2>
          <button onClick={onExit} type="button">
            Exit
          </button>
        </div>
        <div className="containerButton">
          <Link to={`${url}/createEvent`}>Create event</Link>
        </div>
        <div className="containerInfo">
          <p>In the future will be more...</p>
        </div>
      </Template>
    </section>
  );
}
