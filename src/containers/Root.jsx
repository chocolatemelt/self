import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'

import history from '../browserHistory';
import CustomRouter from './CustomRouter';
import Main from './Main';

const Root = props => {
  const { store } = props;
  return (
    <Provider store={store}>
      <CustomRouter history={history}>
        <Main />
      </CustomRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
