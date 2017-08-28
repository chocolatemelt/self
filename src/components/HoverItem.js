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
      hover: false
    };
  }

  render() {
    const {
      children,
      top,
      left,
      text
    } = this.props;
    return(
      <li onMouseOver={() => {console.log("x")}}>
        {text}
        <div className="hover" style={{top: "2em"}}>
          {children}
        </div>
      </li>
    )
  }
};
