const cluster = require('cluster');

function blockEventLoopFor(ms) {
    const started = process.hrtime.bigint();
    const nanoseconds = ms * 1e6;

    while (nanoseconds > (process.hrtime.bigint() - started)) { }
}

function healthCheckTimeout() {
    const started = new Date();

    setTimeout(() => {
        const took = new Date() - started;
        console.log(`Timeout took: ${took}`);

        healthCheckTimeout();
    }, 1000);
}

function healthCheckInterval() {
    let started = new Date();

    setInterval(() => {
        const took = new Date() - started;
        console.log(`Interval took: ${took}`);

        started = new Date();
    }, 1000);
}

healthCheckTimeout();
healthCheckInterval();

setInterval(() => {
    console.log('Blocking event loop');
    blockEventLoopFor(3000);
}, 3000);
