// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import themeConfigSlice from './themeConfigSlice';
import artworkReducer from './artworkSlice';
import projectReducer from './projectSlice';

const rootReducer = combineReducers({
  user: userReducer,
  themeConfig: themeConfigSlice,
  artworkDetails: artworkReducer,
   project: projectReducer,
});

export default rootReducer;
