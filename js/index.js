//Обчислення числа Фібонначі
let num = parseInt(prompt('Please enter a Fibonacci number'))
let fn1 = 0;
let fn2 = 1;
let fn = 1;

for (var i = 1; i < num; i++) {
  fn = fn1 + fn2;
  fn1 = fn2;
  fn2 = fn;  
}
document.write(fn); 