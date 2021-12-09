function log(msg) {
    process.stdout.write(msg);
    process.stdout.write('\n');
}

const paymentAdapters = {
    pagseguro(order) {
        log(`💰 Paying order: #${order.id} with PagSeguro...`);
        return new Date().getTime();
    },

    paypal(order) {

    }
};

function makeOrder(name) {
    const order = { client: { name }, id: new Date().getTime() };
    log(`Making order: #${order.id} for ${name}`);
    return order;
}

function pay(order, paymentAdapter) {

}

function run() {
    const order = makeOrder('Deividy');
    const paymentId = pay(order, paymentAdapters.pagseguro);

    log('');
    log(`Payment made! Confirmation number: #${paymentId}`);
}

run();
