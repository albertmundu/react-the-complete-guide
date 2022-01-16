// primitive types --> numbers, strings, booleans

const number = 1;
const num2 = number;

console.log(num2);

// reference types --> objects and arrays

const person = {
  name: "Axel",
};

const secondPerson = person; // secondPerson points to the address of person
const thirdPerson = { ...person }; // copies the contents of the person

person.name = "Albert";

console.log(secondPerson);
console.log(thirdPerson);
