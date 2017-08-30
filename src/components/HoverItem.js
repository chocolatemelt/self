import React, {Component} from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

export default class HoverItem extends Component {
  static propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  hover = () => {
    this.setState({hover: !this.state.hover});
  }

  render() {
    const {
      children,
      top,
      left,
      text
    } = this.props;
    return(
      <li>
        <span onMouseEnter={this.hover} onMouseLeave={this.hover}>{text}</span>
        <div className={className((this.state.hover) ? "hover" : "hide")}
             style={{top: `${top}em`, left: `${left}em`}}>
          {children}
        </div>
      </li>
    )
  }
};
