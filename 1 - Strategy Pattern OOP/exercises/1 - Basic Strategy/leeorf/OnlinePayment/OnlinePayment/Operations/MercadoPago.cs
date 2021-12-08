using System;
using OnlinePayment.Interface;

namespace OnlinePayment.Operations
{
    public class MercadoPago : OnlinePaymentStrategy
    {
        private readonly string _name = "MercadoPago";

        public MercadoPago()
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
