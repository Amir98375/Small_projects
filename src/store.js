import { legacy_createStore as createStore, combineReducers, applyMiddleware ,compose } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./Redux/Reducer";
const composeEnhancer=window.REDUX_DEV_TOOLS_EXTENSION_COMPOSE||compose

const root = combineReducers({
counter:counterReducer
})

export const store = createStore(root,composeEnhancer(applyMiddleware(thunk)))

console.log(store.getState(),"<=store")