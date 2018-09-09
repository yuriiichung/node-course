/* eslint one-var: 0 */

let [a, b = 9] = [];
console.log("[a, b = 9] = []   =>   ", a, b);

[a, b = 9] = [1, 2];
console.log("[a, b = 9] = [1, 2]   =>   ", a, b);

[a, ...b] = [1, 2, 3];
console.log("[a, ...b] = [1, 2, 3]   =>   ", a, b);

let {x, y = b} = {};
console.log("{x, y = b} = {}   =>   ", x, y);

({x, y} = {x: a, y: b});
console.log("({x, y} = {x: a, y: b})   =>   ", x, y);

const {m, n} = {n: 2, m: 1};
console.log("{m, n} = {n: 2, m: 1}   =>   ", m, n);

const {p: foo, q: bar} = {p: 2, q: 1};
console.log("{p: foo, q: bar} = {p: 2, q: 1}   =>   ", foo, bar);

let {aa, bb, ...rest} = {aa: 10, bb: 20, cc: 30, dd: 40};
console.log("{aa, bb, ...rest} = {aa: 10, bb: 20, cc: 30, dd: 40}   =>   ", aa, bb, rest);

const key = "aKey";
const {[key]: val} = {aKey: "aValue"};
console.log("{[key]: val} = {aKey: 'aValue'}   =>   ", val);

function doSomething([var1, , var3], {prop1, prop3}) {
  console.log("doSomething() [var1, , var3]   =>   ", `var1: ${var1}`, `var3: ${var3}`);
  console.log("doSomething() {prop1, prop3}   =>   ", `prop1: ${prop1}`, `prop3: ${prop3}`);
}

doSomething(
  ["valueForVar1", "valueForVar2", "valueForVar3"],
  {prop1: "valueForProp1", prop2: "valueForProp2", prop3: "valueForProp3"}
);

function doSomethingWithDefaults({prop1 = "prop1Val", prop3 = "prop3Val"} = {}) {
  console.log("doSomethingWithDefaults() {prop1, prop3}   =>   ", `prop1: ${prop1}`, `prop3: ${prop3}`);
}

doSomethingWithDefaults();

let arr1 = ["a", "b"]
  arr2 = ["c", "d"];
arr1.push(arr2);
console.log("arr1.push(arr2);   =>   arr1: ", arr1);

arr1 = ["a", "b"]
arr2 = ["c", "d"];
arr1.push(...arr2);
console.log("arr1.push(...arr2);   =>   arr1: ", arr1);

arr1 = ["a", "b"]
arr2 = ["c", "d"];
let arr3 = arr1.concat(arr2); // Returns a new array => Immutability
console.log("arr1.concat(arr2);   =>   arr3: ", arr3);

arr3 = arr1.concat(...arr2);
console.log("arr1.concat(...arr2);   =>   arr3: ", arr3);

arr3 = arr1.concat(arr2[1], arr2[0]);
console.log("arr1.concat(arr2[1], arr2[0]);   =>   arr3: ", arr3);