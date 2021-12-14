using System;
namespace OnlinePayment.Interface
{
    public interface OnlinePaymentStrategy
    {
        public void Pay();

        public string GetName();
    }
}
