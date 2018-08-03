//Обчислення числа Фібонначі

function fbn(num){
  let fn1 = 0;
  let fn2 = 1;
  let fn = 1;

  if (num === 0){
   return 0;
  } else {
    for (let i = 1; i < num; i++) {
      fn = fn1 + fn2;
      fn1 = fn2;
      fn2 = fn;  
    }
    return fn; 
  }
}

function fbnRec(num) {
  return num <= 1 ? num : fbnRec(num - 1) + fbnRec(num - 2);
}

function fbnMass(num) {
  let fbnMass = [0, 1]; 
  for (let i = 2; i <= num; i ++) {
    fbnMass[i] = fbnMass[i-1] + fbnMass[i-2];
  }
  return fbnMass[num]; 
}


let num = 1;
do {
  num = parseInt(prompt('Будь-ласка введіть номер числа Фібоначчі'));
    
  if (num > 40){
    alert ('Введіть, будь-ласка, число до 40, щоб швидше отримати результат');
  }
} while(num > 40);


document.write('<div>' + 'Обчислення у циклі: ' + fbn(num) + '</div>');
document.write('<div>' + 'Обчислення за допомогою рекурсії: ' + fbnRec(num) + '</div>');
document.write('<div>' + 'Обчислення за допомогою массива: ' + fbnMass(num) + '</div>');

