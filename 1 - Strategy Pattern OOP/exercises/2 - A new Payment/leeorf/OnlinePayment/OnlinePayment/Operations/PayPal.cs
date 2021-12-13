using System;
using OnlinePayment.Interface;

namespace OnlinePayment.Operations
{
    public class PayPal : OnlinePaymentStrategy
    {
        private readonly string _name = "PayPal";

        public PayPal()
        {
        }

        public string GetName()
        {
            return this._name;
        }

        public void Pay()
        {
            Console.WriteLine($"Calling {this._name} api...");
        }
    }
}
