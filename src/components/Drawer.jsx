import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import className from 'classnames';

class Drawer extends Component {
  static propTypes = {
    children: PropTypes.node,
    page: PropTypes.string.isRequired,
    link: PropTypes.shape({
      active: PropTypes.string,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      expanded: props.link.active === props.page,
    };
  }

  static getDerivedStateFromProps = props => {
    if (props.link.active === props.page) {
      return {
        expanded: true,
      };
    }
    return {
      expanded: false,
    };
  };

  render() {
    const { children } = this.props;
    const { expanded } = this.state;
    return <ul className={className(expanded ? 'expand' : 'compress', 'drawer')}>{children}</ul>;
  }
}

const mapStateToProps = state => ({
  link: state.link,
});

export default connect(mapStateToProps)(Drawer);
