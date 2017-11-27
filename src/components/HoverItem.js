import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import className from "classnames";

import { hoverLink, clickLink } from "../actions/Link";

class HoverItem extends Component {
		static propTypes = {
			children: PropTypes.node,
			page: PropTypes.string,
			text: PropTypes.string.isRequired,
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
			this.setState({ hover: !this.state.hover });
			this.props.dispatch(clickLink("xd"));
		}

		render() {
			const {
				children,
				page,
				text,
				link,
			} = this.props;
			return (
				<li>
					<span
						className="link"
						onMouseEnter={this.hover}
						onMouseLeave={this.hover}
						style={{ cursor: "pointer" }}
					>
						{link ? (
							<a href={link}>{text}</a>
						) : (
							text
						)}
					</span>
					<div className={className((this.state.hover) ? "hover" : "hide")}>
						{children}
					</div>
				</li>
			);
		}
}

export default connect()(HoverItem);
