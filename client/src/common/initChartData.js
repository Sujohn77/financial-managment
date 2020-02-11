export const initData = profile => {
  const data = [];

  profile.categories.forEach(category => {
    let expenseCounter = 0;;
    if(category.expenses.length) {
        category.expenses.forEach((exp) => {expenseCounter += exp.price;});
    }
    data.push({ name: category.name, y: expenseCounter || 0 });
  });

  return data;
};
