import React from 'react';
import PropTypes from 'prop-types';

const CVHead = ({ left, right }) => (
  <div className="cvhead">
    <h4 className="left">{left}</h4>
    <h4 className="right">{right}</h4>
  </div>
);

CVHead.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
};

export default CVHead;
