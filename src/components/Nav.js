import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { clickLink, hoverLink } from '../actions/Link';

class Nav extends Component {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
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

  onClick = page => {
    const { dispatch } = this.props;
    dispatch(clickLink(page));
  };

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
        <button
          type="button"
          className="a"
          onMouseEnter={() => this.onHover(page)}
          onMouseLeave={() => this.onHover('')}
          onClick={() => this.onClick(page)}
          onKeyUp={() => this.onClick(page)}
          style={{ cursor: 'pointer' }}
        >
          {href && <a href={href}>{children}</a>}
          {link && <Link to={link}>{children}</Link>}
          {!href && !link && children}
        </button>
        {/* <div className={className(hover ? 'hover' : 'hide')}>{children}</div> */}
      </li>
    );
  }
}

export default connect()(Nav);
