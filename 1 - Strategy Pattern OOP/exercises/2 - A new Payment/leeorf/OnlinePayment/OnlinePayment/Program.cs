using System;
using OnlinePayment.Context;
using OnlinePayment.Operations;

namespace OnlinePayment
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var payPalPayment = new OnlinePaymentContext(new Client("Leo"), new PayPal());
            payPalPayment.executePayment();

            var bravaPayPayment = new OnlinePaymentContext(new Client("Deividy"), new BravaPay());
            bravaPayPayment.executePayment();

            var mercadoPagoPayment = new OnlinePaymentContext(new Client("Vanderson"), new MercadoPago());
            mercadoPagoPayment.executePayment();

            var picPayPayment = new OnlinePaymentContext(new Client("Raul"), new PicPay());
            picPayPayment.executePayment();
        }
    }
}