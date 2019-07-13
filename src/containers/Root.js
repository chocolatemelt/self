import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './Main';

const Root = props => {
  const { store } = props;
  return (
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
