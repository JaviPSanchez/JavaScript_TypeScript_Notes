import './main.css';

/*
So at this point of the section, you know all about consuming promises but we have
never actually built our own promise. And so let's do that in this lecture. And
let's go back to our lottery example and basically simulate a lottery
using a promise here.

👉 fulfilled promise means to win the lottery while a rejected promise means to lose.

So let's get to work and we create a new promise using the promise constructor.
*/
new Promise(function () {});
/*
So just like many other built-in objects. And so what this means is that promises
are essentially just a special kind of object in JavaScript. Now the promise constructor
takes exactly one argument and that is the so-called executor function whcich accept
two arguments!, resolve and reject functions
*/
const firstLotteryPromise = new Promise(function (resolve, reject) {});
console.log(firstLotteryPromise);

/*
Now this executor function that we specified here is the function which will contain
the asynchronous behavior that we're trying to handle with the promise. So this executor
function should eventually produce a result value. So the value that's basically gonna
be the future value of the promise.

Now, in our lottery example, let's say that we actually win in 50% of the cases and
to lose in the other 50%:

👉 resolve method --> fulfilled promise
👉 reject method --> rejected promise
*/
const secondLotteryPromise = new Promise(function (resolve, reject) {
  //number between 0 - 1
  if (Math.random() >= 0.5) {
    //Fulfilled value
    resolve('You WIN 🎉');
  } else {
    //Rejected value
    reject('You lost your money 😫!');
  }
});
/*
So just to quickly recap, before we consume this promise here,
we created an executor function which is gonna be called by
this promise constructor as soon as it runs, so basically immediately.
Then the promise calls this function and passes in the resolve and the reject
functions so that we can then use them to mark the promise as either
resolved so as fulfilled or as to rejected.

And so then as always, we can call the .then() method, and then just like
before the .then() method needs a callback function that is going to be
called with the resolved value of the promise. Let´s also cath errors
*/
secondLotteryPromise
  .then(res => console.log(res))
  .catch(err => console.log(err));
/*
So that's amazing but however, right now this is not really asynchronous yet.

So let's actually simulate this lottery draw by adding a simple timer. This timer
will then simulate the time data is passed between buying the lottery ticket
and actually getting the result. So let's add a set time out here and we will
add also a new error object in the reject 
*/
const thirdLotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🛫');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 🎉');
    } else {
      reject(new Error('You lost your money 😫!'));
    }
  }, 2000);
});

/*
And so with this, we made this whole promise here make a little bit more sense
because now by using this timer, we did actually encapsulate some asynchronous
behavior into this promise. And so that's the whole point of promises in the
first place. Great, so this is how we encapsulate any asynchronous behavior
into a promise.

And then all we have to do is to consume that promise like this:
*/
thirdLotteryPromise
  .then(res => console.log(res))
  .catch(err => console.log(err));
/*
And so this is a really nice and helpful pattern. Now, in practice, most of the
time all we actually do is to consume promises. And we usually only built promises
to basically wrap old callback based functions into promises. And this is a process
that we call promisifying. So basically promisifying means to convert callback
based asynchronous behavior to promise based.

PROMISIFYING SETTIMEOUT

Let's see that in action a little bit. And so what we're gonna do is to actually
promisify the set timeout function and create a wait function. In this case, we
actually don't even need the reject function because it's actually impossible
for the timer to fail. 
*/
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
//So let's call or wait function, after 2 seconds it will be resolved
wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    //We have to return a new promise
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));
/*
And so this is exactly what we did before when we wanted to chain two sequential
Ajax calls using the fetch function. So in the result of the first fetch, we would
create a new fetch and return it. And so that's what we're doing here, and so then
therefore all of this returns a new promise and then we can one more time handle that.


CallBack-Hell VS Promises
*/
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
/*
And so basically we could do now this same thing like this:
*/
// wait(1)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 3 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 4 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 5 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 6 second'));
/*
And so that's going to be exactly the same result as we had before.
Now we no longer have the ugly and difficult to understand callback hell,
but instead we have this nice sequence of asynchronous behavior.

Now finally there is also actually a way to very easy create a fulfilled
or a rejected promise immediately.
*/
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
/*
And so basically this is a static method on the promise constructor. And
so here we can then pass in the resolved value! These two here should
now appear at the very beginning.
*/
