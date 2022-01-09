import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './ContainerHeader.scss';

export default function ContainerHeader() {
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
            <NavLink to="/cabinet" activeClassName="currentHeader">
              My cabinet
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
