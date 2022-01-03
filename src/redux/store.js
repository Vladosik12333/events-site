import { configureStore } from '@reduxjs/toolkit';
import events from './events';

export default configureStore({
  reducer: events,
});
