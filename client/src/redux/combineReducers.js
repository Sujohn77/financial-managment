
import {combineReducers} from "redux";

import {appReducer} from "./reducers/app-reducer";
import {userReducer} from "./reducers/user-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {chartReducer} from "./reducers/chart-reducer";

export const reducers = combineReducers({
    app:appReducer,
    user:userReducer,
    profile:profileReducer,
    chart:chartReducer
});