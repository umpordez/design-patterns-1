class PaymentAdapter {
    pay() { throw new Error('must implements'); }
}

class PagSeguro extends PaymentAdapter {
    pay() { console.log('PagSeguro calls api'); }
}

class PayPal extends PaymentAdapter {
    pay() { console.log('PayPal calls api'); }
}

class OnlinePayment {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    
    pay() {
        if(!(this.paymentMethod instanceof PaymentAdapter)) {
            throw new Error("payment must be an instance of PaymentAdapter");
        }

        console.log(`initializing payment proccess!`);
        this.paymentMethod.pay();
        console.log(`payment is done!`);
    }
}

const payment = new OnlinePayment(new PagSeguro());
payment.pay();
