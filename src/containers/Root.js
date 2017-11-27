import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import Main from "./Main";

const Root = props => (
	<Provider store={props.store}>
		<Main />
	</Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
