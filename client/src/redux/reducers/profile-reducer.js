

import {ADD_EXPENSE,SET_CURRENT_CATEGORY,INIT_PROFILE,CREATE_CATEGORY} from "../actions/user";

export const initialState = {
    currentCategory:null,
    categories:[
        {
            name:"Продукты",
            expenses:[]
        },
        {
            name:"Транспорт",
            expenses:[]
        },
        {
            name:"Развлечение",
            expenses:[]
        },
        {
            name:"Отдых",
            expenses:[]
        },
        {
            name:"Здоровье",
            expenses:[]
        },
        {
            name:"Одежда",
            expenses:[]
        }
    ]
};

export const profileReducer = (state = initialState,action ) => {
    switch(action.type){
        case INIT_PROFILE:
            return{
                ...state,
                categories:action.payload.categories,
                currentCategory:action.payload.currentCategory,
            }
        case ADD_EXPENSE:
            return {
                ...state,
                categories:state.categories.map((category)=>{
                    debugger
                    if(category.name===state.currentCategory){
                        category.expenses.push(action.expense);
                    }
                    return category;
                })
            }
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory:action.category
            }
        case CREATE_CATEGORY: 
            return {
                ...state,
                categories: [...state.categories,action.category]
            } 
        default: return state;
    }
};

