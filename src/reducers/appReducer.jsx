import { combineReducers } from 'redux';
import searchReducer from './searchReducer.jsx';

const appReducer = combineReducers({
  search: searchReducer,
});

export default appReducer;