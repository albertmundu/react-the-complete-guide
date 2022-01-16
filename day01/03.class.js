// classes contains (properties and methods)

class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

// inheritance
class Person extends Human {
  // property
  name = "Axel";

  // method
  call = () => {
    console.log(this.name);
  };
}

class Person2 extends Human {
  constructor() {
    // must call the super constructor in the derived class before accessing this;
    super();
    this.name = "Axel";
    this.gender = "female";
  }

  printName() {
    console.log(this.name);
  }
}

// class instantiation

const p1 = new Person();

p1.call();

console.log(p1.name);
p1.printGender();

const p2 = new Person2();

p2.printName();
p2.printGender();
