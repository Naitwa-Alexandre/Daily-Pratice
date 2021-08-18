//Exercício 01 Escreva um programa que checa dois números e retorna true se um dos números for 100 ou se a soma dos dois números for 100

const isEqualToHundred = (num, num2) => num === 100 || num2 === 100 || (num + num2) === 100;

console.log('test 1', isEqualToHundred(20, 50));
console.log('test 2', isEqualToHundred(90, 0));
console.log('test 3', isEqualToHundred(10, 90));
console.log('test 4', isEqualToHundred(50, 50));
