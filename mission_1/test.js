// let arr = ["a","b",3,4,"5"];

// arr.forEach(function(item, i, mass) {
//   console.log(i + ": " + item + " (массив: " + mass + ')');
// });

// console.log(arr);

// let mass = [1,2,3,5,7,8];

// for (let key of mass) {
//   console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);


// let arr = ["adsad" , 'второй' , 'третий' , '454'],
//     i = arr.join(" ");

// console.log(i);

// let arr = ["adsad" , 'b33' , 'frtr' , 'cere'],
//     i = arr.sort();

// console.log(arr);

// let arr = [1,27,5,3,16,70,14],
//     i = arr.sort(compareNum);

// function compareNum(a,b) {
//   return a-b
// }
// console.log(arr);

// console.log(arr);


function A() {}
function B() {}

let a = new A;
let b = new B;

alert( a == b ); // true


//
function Calculator(a,b) {
  this.read = function() {
    a = prompt("a");
    b = prompt("b");
  };
}

let test_1 = new Calculator(2,4);
console.log(test_1);