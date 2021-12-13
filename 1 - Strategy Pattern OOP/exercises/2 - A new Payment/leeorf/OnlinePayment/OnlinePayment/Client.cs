using System;
namespace OnlinePayment
{
    public class Client
    {
        private readonly string _name;

        public Client(string name)
        {
            this._name = name;
        }

        public string GetName()
        {
            return this._name;
        }
    }
}
