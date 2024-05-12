import React from 'react';
import PropTypes from 'prop-types';

const CaseHead = ({ title, sibling, subheading, comma }) => (
  <div className="casehead">
    <h2>
      <i>{title}</i>
      {sibling && comma && ','} {sibling}
    </h2>
    {subheading && <h3>{subheading}</h3>}
  </div>
);

CaseHead.propTypes = {
  title: PropTypes.node.isRequired,
  sibling: PropTypes.node,
  subheading: PropTypes.node,
  comma: PropTypes.bool,
};

CaseHead.defaultProps = {
  comma: true,
};

export default CaseHead;
