using System;
using OnlinePayment.Interface;

namespace OnlinePayment.Operations
{
    public class MercadoPago : OnlinePaymentStrategy
    {
        public MercadoPago()
        {
        }

        public void Pay()
        {
            Console.WriteLine("Calling MercadoPago api...");
        }
    }
}
