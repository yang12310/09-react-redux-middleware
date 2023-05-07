import { combineReducers } from '@reduxjs/toolkit';
import counter from './counter';
import posts from './posts';

const rootReducer = combineReducers({counter, posts});

export default rootReducer;