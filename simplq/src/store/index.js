import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import queuesReducer from 'store/queues';
import queueStatusReducer from 'store/queueStatus';
import actionStatusReducer from 'store/actionStatus';
import appReducer from './appSlice';

export const rootReducer = combineReducers({
  appReducer,
  queues: queuesReducer,
  queueStatus: queueStatusReducer,
  actionStatus: actionStatusReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Ignore auth in async thunks
      ignoredActionPaths: ['meta.arg.auth'],
    },
  }),
});