import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class HoverItem extends Component {
  static propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      hover: true
    };
  }

  hover = () => {
    this.setState({hover: !this.state.hover});
    console.log(this.state.hover);
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
        <div className="hover" style={{top: "2em"}}>
          {children}
        </div>
      </li>
    )
  }
};
