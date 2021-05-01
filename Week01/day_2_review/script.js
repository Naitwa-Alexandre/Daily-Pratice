const threeFirstAndLast = (str) => str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(threeFirstAndLast('al'));

const halfStr = (str) => str.slice(0, str.length / 2);

console.log(halfStr('alexandre'));
console.log(halfStr('santos'));
console.log(halfStr('pereira'));

const cocat2strings = (str1, str2) => str1.slice(1) + str2.slice(1);

console.log(cocat2strings('Alexandre', 'Santos'));

const nearestToHundred = (a, b) => (a - 100) > (b - 100) ? a : b;

console.log(nearestToHundred(90, 10));
console.log(nearestToHundred(90, 91));
console.log(nearestToHundred(95, 91));
console.log(nearestToHundred(5, 4));


const findCharLength = (str, char) => str.split('').filter((ch) => ch === char).length;

const findChar = (str, char, callback) => callback(str, char) >= 2 && callback(str,char) <= 4;

console.log(findChar('ooooh', 'o', findCharLength));
console.log(findChar('oooh', 'o', findCharLength));
console.log(findChar('oooooh', 'o', findCharLength));
console.log(findChar('ooh', 'o', findCharLength));
console.log(findChar('oh', 'o', findCharLength));
