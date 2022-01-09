import React from "react";
import "./ControlSection.scss";
import { Link, useRouteMatch } from "react-router-dom";
import Template from "../../../Template";

export default function ControlSection() {
  const { url } = useRouteMatch();

  return (
    <section className="controlSection">
      <Template>
        <div className="containerControl">
          <h2>Hello, Vlad!</h2>
          <button type="button">Exit</button>
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
