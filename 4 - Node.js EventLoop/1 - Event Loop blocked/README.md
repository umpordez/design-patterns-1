# TODO

Well, we are having hard times trying to make this app works, looks like
everytime it starts the timeout, it blocks the event loop in 3s.

To fix that, we can use two approaches;
- uses [`child_process.spawn()`](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options)
and move the `setInterval()` to a new file/process
- uses [`cluster`](https://nodejs.org/api/cluster.html) to initialize a new thread just for this set interval

- [ ] Fixes event loop block

Expected output is something like this:
```
Interval took: 1005
Interval took: 1006
Interval took: 1005
Blocking event loop
Interval took: 1001
Interval took: 1003
Interval took: 1003
```

The took of interval should never be 3000+
