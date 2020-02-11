import {createStore, applyMiddleware} from "redux";

import {reducers} from "./combineReducers";
import {fileSaveMiddleWare} from "./middleWares/fileSaveMiddleware";
let store = createStore(reducers, applyMiddleware(fileSaveMiddleWare));

window.store = store;

export default store;