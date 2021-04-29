const isHundred = (num1, num2) => num1 >= 100 || num2 >= 100 || (num1 + num2) >= 100;

console.log(isHundred(0, 100));
console.log(isHundred(100, 0));
console.log(isHundred(50, 50));
console.log(isHundred(50, 40));

const getFile = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFile('index.html'));
console.log(getFile('index.html.css'));
console.log(getFile('index.html.css.js'));

const changeLetters = (str) =>
  str.split('')
  .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
  .join('');

console.log(changeLetters('abc'));

const currentDate = (date = new Date) => {
  const days = date.getDate();
  const month = date.getMonth() + 1;
  const fullYear = date.getFullYear();
  return `${days}/${month}/${fullYear}`;
}
console.log(currentDate());

const addNew = (str) => str.match(/New!/ig) ? str : `New! ${str}`;

console.log(addNew('New! Computer'));
console.log(addNew('Computer'));
