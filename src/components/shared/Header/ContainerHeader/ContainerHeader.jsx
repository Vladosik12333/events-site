import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./ContainerHeader.scss";
import { useSelector } from "react-redux";
import { selectors } from "../../../../redux/users";

export default function ContainerHeader() {
  const status = useSelector(state => selectors.getCurrentUserId(state));

  return (
    <div className="containerHeader">
      <h1>
        <Link to="/">Events.ua</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/events" activeClassName="currentHeader">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to={status ? "/cabinet" : "/events/authorization"}
              activeClassName="currentHeader"
            >
              My cabinet
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
