import { createStore } from "redux";
import counteReducer from "./Reducer";

const store = createStore(counteReducer);

export default store;