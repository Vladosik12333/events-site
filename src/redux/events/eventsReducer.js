import { createReducer } from '@reduxjs/toolkit';
import { actions } from './index';

const filter = createReducer('', {
  [actions.filter]: (_, payload) => payload,
});

export default filter;
