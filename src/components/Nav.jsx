import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hoverLink } from '../actions/Link';

class Nav extends Component {
  static propTypes = {
    children: PropTypes.node,
    page: PropTypes.string.isRequired,
    dispatch: PropTypes.func,
  };

  onHover = page => {
    const { dispatch } = this.props;
    dispatch(hoverLink(page));
  };

  render() {
    const { children, page } = this.props;
    return (
      <li>
        <span
          className="link"
          onMouseEnter={() => this.onHover(page)}
          onMouseLeave={() => this.onHover('')}
        >
          {children}
        </span>
      </li>
    );
  }
}

export default connect()(Nav);
