import * as actionTypes from "./actionTypes";

export const loginUser = userData => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_CURRENT_USER, payload: userData });
  };
};

export const logoutUser = () => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_CURRENT_USER, payload: null });
  };
};
