let box = document.getElementById('box'),
btn = document.getElementsByTagName('button'),
circle = document.getElementsByClassName('circle'),
heart = document.querySelectorAll('.heart'),
oneHeart = document.querySelector('.heart'),
wrapper = document.querySelector('.wrapper');



// console.log(box);
// console.log(btn);
// console.log('btn:0 ', btn[0]);
// console.log(circle);
// console.log('heart ', heart[1]);
// console.log(oneHeart);

box.style.backgroundColor = 'orange';

btn[1].style.borderRadius = '6px';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//   heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, hearts){
//   item.style.backgroundColor = 'DodgerBlue'
// });

//Создаём новые элементы
let div = document.createElement('div'),
    txt = document.createTextNode('Тут был я'); //создаём текстовый узел

div.classList.add('black');
console.log(div);

//добавляем элементы на страницу
div.innerHTML = '<span>Hello word!</span>';
box.querySelector('p').textContent = 'Здесь был JavaScript';

// добавить элемент в конец родителя
// document.body.appendChild(div);
//wrapper.appendChild(div);

//добавляет элемент перед каким либо элементом
// либо самым первым в родителе(если не указан второй параметр)
document.body.insertBefore(div, circle[1]);

//удаляет элемент со страницы
document.body.removeChild(btn[2]);
wrapper.removeChild(heart[0]);

//заменить элемент на место другого
document.body.replaceChild(heart[1], btn[2]);






/// 9 Mart 2020 year
let spanMessage = document.createElement('span'),
    spanText = 'Это span!';

spanMessage.textContent = spanText;
console.log(spanMessage);
console.log(spanText);
