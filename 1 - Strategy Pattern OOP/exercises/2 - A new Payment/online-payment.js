class PaymentAdapter {
    pay() { throw new Error('must implements'); }
}

class PagSeguro extends PaymentAdapter {
    name = 'PagSeguro';

    pay() {
        console.log('PagSeguro calls api');
        return new Date().getTime();
    }
}

class PayPal extends PaymentAdapter {
    name = 'PayPal';

    pay() {
        console.log('PayPal calls api');
        return new Date().getTime();
    }
}

class BravaPay extends PaymentAdapter {
    name = 'BravaPay';
    pay() { }
}

class Client {
    PreferablePaymentAdapter = PagSeguro;

    constructor(name) {
        this.name = name;
    }
}

class OnlinePayment {
    constructor(client, PaymentClass = client.PreferablePaymentAdapter) {
        this.client = client;
        this.paymentMethod = new PaymentClass(client);

        if (!(this.paymentMethod instanceof PaymentAdapter)) {
            throw new Error('Expected a PaymentAdapter in OnlinePayment');
        }
    }

    pay() {
        const paymentId = this.paymentMethod.pay();

        const clientName = this.client.name;
        const paymentMethodName = this.paymentMethod.name;

        console.log('');
        console.log(`${clientName} paid the bill using ${paymentMethodName}`);
        console.log(`Payment id: ${paymentId}`);
    }
}

const client = new Client('Deividy');
const payment = new OnlinePayment(client, BravaPay);

payment.pay();
