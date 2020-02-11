import { createSelector } from 'reselect'

 const filterCategory = (profile) =>{

    return profile.categories.filter((c) => c.name === profile.currentCategory);
}

export const getNamesCategories = (profile) =>{
    return profile.categories.map((c) => c.name)
}

export const filterPayments = createSelector(
    filterCategory,
    (category) => {

        return (category.length)? category[0].expenses:null;
    }
)

export const getAllExpenses = (profile) =>{
    let expenses = [];
   
    profile.categories.forEach(category => {
        if(category.expenses){
            expenses.push(...category.expenses)
        }
    });

    return expenses;
}
