import { createStore } from "redux";
import initialState from "./state";
import rootReducer from "./reducer";
const store = createStore(rootReducer, initialState);
export default store;
