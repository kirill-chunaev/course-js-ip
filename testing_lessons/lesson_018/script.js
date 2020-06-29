let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// console.log(btn[0]);

// btn[1].onclick = function () {
//   console.log('Вы нажали на кнопку #2');
// }

// btn[2].addEventListener('click', function(){
//   console.log("Вы нажали на третью кнопку")
// });

// btn[0].addEventListener('click', function(event){
//   console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

wrap.addEventListener('click', function(){
  console.log('Произошло событиеее: ' + event.type + ' на элементе ' + event.target);
});


link.addEventListener('click', function(event){
  event.preventDefault(); 
});

btn.forEach(function(item, i) {
  item.addEventListener('mouseleave', function(){
    console.log('Вы вышли за пределы кнопки ' + (i+1));
  });
});

// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//   alert( i + ": " + item + " (массив:" + arr + ")" );
// });

// btn[0].addEventListener('mouseenter', function(){
//   console.log('Вы навели мышь на первую кнопку');
// });