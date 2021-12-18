const events = (function anonymousFunction() {
    const listeners = {};

    function on(eventName, handler) {
        if (!listeners[eventName]) { listeners[eventName] = [ ]; }
        listeners[eventName].push(handler);
    }

    function once(eventName, handler) {
        // Hey, how can this work? :thinking:...
        handler();
    }

    function off(eventName, handler) {
        // well, no listener for this event, so just bail
        if (!listeners[eventName]) { return; }


        listeners[eventName] = listeners[eventName]
            .filter((fn) => fn !== handler);
    }

    function emit(eventName, ...values) {
        const handlers = listeners[eventName] || [ ];

        for (const handler of handlers) {
            handler(...values);
        }
    }

    return { off, on, once, emit };
})();

const batchProcessor = (function anotherAnonymousFunction(eventEmitter) {
    const inbox = [];

    let isDone = false;
    let isRunning = false;

    function add(value) {
        inbox.push(value);
        process();
    }

    function process() {
        // don't try process if we already running or the inbox has fewer rows
        if (isRunning || (inbox.length < 3 && !isDone) || !inbox.length) {
            return;
        }

        // only 3 at time :D
        const toProcess = inbox.splice(0, 3);

        isRunning = true;
        eventEmitter.once('batch-done', () => {
            if (isDone && !inbox.length) {
                console.log('All done, sir.');
                return;
            }

            isRunning = false;
            process();
        });

        console.log(`Processing batch: ${toProcess}`);

        setTimeout(() => {
            eventEmitter.emit('batch-done');
        }, Math.ceil(Math.random() * 1000));
    }

    function done() {
        isDone = true;
        process();
    }

    return { done, add };
})(events);

async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

events.on('row', batchProcessor.add);

async function main() {
    for (let i = 0; i <= 10; ++i) {
        events.emit('row', i);
        await sleep(Math.ceil(Math.random() * 500));
    }

    batchProcessor.done();
}

main();
