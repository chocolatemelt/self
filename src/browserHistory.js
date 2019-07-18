import { createBrowserHistory } from 'history';

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
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
});

export default history;
