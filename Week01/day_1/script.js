// check two numbers if one is 100 or more or the sum of the two is 100
const isHundred = (n1, n2) => n1 >= 100 || n2 >= 100 || (n1 + n2) >= 100;

console.log(isHundred(50, 50));
console.log(isHundred(10, 80));
console.log(isHundred(100, 0));

const extention = (str) => str.slice(str.lastIndexOf('.'));

console.log(extention('file.html'));
console.log(extention('file.config.js'));

const replaceChar =  (str) => str.split('').map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
console.log(replaceChar('alexandre'));

const currentDate = (date = new Date()) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
} 
console.log(currentDate());

const addNew = (str) => str.match(/New!/i) ? str : `New! ${str}`
console.log(addNew('New! Year'));
