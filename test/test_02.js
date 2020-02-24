function Calculator(){
  this.read = function(){
    num = {
      a : +prompt('Введите число "A"'),
      b : +prompt('Введите число "B"')
    };
    return num;
  }
  this.sum = function() {
    return num.a + num.b;
  }
  this.mul = function() {
    return num.a * num.b;
  }
}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );