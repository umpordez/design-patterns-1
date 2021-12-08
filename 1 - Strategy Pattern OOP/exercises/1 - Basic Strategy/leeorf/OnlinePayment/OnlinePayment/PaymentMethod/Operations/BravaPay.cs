using System;
using OnlinePayment.Interface;

namespace OnlinePayment.Operations
{
    public class BravaPay : OnlinePaymentStrategy
    {
        private readonly string _name = "BravaPay";

        public BravaPay()
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
