/*

es6 style
---------------
constructor() {
    this.property = 'value';
}

// methods
myMethod() {...}

es7 style
---------------
property = 'value';

myMethod = () => {...}

*/

class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Axel";
  gender = "female";
  printName = () => {
    console.log(this.name);
  };
}

const person = new Person();

person.printGender();
person.printName();
