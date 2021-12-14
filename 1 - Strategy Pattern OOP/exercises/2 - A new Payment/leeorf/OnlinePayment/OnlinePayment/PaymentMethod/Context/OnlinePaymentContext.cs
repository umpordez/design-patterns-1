using System;
using OnlinePayment.Interface;

namespace OnlinePayment.Context
{
    public class OnlinePaymentContext
    {
        private OnlinePaymentStrategy _strategy;
        private Client _client;

        public OnlinePaymentContext(Client client, OnlinePaymentStrategy onlinePaymentStrategy)
        {
            this._strategy = onlinePaymentStrategy;
            this._client = client;
        }

        public void executePayment()
        {
            Console.WriteLine($"Client {this._client.GetName()} paid the bill using { this._strategy.GetName() }");
            Console.WriteLine($"Payment id: {DateTime.Now.ToFileTime()}");
            this._strategy.Pay();
        }
    }
}
