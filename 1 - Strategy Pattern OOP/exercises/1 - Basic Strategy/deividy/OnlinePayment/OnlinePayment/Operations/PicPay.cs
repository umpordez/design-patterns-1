using System;
using OnlinePayment.Interface;

namespace OnlinePayment.Operations
{
    public class PicPay : OnlinePaymentStrategy
    {
        public PicPay()
        {
        }

        public void Pay()
        {
            Console.WriteLine("Calling PicPay api...");
        }
    }
}
