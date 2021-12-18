# Node.js and EventLoop

The Node.js EventLoop is basically an implementation of the Observer Pattern.


It has the main thread (which is responsible to process your JavaScript code),
a thread to compile your code, and some other threads for garbage collector and
dead code eliminator (some optimizations)


When you write a code in JavaScript, the main thread will get this code
and send it to another thread for processing/execution after that
the main thread is ready to get new code, once the code is done it will return
to the main thread and to the user land. If you look careful for this, you
will see that this is basically the Observer pattern in action.


Main Thread > (execution threads) > Main Thread > (execution threads)

Further reading;

- https://blog.deividy.com/post/2018-02-06-funcionamento-interno-nodejs.html

![event loop](./event-loop.png)
