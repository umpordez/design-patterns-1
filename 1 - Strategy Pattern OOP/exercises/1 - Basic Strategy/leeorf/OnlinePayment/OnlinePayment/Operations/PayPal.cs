using System;
using OnlinePayment.Interface;

namespace OnlinePayment.Operations
{
    public class PayPal : OnlinePaymentStrategy
    {
        public PayPal()
        {
        }

        public void Pay()
        {
            Console.WriteLine("Calling PayPal api...");
        }
    }
}
