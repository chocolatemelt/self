import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class HoverItem extends Component {
  static propTypes = {
    hover: PropTypes.object.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    const {
      hover,
      top,
      left,
      text
    } = this.props;
    return(
      <li>{text}</li>
    )
  }
};
