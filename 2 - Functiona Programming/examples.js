function catEat(name) {
    console.log(`- 🐱 ${name}: is eating some fish`);
}
function dogEat(name) {
    console.log(`- 🐶 ${name}: is eating some meat`);
}

const animalsEatBehaviorByType = {
    dog: dogEat,
    cat: catEat
};

function feedAnimals(petCarer, animals) {
    console.log(`${petCarer.name}: will feed the animals`);

    for (const animal of animals) {
        const eat = animalsEatBehaviorByType[animal.type];
        if (!eat) { throw new Error(`Unknown animal type ${animal.type}`); }

        eat(animal.name);
    }
}

function buildAnimal(name, type) { return { name, type }; }
function buildCat(name) { return { name, type: 'cat' }; }
function buildDog(name) { return { name, type: 'dog' }; }

const petCarer = { name: 'Deividy' };
feedAnimals(petCarer, [ buildDog('Logan'), buildCat('Blue') ]);

// mix it

console.log('');
class PaymentMethod {
    constructor(client) { this.client = client; }
    pay() { throw new Error('must implement'); }
}

class PagSeguro extends PaymentMethod {
    pay() { console.log(`${this.client.name}: paid via PagSeguro`); }
}

class PayPal extends PaymentMethod {
    pay() { console.log(`${this.client.name}: paid via PayPal`); }
}

function buildClient(name, PreferablePayment) {
    const client = { name };

    if (PreferablePayment) {
        const paymentMethod = new PreferablePayment(client);
        client.paymentMethod = paymentMethod;
    }

    return client;
}

function doPay(client, paymentMethod = client.paymentMethod) {
    console.log(`Client: ${client.name} is paying...`);
    paymentMethod.pay();
    console.log('');
}

const client = buildClient('Deividy', PagSeguro);
doPay(client);
doPay(client, new PayPal(client));
