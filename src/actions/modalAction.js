import * as actionTypes from "./actionTypes";

export const openSignUpModal = () => {
  return dispatch => {
    dispatch({ type: actionTypes.OPEN_SIGNUP_MODAL });
  };
};

export const openSignInModal = () => {
  return dispatch => {
    dispatch({ type: actionTypes.OPEN_SIGNIN_MODAL });
  };
};

export const closeModal = () => {
  return dispatch => {
    dispatch({ type: actionTypes.CLOSE_MODAL });
  };
};
