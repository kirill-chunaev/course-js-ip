

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

// Все элементы с классом .expenses-item
expensesItems = document.querySelectorAll('.expenses-item'),
// кнопка расчёта обязательных расходов
expensesBtn = document.querySelector('.expenses-item-btn'),
// кнопка расчёта необязательных расходов
optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
// кнопка Расчет дневного бюджета
countBtn = document.querySelector('.count-budget-btn'),
// Поля для ввода необязательных расходов 
optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
//статьи возможного дохода
incomeItem = document.querySelector('.choose-income'),
//Есть ли накопления?
checkSavings = document.querySelector('#savings'),
// Сумма
sumValue = document.querySelector('.choose-sum'),
// Процент
percentValue = document.querySelector('.choose-percent'),
//Год, месяц, день
yearValue = document.querySelector('.year-value'),
monthValue = document.querySelector('.month-value'),
dayValue = document.querySelector('.day-value');



let money, time, 
monthsRus = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
todayDate = new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate();


var disabledBtn = document.querySelectorAll('button');

startBtn.addEventListener('click', function(){
  time = prompt('Введите дату в формате YYYY-MM-DD', todayDate);
  money = +prompt('Ваш бюджет на месяц?', '');

  disabledBtn.forEach(function(i){
    i.removeAttribute('disabled');
    console.log(i);
  });


  while (isNaN(money) || money == "" || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = monthsRus[new Date(Date.parse(time)).getMonth()];
  dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function(){
  let sum = 0;

  for (var i=0; i < expensesItems.length; i++ ) {
    let nameSpending = expensesItems[i].value,
        sumSpending = expensesItems[++i].value;

    if (typeof(nameSpending) === "string"
        && Number.isNaN(sumSpending) != true
        && typeof(nameSpending) != null
        && typeof(sumSpending) != null
        && nameSpending != ""
        && sumSpending != ""
        && nameSpending.length < 50) {
      appData.expenses[nameSpending] = sumSpending;
      sum += +sumSpending;
    } else {
      alert('Внимание! Вы допустили ошибку, пожалуйста проследите чтобы все поля были заполнены верно.');
      i--;
    }
  }

  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
  for(let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});



countBtn.addEventListener('click', function(){
  let expenses = +expensesValue.innerHTML;

  if(appData.budget != undefined){
    appData.moneyPerDay = ((appData.budget-expenses) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay + ' рубля';
  
    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Внимание! У вас минимальный уровень зароботка.";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "У вас средний уровень зароботка.";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "У вас высокий уровень зароботка.";
    } else {
      levelValue.textContent = "Упс... Где то была дапущена ошибка. Мы не смогли посчитать ваш доход.";
    }
  } else {
    dayBudgetValue.textContent = 'Вы не ввели ваш достаток';
  }
});

incomeItem.addEventListener('input', function(){
  let items = incomeItem.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
  appData.savings = (appData.savings == true)?false:true;
});

calculateSavings = function(){
  if(appData.savings == true){
    let sum = +sumValue.value,
        percent = +percentValue.value;
    
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
};

sumValue.addEventListener('input',function(){
  calculateSavings();
});
percentValue.addEventListener('input',function(){
  calculateSavings();
});

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  dataTime: time,
  savings: false
};

if(appData.time == undefined){
  disabledBtn.forEach(function(i){
    console.log(i);
    i.setAttribute('disabled', '');
    document.getElementById('start').removeAttribute('disabled');
  });
};


