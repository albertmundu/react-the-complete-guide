// normal function
function normalFunc() {
  console.log("Hello World\n");
}

function normalName(name) {
  console.log(name);
}

function normalSquare(number) {
  return number * number;
}

// arrow functions
const arrowFunc = () => {
  console.log("Arrow functions!");
};

const arrowName = (name) => {
  console.log(name);
};

// valid for one argument only without parenthesis
const arrowName2 = (name) => {
  console.log(name);
};

// more than one arguments
const arrowNameAge = (name, age) => {
  console.log(name, age);
};

// short version of normalSquare() using arrow function
const arrowSquare = (number) => number * number;

const returnSome = (number) => {
  return number;
};

// normal function call
normalFunc();
normalName("Albert");

const returnMe = (name) => "Hello " + name + "!";

// arrow function call
arrowFunc();
arrowName("Axel");

arrowNameAge("Albert", 32);

console.log(normalSquare(3), arrowSquare(5));

console.log(returnSome(100));
console.log(returnMe("Alex"));
