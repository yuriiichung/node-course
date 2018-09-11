/* eslint func-style: 0, one-var: 0 */

function addHello(val) {
  return `Hello ${val}`;
}
function addExclamation(val) {
  return `${val}!`;
}
function addQuestion(val) {
  return `${val} How are you?`;
}
function compose(initVal, funcList) {
  return funcList.reduce((v, fn) => fn(v), initVal);
}

const compose1 = compose("Diego", [addHello, addExclamation]);
console.log(compose1);


function craftNiceSalute(name) {
  return compose(name, [addHello, addExclamation, addQuestion]);
}
const compose2 = craftNiceSalute("Diego");
console.log(compose2);


// Pure function
const multiply = (n, m) => n * m;
console.log(multiply(3, 4));

// Currify and high-order function
const curryedMultiply = n => m => multiply(n, m);
console.log(curryedMultiply(3)(4));

// Partial application to create a new function
const triple = curryedMultiply(3);
console.log(triple(4));