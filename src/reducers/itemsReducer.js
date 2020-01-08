import * as actionTypes from "../actions/actionTypes";

const initialState = {
  favorites: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case actionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case actionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
