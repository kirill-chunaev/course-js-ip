'use strict';
//Напишите функцию-конструктор
//прибавляет каждое введённое число

function Accumulator(startingValue) {
  this.value = startingValue;
  let x = 0;
  this.read = function(){
    x = +prompt('Введите число');
    this.value += x;
  }
}

let accumulator = new Accumulator(5); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

console.log(accumulator.value); // выведет сумму этих значений