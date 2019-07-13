import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import className from 'classnames';

import { hoverLink, clickLink } from '../actions/Link';

class HoverItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.bool,
    link: PropTypes.string,
    dispatch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  hover = () => {
    const { hover } = this.state;
    const { dispatch } = this.props;
    this.setState({ hover: !hover });
    dispatch(clickLink('xd'));
  };

  render() {
    const { hover } = this.state;
    const { children, href, link } = this.props;
    return (
      <li>
        <span
          className="link"
          onMouseEnter={this.hover}
          onMouseLeave={this.hover}
          style={{ cursor: 'pointer' }}
        >
          {href ? <a href={link}>{children}</a> : <Link to={link}>{children}</Link>}
        </span>
        {/* <div className={className(hover ? 'hover' : 'hide')}>{children}</div> */}
      </li>
    );
  }
}

export default connect()(HoverItem);
