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

class PetCarer extends Person {
    feed(pets) {
        console.log(`${this.name} will feed the pets:`);

        for (const pet of pets) {
            if (!(pet instanceof Pet)) {
                throw new Error('pet must be an instance of Pet');
            }

            pet.eat();
        }

        console.log(`${this.name} is done!`);
    }
}

const petCarer = new PetCarer('Deividy');
petCarer.feed([ new Dog('logan'), new Cat('blue') ]);

