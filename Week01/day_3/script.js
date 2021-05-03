const findEven = (array) => array.filter((n) => n % 2 === 0).length;

console.log(findEven([1,2,3,4,5,6]));

const findEven2 = (number) => {
  const array = [];
  for (let i = 1; i <= number; i += 1) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
}

console.log(findEven2(6));

const isAscident = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i + 1] < arr[i]) return false;
  }
  return true;
}

console.log(isAscident([1, 2, 3, 4 ,5, 6]));
console.log(isAscident([1, 2, 3, 2 ,5, 6]));
console.log(isAscident([1, 2, 3, 4 ,5, 6, 7, 8, 11, 10]));

const largerEven = (arr) => {

  const even = arr.filter((n) => n % 2 === 0);
  return even[even.length - 1];
}

console.log(largerEven([1, 2, 3, 4, 5, 6, 7]));
console.log(largerEven([1, 2, 3, 44, 5, 6, 7]));
console.log(largerEven([1, 2, 3, 4, 5, 6, 44]));
console.log(largerEven([1, 2, 3, 4, 45, 6, 23]));

const replaceChar = (str) => str.replace(/[0-9]/, '$');

console.log(replaceChar('Alex4nd3e'));