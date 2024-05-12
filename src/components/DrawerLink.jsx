import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { clickLink } from '../actions/Link';

class DrawerLink extends Component {
  static propTypes = {
    children: PropTypes.node,
    page: PropTypes.string.isRequired,
    link: PropTypes.shape({
      active: PropTypes.string.isRequired,
    }).isRequired,
    dispatch: PropTypes.func,
  };

  onClick = page => {
    const { link, dispatch } = this.props;
    if (link.active !== page) {
      dispatch(clickLink(page));
    } else {
      dispatch(clickLink(''));
    }
  };

  render() {
    const { children, page } = this.props;
    return (
      <button
        type="button"
        className="a"
        onClick={() => this.onClick(page)}
        onKeyDown={() => this.onClick(page)}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </button>
    );
  }
}

const mapStateToProps = state => ({
  link: state.link,
});

export default connect(mapStateToProps)(DrawerLink);
