

const SET_INITIALIZE = "SET_INITIALIZE";
const SET_STATE="SET_STATE";

export const initialState = {
    initialized:false
};

export const appReducer = (state = initialState,action ) => {
    switch(action.type){
        case SET_INITIALIZE:
            return {
                ...state,
                initialized: true,
            };
        case SET_STATE: return action.state
            
        default: return state;
    }

};

export let setInitialize = () =>({type: SET_INITIALIZE});
