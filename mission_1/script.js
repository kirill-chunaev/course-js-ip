let money = prompt('Ваш бюджет на месяц?', 5000);
let time = prompt('Введите дату в формате YYYY-MM-DD', '2020-02-04');
let appData = {
  manthBudget: +money,
  dataTime: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
}
let dayBudget = appData.manthBudget;
let quantityRepeat = 2;
for (var i=0; i<quantityRepeat; i++ ) {
  let nameSpending = prompt('Введите обязательную статью расходов в этом месяце');
  let sumSpending = prompt('Во сколько обойдется?');
  appData.expenses[nameSpending] = sumSpending;
  dayBudget -= sumSpending;
}

alert('Денег на день у вас: ' + Math.floor(dayBudget/30));
console.log(appData);