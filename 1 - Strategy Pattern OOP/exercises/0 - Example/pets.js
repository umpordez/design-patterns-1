class Pet {
    constructor(name) {
        this.name = name;
    }

    eat() { throw new Error('must implements'); }
}

class Dog extends Pet {
    eat() { console.log(`- 🐶 ${this.name}: is eating some meat`); }
}

class Cat extends Pet {
    eat() { console.log(`- 🐱 ${this.name}: is eating some fish`); }
}

class Person {
    constructor(name) {
        this.name = name;
    }
}

class PetCarer extends Person { }

const petCarer = new PetCarer('Deividy');
petCarer.feed([ new Dog('logan'), new Cat('blue') ]);

