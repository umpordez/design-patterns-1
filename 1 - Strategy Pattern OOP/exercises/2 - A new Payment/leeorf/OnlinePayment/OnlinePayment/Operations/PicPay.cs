using System;
using OnlinePayment.Interface;

namespace OnlinePayment.Operations
{
    public class PicPay : OnlinePaymentStrategy
    {
        private readonly string _name = "PicPay";

        public PicPay()
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
