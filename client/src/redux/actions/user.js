export const ADD_USER = "ADD_USER";
export const INIT_USERS = "INIT_USERS";
export const ADD_EXPENSE = "ADD_EXPENSE"
export const SET_USER = "SET_USER"
export const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY"
export const INIT_PROFILE="INIT_PROFILE";
export const CREATE_CATEGORY="CREATE_CATEGORY";

export let initUsers = (user) =>({type: INIT_USERS,users:user.users,currentUser:user.currentUser});
export let setCurrentUser = (newUser) =>({type: SET_USER,newUser});
export let addPayment = (expense) =>({type: ADD_EXPENSE,expense});
export let addUser = (user) =>({type: ADD_USER,user});
export let setCurrentCategory = (category) =>({type: SET_CURRENT_CATEGORY,category});
export let createCategory = (category) =>({type: CREATE_CATEGORY,category});
export let initProfile = (categories,currentCategory=null) => ({type: INIT_PROFILE,payload: {categories,currentCategory}});