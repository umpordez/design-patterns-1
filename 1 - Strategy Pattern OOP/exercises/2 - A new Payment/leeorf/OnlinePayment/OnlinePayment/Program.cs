using System;
using OnlinePayment.Context;
using OnlinePayment.Operations;

namespace OnlinePayment
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var client = new Client("Leo");

            var payPalPayment = new OnlinePaymentContext(client, new PayPal());
            payPalPayment.executePayment();

            var mercadoPagoPayment = new OnlinePaymentContext(client, new MercadoPago());
            mercadoPagoPayment.executePayment();

            var picPayPayment = new OnlinePaymentContext(client, new PicPay());
            picPayPayment.executePayment();
        }
    }
}

