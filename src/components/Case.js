import React from 'react';
import PropTypes from 'prop-types';

const Case = ({ children }) => <div className="case">{children}</div>;

Case.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Case;
