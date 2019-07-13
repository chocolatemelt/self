import { HOVER_LINK } from '../actions/Link';

const LinkReducer = (
  state = {
    active: '',
  },
  action
) => {
  switch (action.type) {
    case HOVER_LINK:
      return {
        ...state,
        active: action.page,
      };
    default:
      return state;
  }
};

export default LinkReducer;
