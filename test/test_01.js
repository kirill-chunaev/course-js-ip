
alert("Здравствуйте, давайте познакомимся! Мы зададим вам несколько вопросов.");

let person = {
  name: '',
  age: '',
  alone: ''
};

person.name = prompt("Как вас зовут", 'Впешите своё имя');
person.age = prompt("Очень приятно " + person.name + "! Скажите, сколько вам лет?", '');
person.alone = confirm("Вы одиноки?");

if (person.alone) {
  alert('Не грустите, вы ещё встретите свою мечту.');
}
console.log(person);