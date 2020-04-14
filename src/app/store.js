import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/reducer/reducer.js';

export default configureStore({
  reducer: {
    pets: reducer,
  },
});
