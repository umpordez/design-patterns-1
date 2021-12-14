class StreamingService {
    _subscribers = [];
    _shows = [];

    get name() { throw new Error('Not implemented'); }

    addShow(name) {
        this._shows.push(name);

        for (const subscriber of this._subscribers) {
            subscriber.onNewShow(name, this);
        }
    }

    unsubscribe(client) {
        this._subscribers = this._subscribers.filter((s) => s !== client);
    }

    subscribe(client) { this._subscribers.push(client); }
    printShows() {
        for (const show of this._shows) {
            console.log(`\t > ${show}`);
        }

        console.log('');
    }
}

class Netflix extends StreamingService {
    _shows = [ 'squid games' ];

    get name() { return 'Netflix'; }
}

class AmazonPrime extends StreamingService {
    _shows = [ 'the boys' ];
    get name() { return 'Amazon Prime'; }
}

class Client {
    _subscriptions = [];
    constructor(name) { this.name = name; }

    subscribe(streamService) {
        this._subscriptions.push(streamService);
        streamService.subscribe(this);

        console.log(`${this.name} subscribed to ${streamService.name}!`);
        console.log(`Shows available:`);

        streamService.printShows();
    }

    unsubscribe(streamService) {
        this._subscriptions = this._subscriptions
            .filter((s) => s !== streamService);

        streamService.unsubscribe(this);
        console.log(`${this.name} is LEAVING ${streamService.name}...`);
    }

    onNewShow(showName, streamService) {
        console.log(`Hello ${this.name}, there is a new show for you!`);
        console.log(`\t> ${showName} is now LIVE on ${streamService.name}!`);
        console.log('');
    }
}

const netflix = new Netflix();
const amazonPrime = new AmazonPrime();

const deividy = new Client('Deividy');

deividy.subscribe(netflix);
deividy.subscribe(amazonPrime);

const vandito = new Client('Vanderson');

netflix.addShow('The 70s show');
vandito.subscribe(netflix);

const leo = new Client('Leo');
leo.subscribe(amazonPrime);

console.log('---');
amazonPrime.addShow('The Office');

deividy.unsubscribe(netflix);
console.log('---');

netflix.addShow('Rick and Morty');
