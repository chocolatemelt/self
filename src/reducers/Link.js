import { CLICK_LINK, HOVER_LINK, OPEN_SIDE, CLOSE_SIDE } from '../actions/Link';

const LinkReducer = (
  state = {
    active: '',
    hover: '',
    opened: false,
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
    case OPEN_SIDE:
      return {
        ...state,
        opened: true,
      };
    case CLOSE_SIDE:
      return {
        ...state,
        opened: false,
      };
    default:
      return state;
  }
};

export default LinkReducer;
