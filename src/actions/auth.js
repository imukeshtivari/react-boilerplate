// actions for registration.
export const REQUEST_REGISTER = "REQUEST_REGISTER";
export const SUCCESS_REGISTER = "SUCCESS_REGISTER";
export const ERROR_REGISTER = "ERROR_REGISTER";

// actions for login.
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const ERROR_LOGIN = "ERROR_LOGIN";

// action for saving the token.
export const SAVE_OAUTH_TOKEN = "SAVE_OAUTH_TOKEN";

// action creator for saving the token with token
export function saveAuthToken(token) {
  return (dispatch) => {
    return dispatch({
      type: SAVE_OAUTH_TOKEN,
      token
    });
  };
}

// action for deleting the token.
export const DELETE_OAUTH_TOKEN = "DELETE_OAUTH_TOKEN";

// action creator for deleting the token.
export function deleteAuthToken() {
  return (dispatch) => {
    return dispatch({ type: DELETE_OAUTH_TOKEN });
  };
}
