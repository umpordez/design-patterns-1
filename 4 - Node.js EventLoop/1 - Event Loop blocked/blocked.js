let started = new Date();

setInterval(() => {
    const took = new Date() - started;
    console.log(`Interval took: ${took}`);

    started = new Date();
}, 1000);

setInterval(() => {
    console.log('Blocking event loop');

    const started = process.hrtime.bigint();
    const nanoseconds = 3000 * 1e6;

    while (nanoseconds > (process.hrtime.bigint() - started)) { }
}, 3000);
