/* eslint func-style: 0, one-var: 0 */

const whatever = "Ok, whatever dude..!",
  obj = {
    "2018-01-01": "This is a value",
    "2018-01-02": ["This", "is", "another", "value"],
    "2018-01-03": 44,
    "2018-01-04": {aKey: "aValue", anotherKey: "anotherValue"},
    func: (name) => `Hi ${name}, I'm a function!`,
    notStringButValidKey: whatever,
    whatever
  };

console.log("Accessing obj[2018-01-03]: ", obj["2018-01-03"]);
console.log("Accessing obj[notStringButValidKey]: ", obj["notStringButValidKey"]);
console.log("Accessing obj.notStringButValidKey: ", obj.notStringButValidKey);
console.log("Accessing obj.whatever: ", obj.whatever);
console.log("Calling obj.func('Diegol'): ", obj.func("Diegol"));

Object.keys(obj).forEach((key, idx) => {
  console.log(`Key at position ${idx}: `, key);
});

Object.values(obj).forEach((value, idx) => {
  console.log(`Value at position ${idx}: `, value);
});

Object.entries(obj).forEach((entry, idx) => {
  console.log(`Entry at position ${idx}: `, entry);
});

Object.entries(obj).forEach(([key, value], idx) => {
  console.log(`Entry at position ${idx} (destructured): `, `${key}: ${value}`);
});

console.log("-------- And now... with arrays! --------");

const arr = [
  "This is a value",
  ["This", "is", "another", "value"],
  44,
  {aKey: "aValue", anotherKey: "anotherValue"},
  (name) => `Hi ${name}, I'm a function!`,
  whatever
];

Object.keys(arr).forEach((key, idx) => {
  console.log(`Key at position ${idx}: `, key);
});

Object.values(arr).forEach((value, idx) => {
  console.log(`Value at position ${idx}: `, value);
});

Object.entries(arr).forEach((entry, idx) => {
  console.log(`Entry at position ${idx}: `, entry);
});