const leapYear = (year) => year % 4 === 0;

console.log(leapYear(2014));
console.log(leapYear(2015));
console.log(leapYear(2016));
console.log(leapYear(2017));
console.log(leapYear(2018));
console.log(leapYear(2019));
console.log(leapYear(2020));

const compairObj = (obj1, obj2) => Object.keys(obj1).every((key) => obj2[key]);

const obj1 = {a: '1', b: '2', c: '3'};
const obj2 = {a: '1', b: '2', c: '3'};
const obj3 = {f: '1', b: '2', d: '3'};

console.log(compairObj(obj2, obj1));


const parseCSV = (str) => str.split('\n').map((a) => a.split(','));

const str = `abc, def, hgi
alex, alexandre, joao
alemao, carro, importado`

console.log(parseCSV(str));

const getHexRandomNumber = () => Math.floor(Math.random() * 16).toString(16);

const getHexRandomColor = () => '#' + Array.from({length: 6}).map(getHexRandomNumber).join('');

console.log(getHexRandomColor());

const isBigger = (arr, param) => arr.every((a) => a > param);

console.log(isBigger([10, 20, 30, 4, 5], 4))