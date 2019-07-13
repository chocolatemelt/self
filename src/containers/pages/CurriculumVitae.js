import React from 'react';
import PropTypes from 'prop-types';

const CurriculumVitae = ({ history }) => (
  <div className="page cv">
    <p>omegalol</p>
    <p className="br">
      <button className="a" type="button" onClick={() => history.goBack()}>
        back
      </button>
    </p>
  </div>
);

CurriculumVitae.propTypes = {
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

export default CurriculumVitae;
