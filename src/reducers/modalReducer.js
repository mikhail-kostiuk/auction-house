import * as actionTypes from "../actions/actionTypes";

const initialState = {
  signUpModalOpen: false,
  signInModalOpen: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_SIGNUP_MODAL:
      return {
        ...state,
        signUpModalOpen: true,
        signInModalOpen: false,
      };
    case actionTypes.OPEN_SIGNIN_MODAL:
      return {
        ...state,
        signUpModalOpen: false,
        signInModalOpen: true,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        signUpModalOpen: false,
        signInModalOpen: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
