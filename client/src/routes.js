import React from "react";
import ListUsersContainer from "./containers/ListUsersContainer"
import UserHomeContainer from "./containers/UserHomeContainer"
import CostsContainer from "./containers/CostsContainer";
import AddExpenseContainer from "./containers/AddExpenseContainer";

export const routes = [
    {
        exact:true,
        path:"/",
        component:()=><ListUsersContainer/>
    },
    {
        path:"/profile",
        component:()=><UserHomeContainer/>
    },
    {
        path:"/costs",
        component:()=><CostsContainer/>
    },
    {
        path:"/addExpense",
        component:()=><AddExpenseContainer/>
    }
]