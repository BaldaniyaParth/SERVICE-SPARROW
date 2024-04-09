import { combineReducers } from "redux";
import signUpReducer from "./reducer/user.reducer";

const rootReducer = combineReducers({
  user: signUpReducer,
});

export default rootReducer;
