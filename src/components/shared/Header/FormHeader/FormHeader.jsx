import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import './FormHeader.scss';
import { actions } from '../../../../redux/events';

export default function FormHeader() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();

    dispatch(actions.filter(value));
    setValue('');
  };

  return (
    <form className="formHeader" onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search events"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <button type="submit">
        <AiOutlineSearch />
      </button>
    </form>
  );
}
