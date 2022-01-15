// Easily extract array elements or object properties and store them in variables

// array destructuring
/*
[a, b] = ['Hello', 'Axel'];
console.log(a);
console.log(b);
*/
const numbers = [1, 2, 3];

let [num1, num2] = numbers;
let [, , num3] = numbers;

console.log(num1);
console.log(num2);
console.log(num3);

//object destructuring
/*
{name} = {name: 'Axel', age:23};
console.log(name);
console.log(age);
*/

const { name } = { name: "Axel", age: 23 };
console.log(name);
// console.log(age);
