const sliceStr = (str) => str.length < 3 ?
 str : str.slice(0, 3) + str.slice(-3);

console.log(sliceStr('asd123'));
console.log(sliceStr('asd1234'));


const halfStr = (str) => str.slice(0, str.length / 2);

console.log(halfStr('temp'));
console.log(halfStr('temple'));
console.log(halfStr('temples'));
console.log(halfStr('alexandre'));

const noFirstChar = (str1, str2) => str1.slice(1) + str2.slice(1);

console.log(noFirstChar('Alexandre', 'Programdor'));

const nearnestToHundred = (a, b) => (a - 100) > (b - 100) ? a : b;

console.log(nearnestToHundred(20, 30));
console.log(nearnestToHundred(50, 20));
console.log(nearnestToHundred(20, 90));
console.log(nearnestToHundred(50, 90));

const countChars = (str, char) => str.split('').filter((a) => a === char).length;

const contains2To4 = (str, char) => countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4('hooo', 'o'));
console.log(contains2To4('hoo', 'o'));
console.log(contains2To4('hoooo', 'o'));
console.log(contains2To4('hooooo', 'o'));
console.log(contains2To4('ho', 'o'));