class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  sayGreeting() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Luodaan kaksi objektia
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Kutsutaan joitakin metodeita
console.log(person1.getName()); // Tulostaa "Alice"
console.log(person2.getAge()); // Tulostaa 25
person1.sayGreeting(); // Tulostaa "Hello, my name is Alice and I am 30 years old."
person2.sayGreeting(); // Tulostaa "Hello, my name is Bob and I am 25 years old."
