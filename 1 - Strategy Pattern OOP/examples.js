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
    feed(animals) {
        console.log(`${this.name}: will feed the animals`);

        for (const animal of animals) {
            if (!(animal instanceof Pet)) { throw new Error('expected a pet'); }
            animal.eat();
        }
    }
}

const petCarer = new PetCarer('Deividy');
petCarer.feed([ new Dog('logan'), new Cat('blue') ]);

class PaymentMethod {
    constructor(client) {
        this.client = client;
    }

    pay() { throw new Error('must implement'); }
}

class PagSeguro extends PaymentMethod {
    pay() { console.log(`${this.client.name}: pay via PagSeguro`); }
}

class PayPal extends PaymentMethod {
    pay() { console.log(`${this.client.name}: pay via PayPal`); }
}

class Client extends Person {
    PreferablePayment = PagSeguro;

    constructor(name, PreferablePayment) {
        super(name);
        this.PreferablePayment = PreferablePayment || this.PreferablePayment;
    }

    initPayment() {
        return new this.PreferablePayment(this);
    }
}

class Order {
    constructor(client) {
        this.client = client;
    }

    pay(payment) {
        payment.pay();
    }
}

console.log('');

const client = new Client('Deividy', PayPal);
const order = new Order(client);

order.pay(client.initPayment());
