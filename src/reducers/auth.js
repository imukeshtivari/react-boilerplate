import { combineReducers } from "redux";
import actionTypes from "../actions";

// ======================================================================================
/*
 * Reducer to store logged in user 's token
 */

export const data = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SAVE_OAUTH_TOKEN:
      return action.token;
    case actionTypes.DELETE_OAUTH_TOKEN:
      return null;
    default:
      return state;
  }
};

// ======================================================================================

export default {
  auth: combineReducers({
    data
  })
};
