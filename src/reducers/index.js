import { combineReducers } from 'redux';
import LinkReducer from './Link';

const rootReducer = combineReducers({
  page: LinkReducer,
});

export default rootReducer;
