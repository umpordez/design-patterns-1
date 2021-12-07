## TODO

Well, now that we have a payment for our online store, our BOSS wants
to implement a new PaymentMethod for BravaPay :)

- [x] Implements a `BravaPay.pay()` method
- [x] Must log a message that is calling bravapay `BravaPay calls api` (or
something like that)
- [x] Must return a `new Date().getTime()`

Expected output is:

```
BravaPay calls api

YourName paid the bill using BravaPay
Payment id: 1638870064559
```

the `Payment id` will vary, since every time we call `new Date().getTime()`
it returns a different number
