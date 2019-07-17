import { CLICK_LINK, HOVER_LINK } from '../actions/Link';

const LinkReducer = (
  state = {
    active: '',
    hover: '',
  },
  action
) => {
  switch (action.type) {
    case CLICK_LINK:
      return {
        ...state,
        active: action.page,
      };
    case HOVER_LINK:
      return {
        ...state,
        hover: action.page,
      };
    default:
      return state;
  }
};

export default LinkReducer;
