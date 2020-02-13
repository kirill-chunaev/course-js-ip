let money = +prompt('Ваш бюджет на месяц?', 5000);
let time = prompt('Введите дату в формате YYYY-MM-DD', '2020-02-04');
let appData = {
  manthBudget: +money,
  dataTime: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

// spending - расходы
let dayBudget = appData.manthBudget,
    quantityRepeat = 2;
for (var i=0; i<quantityRepeat; i++ ) {
  let nameSpending = prompt('Вопрос ' + (i+1) + '. Введите обязательную статью расходов в этом месяце');
  let sumSpending = +prompt('Вопрос ' + (i+1) + '. Во сколько обойдутся расходы на ' + nameSpending + '?');
  if (typeof(nameSpending) === "string"
      && Number.isNaN(sumSpending) != true
      && typeof(nameSpending) != null
      && typeof(sumSpending) != null
      && nameSpending != ""
      && sumSpending != ""
      && nameSpending.length < 50) {
    console.log("done");
    appData.expenses[nameSpending] = sumSpending;
    dayBudget -= sumSpending;
  } else {
    alert('Внимание! Вы допустили ошибку, пожалуйста проследите чтобы все поля были заполнены верно.');
    i--;
  }
}

appData.moneyPerDay = Math.floor(dayBudget/30);

if (appData.moneyPerDay < 100) {
  console.log("Внимание! У вас минимальный уровень зароботка.");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("У вас средний уровень зароботка.");
} else if (appData.moneyPerDay > 2000) {
  console.log("У вас высокий уровень зароботка.");
} else {
  console.log("Упс... Где то была дапущена ошибка. Мы не смогли посчитать ваш доход.");
}

alert("Ежедневный бюджет составляет: " + appData.moneyPerDay + " рублей");
console.log(appData);