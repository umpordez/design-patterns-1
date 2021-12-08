using System;
using OnlinePayment.Context;
using OnlinePayment.Operations;

namespace OnlinePayment
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Client 1: I want to pay with PayPal!");
            var payPalPayment = new OnlinePaymentContext(new PayPal());
            payPalPayment.executePayment();

            Console.WriteLine("Client 2: I want to pay with Mercado Pago!");
            var mercadoPagoPayment = new OnlinePaymentContext(new MercadoPago());
            mercadoPagoPayment.executePayment();

            Console.WriteLine("Client 3: I want to pay with PicPay!");
            var picPayPayment = new OnlinePaymentContext(new PicPay());
            picPayPayment.executePayment();
        }
    }
}

