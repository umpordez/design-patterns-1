class PaymentAdapter {
    pay() { throw new Error('must implements'); }
}

class PagSeguro extends PaymentAdapter {
    pay() { console.log('PagSeguro calls api'); }
}

class PayPal extends PaymentAdapter {
    pay() { console.log('PagSeguro calls api'); }
}

class OnlinePayment {
    constructor(paymentMethod){
        this.paymentMethod = paymentMethod;
    }
    pay(){
        this.paymentMethod.pay();
    }
 }

const payment = new OnlinePayment(PagSeguro);
payment.pay();