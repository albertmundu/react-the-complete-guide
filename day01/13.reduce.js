const arr = [1, 2, 3, 4];

const reducer = (prev, curr) => prev + curr;

console.log(arr.reduce(reducer));

console.log(arr.reduce(reducer, 5)); // init prev=5
