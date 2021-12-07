## TODO

Well, now that we have a payment for online payment page, our BOSS wants
to implement a new PaymentMethod for BravaPay :)

- [ ] Implements a `BravaPay.pay()` method
- [ ] Must log a message that is calling bravapay `BravaPay calls api` (or
something like that)
- [ ] Must return a `new Date().getTime()`

Expected output is:

```
BravaPay calls api

Deividy paid the bill using BravaPay
Payment id: 1638870064559
```

the `Payment id` will vary, since every time we call `new Date().getTime()`
it returns a different number
