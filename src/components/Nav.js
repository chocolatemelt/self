import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { hoverLink } from '../actions/Link';

class Nav extends Component {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.bool,
    link: PropTypes.string,
    page: PropTypes.string.isRequired,
    dispatch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  onHover = page => {
    const { hover } = this.state;
    const { dispatch } = this.props;
    this.setState({ hover: !hover });
    dispatch(hoverLink(page));
  };

  render() {
    const { children, href, link, page } = this.props;
    return (
      <li>
        <span
          className="link"
          onMouseEnter={() => this.onHover(page)}
          onMouseLeave={() => this.onHover('')}
          style={{ cursor: 'pointer' }}
        >
          {href ? <a href={link}>{children}</a> : <Link to={link}>{children}</Link>}
        </span>
        {/* <div className={className(hover ? 'hover' : 'hide')}>{children}</div> */}
      </li>
    );
  }
}

export default connect()(Nav);
