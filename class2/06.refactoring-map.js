/* eslint func-style: 0, arrow-parens: 0, arrow-body-style: 0, one-var: 0 */

function sum(a, b) {
  return a + b;
}

function multi(a, b) {
  return a * b;
}

// function applyFnAndNumberToArray(fn, listOfNumbers, numberToApply) {
//   const newList = [];
//
//   listOfNumbers.forEach((n) => {
//     newList.push(fn(n, numberToApply));
//   });
//
//   return newList;
// }

function applyFnAndNumberToArray(fn, listOfNumbers, numberToApply) {
  return listOfNumbers.map((n) => {
    return fn(n, numberToApply);
  });
}

function sumNumber(listOfNumbers, numberToSum) {
  return applyFnAndNumberToArray(sum, listOfNumbers, numberToSum);
}

function multiNumber(listOfNumbers, numberToSum) {
  return applyFnAndNumberToArray(multi, listOfNumbers, numberToSum);
}

console.log("sumNumber()");
console.log(sumNumber([0, 1, 2, 3, 4], 10));
console.log("multiNumber()");
console.log(multiNumber([0, 1, 2, 3, 4], 2));


function applyFunctionToList(fn, list) {
  return list.map(fn);
}

const duplicate = a => a * 2;
const pow = a => a * a;

console.log("applyLambdaFunctionToList() with duplicate");
console.log(applyFunctionToList(duplicate, [0, 1, 2, 3, 4]));
console.log("applyLambdaFunctionToList() with pow");
console.log(applyFunctionToList(pow, [0, 1, 2, 3, 4]));