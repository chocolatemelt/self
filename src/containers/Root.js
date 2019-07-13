import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Main from './Main';

const Root = props => {
  const { store } = props;
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
