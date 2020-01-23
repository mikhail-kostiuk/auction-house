import { combineReducers } from "redux";

import authReducer from "./authReducer";
import modalReducer from "./modalReducer";
import categoryReducer from "./categoryReducer";
import fundsReducer from "./fundsReducer";

export default combineReducers({
  auth: authReducer,
  modal: modalReducer,
  category: categoryReducer,
  funds: fundsReducer,
});
