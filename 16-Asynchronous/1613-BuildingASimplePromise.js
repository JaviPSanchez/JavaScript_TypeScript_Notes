/*
So at this point of the section, you know all about consuming promises but we have never actually built our own promise. And so let's do that in this lecture. And let's go back to our lottery example from the slides and basically simulate a lottery using a promise here. And remember that in that example, a fulfilled promise means to win the lottery while a rejected promise means to lose.

So let's get to work and we create a new promise using the promise constructor. So that's new promise like this:
*/
new Promise(function () {});
/*
So just like many other built-in objects. And so what this means is that promises are essentially just a special kind of object in JavaScript. Now the promise constructor takes exactly one argument and that is the so-called executor function.

So we need to pass in a function. And so again, this one is called executor. Now, as soon as the promise constructor runs, it will automatically execute this executor function that we pass in. And as it executes this function here, it will do so by passing in two other arguments:
*/
new Promise(function (resolve, reject) {});
/*
And those arguments are the resolve and reject functions. So we will use them here in a second, but for now let's actually build this executor function. And also we should probably store the result.
*/
const lotteryPromise = new Promise(function (resolve, reject) {});
/*
All of this here we'll create a new promise that we're gonna store into this variable. Now this executor function that we specified here is the function which will contain the asynchronous behavior that we're trying to handle with the promise.

So this executor function should eventually produce a result value. So the value that's basically gonna be the future value of the promise. And so let's do exactly that right here in the executor function and starting with a simplified version.

Now, in our lottery example, let's say that we actually win in 50% of the cases and to lose in the other 50%:
*/
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve('You WIN 🎉');
  } else {
    reject('You lost your money 😫!');
  }
});

/*
And so what I'm gonna do is to simply generate a random number which remember is gonna be between zero and one. And so I can simply say, if this number here is greater or equal than 0.5, then I want to call the resolve function. And so now this is where this resolve function that was passed into the executor function comes into play.

In this situation here, we say that we win the lottery. And so therefore that means a fulfilled promise. And in order to set the promise as fulfilled, we use the resolve function. So basically calling the resolve function like this, will Mark this promise as a fulfilled promise, which we can also say a resolved promise. And that's the reason why this method here is called resolve. Now into the resolved function here we pass the fulfilled value of the promise so that it can later be consumed with the .then() method. So of course we are going to handle the results of this promise just like we handled any other promise with the .then() method.

So again, whatever value we pass into the resolve function here is gonna be the result of the promise that will be available in the .then() handler. And so in this case, let's simply pass in a string here and let's use some emoji again to make it a bit more fun.

And so now let's handle the opposite case. So where we basically want to Mark this promise as rejected. And so, as you can imagine for that we can call the reject function. Then into the reject function, we pass in the error message that we later want to be able in the catch handler, so in the catch method.



So just to quickly recap, before we consume this promise here, we created an executor function which is gonna be called by this promise constructor as soon as it runs, so basically immediately. Then the promise calls this function and passes in the resolve and the reject functions so that we can then use them to mark the promise as either resolved so as fulfilled or as to rejected.

And so you see that this promise is eventually going to move to either the fulfilled state or the rejected state. So we always need to make sure that the promise ends up in one of these two states. And so now it's time to actually try this out by consuming this promise that we just built:
*/
lotteryPromise.then();
/*
So lotteryPromise is going to be a promise object at this point. And so then as always, we can call the .then() method, and then just like before the .then() method needs a callback function that is going to be called with the resolved value of the promise. So let's call this res here and then let's simply log it to the console:
*/
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));
/*
And of course, once again, this could be any name here. And now let's also catch any errors, then so here also as always, we will simply log it to the console as an error.

And so as we keep doing this, we can see the different States that the promise will take. So that's amazing but however, right now this is not really asynchronous yet.

So let's actually simulate this lottery draw by adding a simple timer. And so this timer will then simulate the time data is passed between buying the lottery ticket
and actually getting the result. So let's add a set time out here and we will add also a new error object in the reject 
*/
const lotteryPromise = new Promise(function (resolve, reject) {
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
because now by using this timer, we did actually encapsulate some asynchronous behavior into this promise. And so that's the whole point of promises in the first place.

And so indeed actually creating a new error object is actually a bit better. Great, so this is how we encapsulate any asynchronous behavior into a promise.

And then all we have to do is to consume that promise like this:
*/
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));
/*
And so this is a really nice and helpful pattern. Now, in practice, most of the time all we actually do is to consume promises. And we usually only built promises
to basically wrap old callback based functions into promises. And this is a process that we call promisifying. So basically promisifying means to convert callback based asynchronous behavior to promise based.

PROMISIFYING SETTIMEOUT

Let's see that in action a little bit. And so what we're gonna do is to actually promisify the set timeout function and create a wait function.

So let's create a function called wait:
*/
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
/*
and this function is going to take in a number of seconds. And so now inside of this function we will actually create and return the promise. And so this will then encapsulate the asynchronous operation even further.

As I was saying, we are going to return a new promise and then our executor function as always, and then resolve. And in this case, we actually don't even need the reject function. And that's because it's actually impossible for the timer to fail.

And so here we don't even need to specify debt reject parameter. It's just like the array methods like map which always receive three arguments but most of the time we just use one or two of them. And so this is similar, but anyway, all we have to do now is to use set timeout. And then here the callback function that we want to be called after a certain time is exactly the resolve function.

Now, here, we want to run that timer for a certain amount of seconds, so we need to multiply that by 1000. And so that's actually already it.

So let's call or wait function:
*/
wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));
/*
And so this will now create a promise that will wait for two seconds and after these two seconds, it will resolve. And so just like before we now have to return a new promise here, so return, wait, and this time just one second.

And so this is exactly what we did before when we wanted to chain two sequential Ajax calls using the fetch function. So in the result of the first fetch, we would create a new fetch and return it. And so that's what we're doing here, and so then therefore all of this returns a new promise and then we can one more time handle that. And let's just say again, I waited for one second.

And so now with this, we have once again a nice chain of asynchronous behavior that happens nicely in a sequence and all without the callback hell. So before I actually showed you what happened when we had multiple timers:
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
And so basically we could do now this same thing like this:
*/
wait(1)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 5 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 6 second'));
/*
And so that's going to be exactly the same result as we had before. Now we no longer have the ugly and difficult to understand callback hell, but instead we have this nice sequence of asynchronous behavior.

Now finally there is also actually a way to very easy create a fulfilled or a rejected promise immediately. And we had actually already done that in the previous lecture, but it's always good to know that we can do this so let me show it to you again. So we can use promise.resolve:
*/
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
/*
And so basically this is a static method on the promise constructor. And so here we can then pass in the resolved value, so just like we would pass to resolve value right here. Again, the difference is that this one here will resolve immediately.

So here, it doesn't matter. So just abc and then we can handle that. And so again, the values here don't matter and then we can also do the same with reject. And so these two here should now appear at the very beginning. So here is abc and then the error.

So this is how we built our own promises and how we promisify a very simple callback based asynchronous behavior function such as set timeout.
*/
