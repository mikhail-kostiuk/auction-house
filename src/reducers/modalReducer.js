import * as actionTypes from "../actions/actionTypes";

const initialState = {
  signUpModalOpen: false,
  signInModalOpen: false,
  addFundsModalOpen: false,
  withdrawFundsModalOpen: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_SIGNUP_MODAL:
      return {
        ...state,
        signUpModalOpen: true,
        signInModalOpen: false,
        addFundsModalOpen: false,
        withdrawFundsModalOpen: false,
      };
    case actionTypes.OPEN_SIGNIN_MODAL:
      return {
        ...state,
        signUpModalOpen: false,
        signInModalOpen: true,
        addFundsModalOpen: false,
        withdrawFundsModalOpen: false,
      };
    case actionTypes.OPEN_ADD_FUNDS_MODAL:
      return {
        ...state,
        signUpModalOpen: false,
        signInModalOpen: false,
        addFundsModalOpen: true,
        withdrawFundsModalOpen: false,
      };
    case actionTypes.OPEN_WITHDRAW_FUNDS_MODAL:
      return {
        ...state,
        signUpModalOpen: false,
        signInModalOpen: false,
        addFundsModalOpen: false,
        withdrawFundsModalOpen: true,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        signUpModalOpen: false,
        signInModalOpen: false,
        addFundsModalOpen: false,
        withdrawFundsModalOpen: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
