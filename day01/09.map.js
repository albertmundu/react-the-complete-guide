const arr = [1, 4, 9, 16];

const map1 = arr.map((x) => x * 2);

console.log(map1);

let kv = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

let reformated = kv.map((obj) => {
  let newObj = {};
  newObj[obj.key] = obj.value;
  return newObj;
});

console.log(reformated);
