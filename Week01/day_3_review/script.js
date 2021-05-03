const findEvenLength = (arr) => arr.filter((a) => a % 2 === 0).length;

console.log(findEvenLength([1, 2, 3, 4, 5, 6, 44]));

const findEvenValues = (number) =>  {
  const arr = [];
  for (let i = 1; i <= number; i += 1) {
    arr.push(i);
  }
  return arr;
}


console.log(findEvenLength(findEvenValues(6)));
console.log(findEvenLength(findEvenValues(9)));

const isAscending = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

console.log(isAscending([1, 2, 3, 4, 5]));
console.log(isAscending([1, 2, 3, 6, 5]));
console.log(isAscending([1, 2, 3, 6, 6, 6]));

const findLargerEven = (arr) => Math.max(...arr.filter((a) => a % 2 === 0));

console.log(findLargerEven([1, 6, 3, 4, 44, 5, 2, 22, 26]));
console.log(findLargerEven([1, 6, 3, 91, 44, 5, 2, 22, 26, 88]));
console.log(findLargerEven([1, 6, 3, 91, 44, 5, 2, 22, 26, 101]));

const replaceDigit = (str) => str.replace(/[0-9]/, '$');

console.log(replaceDigit('Al3xandr3'));