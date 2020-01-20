import { combineReducers } from "redux";

import authReducer from "./authReducer";
import modalReducer from "./modalReducer";
import itemsReducer from "./itemsReducer";
import categoryReducer from "./categoryReducer";
import fundsReducer from "./fundsReducer";

export default combineReducers({
  auth: authReducer,
  modal: modalReducer,
  items: itemsReducer,
  category: categoryReducer,
  funds: fundsReducer,
});
