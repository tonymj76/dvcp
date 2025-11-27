// Inheritance: Classes support inheritance
// using the extends keyword, allowing a new class (child) to inherit properties and
// methods from an existing class (parent).
// The super() keyword is used in the child constructor to call the parent constructor.

//Example:
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move() {
    console.log(`${this.name} is moving.`);
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
  sound() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal { // Dog inherits from Animal
  constructor(name, age, breed) {
      super(name, age); // Call the parent constructor
      this.breed = breed;
  }
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

class Cat extends Animal { // Cat inherits from Animal
  constructor(name, color) {
      super(name); // Call the parent constructor
      this.color = color;
  }
  meow() {
    console.log(`${this.name} says Meow!`);
  }

  move() { // Overriding the move method
    console.log(`${this.name} is sitting. but initially`);
    super.move();
  }
}

const myAnimal = new Animal('Generic Animal', 34);
// myAnimal.bark() // This will throw an error since bark() is not defined in Animal

const myDog = new Dog('Bingo', 22, 'Golden Retriever');
myDog.move(); // Inherited method
// myDog.eat(); // Inherited method
// myDog.bark(); // Dog's own method

const myCat = new Cat('Whiskers', 'Tabby');
myCat.move();
