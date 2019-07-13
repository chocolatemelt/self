import React from 'react';
import PropTypes from 'prop-types';

const bunsetsu = [
  "seems you've landed in uncharted territory",
  '404',
  'where am i',
  'lost?',
  'dead end',
  'take a u-turn',
];

const rng = () => bunsetsu[Math.floor(Math.random() * bunsetsu.length)];

const Where = ({ history }) => (
  <div className="page where">
    <p>{rng()}</p>
    <p className="br">
      <button className="a" type="button" onClick={() => history.goBack()}>
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
