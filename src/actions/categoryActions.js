import * as actionTypes from "./actionTypes";

export const setCategories = categories => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_CATEGORIES, payload: categories });
  };
};
