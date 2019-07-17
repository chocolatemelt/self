import { combineReducers } from 'redux';
import LinkReducer from './Link';

const rootReducer = combineReducers({
  link: LinkReducer,
});

export default rootReducer;
