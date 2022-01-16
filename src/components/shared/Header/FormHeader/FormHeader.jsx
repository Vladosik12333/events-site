import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import "./FormHeader.scss";
import { actions, selectors } from "../../../../redux/events";

export default function FormHeader() {
  const dispatch = useDispatch();
  const filter = useSelector(state => selectors.getFilter(state));

  return (
    <form className="formHeader">
      <input
        type="text"
        name="search"
        placeholder="Search events"
        value={filter}
        onChange={({ target }) => dispatch(actions.filter(target.value))}
      />
      <button type="submit">
        <AiOutlineSearch />
      </button>
    </form>
  );
}
