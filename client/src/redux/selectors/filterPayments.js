import { createSelector } from 'reselect'

const currentUserPayments = (profile) =>{
    return profile.categories.filter((c) => c.name === profile.selectedCategory)
}

export const filterPayments = createSelector(
    currentUserPayments,
    (user,category) => user.categories.map((c => c.name === category))
)