import { FETCH_CITY } from "../actions/user";

let initialState = {
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY:
      return { user: action.data };
    default:
      return state;
  }
};
