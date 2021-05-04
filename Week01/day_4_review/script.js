const leapYear = (year) => year % 4 === 0;

console.log(leapYear(2016));
console.log(leapYear(2017));
console.log(leapYear(2018));
console.log(leapYear(2019));
console.log(leapYear(2020));


const compairObj = (obj1, obj2) => Object.keys(obj1).every((keys) => obj2[keys])

const obj1 = {a: '1', b: '2', c: '5'};
const obj2 = {a: '1', b: '2', c: '3'};
const obj3 = {f: '1', b: '2', d: '3'};

console.log(compairObj(obj2, obj1));

const parseCSV = (str) => str.split('\n').map((str) => str.split(','));

const str = `abc, def, hgi
alex, alexandre, joao
alemao, carro, importado`

console.log(parseCSV(str));

const getHexNumber = () => Math.floor(Math.random() * 16).toString(16);

const getHexColor = () => '#' + Array.from({length: 6}).map(getHexNumber).join('');

console.log(getHexColor());

const isBigger =(arr, param) => arr.every((a) => a >= param);

console.log(isBigger([10, 20, 30, 40, 50], 2))