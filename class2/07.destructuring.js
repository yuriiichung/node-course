/* eslint one-var: 0 */

let [a, b] = [];
console.log("[a, b] = []   =>   ", a, b);

[a, b] = [1, 2];
console.log("[a, b] = [1, 2]   =>   ", a, b);

let {x, y} = {};
console.log("{x, y} = {}   =>   ", x, y);

({x, y} = {x: a, y: b});
console.log("({x, y} = {x: a, y: b})   =>   ", x, y);

const {m, n} = {n: 2, m: 1};
console.log("{m, n} = {n: 2, m: 1}   =>   ", m, n);

const {p: foo, q: bar} = {p: 2, q: 1};
console.log("{p: foo, q: bar} = {p: 2, q: 1}   =>   ", foo, bar);

function doSomething([var1, , var3], {prop1, prop3}) {
  console.log("doSomething() [var1, , var3]   =>   ", `var1: ${var1}`, `var3: ${var3}`);
  console.log("doSomething() {prop1, prop3}   =>   ", `prop1: ${prop1}`, `prop3: ${prop3}`);
}

doSomething(
  ["valueForVar1", "valueForVar2", "valueForVar3"],
  {prop1: "valueForProp1", prop2: "valueForProp2", prop3: "valueForProp3"}
);