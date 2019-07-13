import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import './css/reset.css';
import './css/index.css';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('main'));

registerServiceWorker();
