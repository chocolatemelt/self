import { HOVER_LINK, CLICK_LINK } from '../actions/Link';

const LinkReducer = (
  state = {
    activeHover: '',
    activePage: '',
  },
  action,
) => {
  switch (action.type) {
    case HOVER_LINK:
      return {
        ...state,
        activeHover: action.text,
      };
    case CLICK_LINK:
      return {
        ...state,
        activePage: action.page,
      };
    default:
      return state;
  }
};

export default LinkReducer;
