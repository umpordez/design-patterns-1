using System;
using OnlinePayment.Interface;

namespace OnlinePayment.Context
{
    public class OnlinePaymentContext
    {
        private OnlinePaymentStrategy _strategy;

        public OnlinePaymentContext(OnlinePaymentStrategy onlinePaymentStrategy)
        {
            this._strategy = onlinePaymentStrategy;
        }

        public void executePayment()
        {
            this._strategy.Pay();
        }
    }
}
