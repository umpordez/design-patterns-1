## TODO

- [x] Implements `pay(order, paymentAdapter)` function
- [x] Implements `paymentAdapters.paypal()` function

Expected output is something like:

```
$ node online-store.js

Making order: #1639093741171 for Deividy
💰 Paying order: #1639093741171 with PagSeguro...

Payment made! Confirmation number: #1639093741176
```

The numbers will vary since we are using a `new Date().getTime()` for ids
