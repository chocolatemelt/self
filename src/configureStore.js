import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  const loggerMiddleware = createLogger();
  const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware);
  const store = middleware(createStore)(
    rootReducer,
    preloadedState,
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
  );

  return store;
}
