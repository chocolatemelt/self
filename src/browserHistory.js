import { createBrowserHistory } from 'history';

import store from './configureStore';
import { closeSide } from './actions/Link';

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const getWidth = () => {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
};

const history = createBrowserHistory();
let prev = '';
history.listen(async location => {
  // return to top if pushing new path
  // 115 compensates for what seems like possible timing mismatch on the browser
  if (location.pathname !== prev) {
    await sleep(115);
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }
  prev = location.pathname;

  // for mobile, push the CLOSE_SIDE action whenever we navigate to new page
  // technically we can do this regardless of being mobile or not, but better not pollute the
  // redux history if possible
  if (getWidth() <= 767) {
    store.dispatch(closeSide());
  }
});

export default history;
