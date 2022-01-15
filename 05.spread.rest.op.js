// spread & rest operators
// spread --> used to split up array elements or object properties
/*
const newArray = [...oldArray, 1, 2]
const newObject = {...oldObject, newProp:5}
*/

// rest --> used to merge a list of function arguments into an array
/**
 function sortArgs(..args){
     return args.sort();
 }
 **/

const numbers = [1, 2, 3, 4];

const newNumbers = [...numbers, 5, 6];

console.log(newNumbers);

const person = {
  name: "Axel",
};

const newPerson = {
  ...person,
  age: 23,
};

console.table(newPerson);

// rest

const filter = (...args) => {
  return args.filter((el) => el === 5); // three equals checks for type & value equality
};

console.log(filter(1, 2, 3, 4, 5, 6, 7));
