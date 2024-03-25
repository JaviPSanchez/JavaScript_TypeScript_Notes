/*
So basically, callback hell is when we have a lot of nested callbacks in order to execute
asynchronous tasks in sequence. This happens for all asynchronous tasks, which are handled
by callbacks. So for example, let's say we have a set timeout function. And then here, we
want to log something to the Console, like 1 second passed, but then also, we want to start
another timeout and another inside and so on...
*/
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
/*
And so here we have a callback hell. And in fact, callback hell is pretty easy to identify
by the triangular pattern. Now, the problem with callback hell is that it makes our code
look very messy. Fortunately for us, since ES6, there is actually a way of escaping
callback hell by using something called PROMISES. And so let's now take the next step
in our journey of asynchronous JavaScript, which is to learn all about promises.
*/
