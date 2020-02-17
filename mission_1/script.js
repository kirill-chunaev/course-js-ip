let money, time, dayBudget;

function start() {
  money = +prompt('Ваш бюджет на месяц?', 5000);
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt('Ваш бюджет на месяц?', 5000);
  }
  time = prompt('Введите дату в формате YYYY-MM-DD', '2020-02-04');
}

start();

let appData = {
  monthBudget: +money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  dataTime: time,
  savings: true,
};

// spending - расходы
// let dayBudget = appData.manthBudget;

function chooseExpenses() {
  for (var i=0; i<2; i++ ) {
    let nameSpending = prompt('Вопрос ' + (i+1) + '. Введите обязательную статью расходов в этом месяце'),
        sumSpending = +prompt('Вопрос ' + (i+1) + '. Во сколько обойдутся расходы на ' + nameSpending + '?');
    if (typeof(nameSpending) === "string"
        && Number.isNaN(sumSpending) != true
        && typeof(nameSpending) != null
        && typeof(sumSpending) != null
        && nameSpending != ""
        && sumSpending != ""
        && nameSpending.length < 50) {
      // console.log("done");
      appData.expenses[nameSpending] = sumSpending;
      // dayBudget -= sumSpending;
    } else {
      alert('Внимание! Вы допустили ошибку, пожалуйста проследите чтобы все поля были заполнены верно.');
      i--;
    }
  }
}

chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.monthBudget / 30).toFixed(1);

  alert("Ежедневный бюджет составляет: " + appData.moneyPerDay + " рубля");
  console.log(appData);
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Внимание! У вас минимальный уровень зароботка.");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("У вас средний уровень зароботка.");
  } else if (appData.moneyPerDay > 2000) {
    console.log("У вас высокий уровень зароботка.");
  } else {
    console.log("Упс... Где то была дапущена ошибка. Мы не смогли посчитать ваш доход.");
  }
}
detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

    appData.monthIncome = save/100/12*percent;
    alert("Доход в месяц с вашего депозита составил: " + appData.monthIncome + " рубля");
  }
}
checkSavings();

function chooseOptExpenses() {
  let optionalExpenses = {};
  for(var i=0;i<3;i++) {
    let indexExp = i+1;
    optionalExpenses[indexExp] = prompt("Статья необязательных расходов?");
  };
};