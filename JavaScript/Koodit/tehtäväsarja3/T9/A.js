class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class SuperHero extends Person {
  constructor(name, age, superpower) {
    super(name, age); // Kutsutaan yliluokan konstruktoria
    this.superpower = superpower;
  }

  useSuperPower() {
    console.log(`I am using my superpower: ${this.superpower}`);
  }
}

// Luodaan SuperHero-objekteja
const hero1 = new SuperHero("Superman", 30, "Flight");
const hero2 = new SuperHero("Spider-Man", 25, "Web-slinging");

// Kutsutaan metodeita
hero1.sayHello(); // Tulostaa "Hello, my name is Superman and I am 30 years old."
hero1.useSuperPower(); // Tulostaa "I am using my superpower: Flight"

hero2.sayHello(); // Tulostaa "Hello, my name is Spider-Man and I am 25 years old."
hero2.useSuperPower(); // Tulostaa "I am using my superpower: Web-slinging"
