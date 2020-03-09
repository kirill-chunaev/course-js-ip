let startCalc = document.getElementById('start'),
    resultTable_div = (document.querySelector('.result-table')).querySelectorAll('div');

// valueItems = массив с элементами имеющими в названии класса подстроку "-value"
let valueItems = [];
resultTable_div.forEach(function(item){
  if ((item.className).indexOf('-value') != -1){
    valueItems.push(item);
  }
});

// expensesItems = Все элементы с классом .expenses-item
let expensesItems = document.querySelectorAll('.expenses-item'),

// кнопка расчёта обязательных расходов
expensesItemBtn = document.querySelector('.expenses-item-btn'),
// кнопка расчёта необязательных расходов
optionalexpensesBtn = document.querySelector('.optionalexpenses-btn'),
// кнопка Расчет дневного бюджета
countBudgetBtn = document.querySelector('.count-budget-btn'),

// Поля для ввода необязательных расходов 
optionalexpensesItemInput = document.querySelectorAll('.optionalexpenses-item'),

//статьи возможного дохода
chooseIncomeInput = document.querySelector('.choose-income'),

//Есть ли накопления?
savingsCheckbox = document.querySelector('#savings'),
// Сумма
chooseSumInput = document.querySelector('.choose-sum'),
// Процент
choosePercentInput = document.querySelector('#percent'),
//Год, месяц, день
yearValueInput = document.querySelector('.year-value'),
monthValueInput = document.querySelector('.month-value'),
dayValueInput = document.querySelector('.day-value');



// console.log('кнопка расчёта обязательных расходов: ', expensesItemBtn);
// console.log('кнопка расчёта необязательных расходов: ', optionalexpensesBtn);
// console.log('кнопка Расчет дневного бюджета: ', countBudgetBtn);
// console.log('Поля для ввода необязательных расходов : ', optionalexpensesItemInput);
// console.log('Кнопка "Начать расчет": ', startCalc);
// console.log('Cтатьи возможного дохода: ', chooseIncomeInput);
// console.log('Есть ли накопления?: ', savingsCheckbox);
// console.log('Сумма в переменной "chooseSum": ', chooseSumInput);
// console.log('Процент в переменной "choosePercentInput": ', choosePercentInput);
// console.log('dayValueInput: ', dayValueInput);
// console.log('monthValueInput: ', monthValueInput);
// console.log('yearValueInput: ', yearValueInput);
