import { combineReducers } from "redux";

import authReducer from "./authReducer";
import itemsReducer from "./itemsReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  auth: authReducer,
  items: itemsReducer,
  category: categoryReducer,
});
