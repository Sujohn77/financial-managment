

import {UPDATE_DATA} from "../actions/chart";

export const initialState = {
    data:[]
};

export const chartReducer = (state = initialState,action ) => {
    switch(action.type){
        case UPDATE_DATA:
            return{
                ...state,
                data:action.data
            }
        default: return state;
    }
};

