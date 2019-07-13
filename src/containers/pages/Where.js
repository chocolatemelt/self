import React from 'react';
import PropTypes from 'prop-types';

const Where = ({ history }) => (
  <div className="page where">
    <p>seems you've landed in uncharted territory</p>
    <p className="br">
      <button className="a" type="button">
        back
      </button>
    </p>
  </div>
);

Where.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number,
    action: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      key: PropTypes.string,
    }),
    goBack: PropTypes.func,
  }).isRequired,
};

export default Where;
