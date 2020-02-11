

import {ADD_USER,INIT_USERS,SET_USER} from "../actions/user";

export const initialState = {
    currentUser:null,
    users:[]
};

export const userReducer = (state = initialState,action ) => {
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                currentUser:action.newUser
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users,action.user],
            };
        
        case INIT_USERS: 
            return {
                ...state,
                users: action.users,
                currentUser: action.currentUser,
            }
        default: return state;
    }
};

