import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  const loggerMiddleware = createLogger();

  const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware);

  const store = middleware(createStore)(rootReducer, preloadedState);

  // return createStore(
  //   rootReducer,
  //   preloadedState,
  //   applyMiddleware(thunkMiddleware, loggerMiddleware),
  // );
  return store;
}
