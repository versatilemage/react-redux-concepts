import { createStore, combineReducers } from "redux";
import { initialReducer, IcecreamReducer } from "../reducres";

const rootReducer = combineReducers({
    initial: initialReducer,
    Icecream: IcecreamReducer
})
const store = createStore(rootReducer);//store takes reducer as a parameter
export default store;
