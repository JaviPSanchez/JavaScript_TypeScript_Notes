/*
Let me now quickly, show you some of the stuff, that we just learned and practice.
And so let's now build an extremely simple example. So I will start by simply logging test, start to the console:
*/
console.log('Test start');
/*
Then, afterwards I will create a set time out, with something that will just also lock something to the console only. So zero second timer:
*/
setTimeout(() => console.log('0 seconds timer'), 0);
/*
And so that's because we will fire this timer after exactly zero seconds. Okay. So basically this is a timer,
which should call this timer function exactly after zero seconds.
So what that means is that after zero seconds, this callback will be put on the callback queue, right?

Then next up, let's build a promise that resolves immediately.
So this is something that we will learn in the next video actually.
And so for now, just follow what I'm writing here.
So promise that resolve, basically allows us to build a promise, so to create a promise that is immediately resolved.
So one that immediately has a success value. And so that fulfilled, success value, is gonna be this one we passed in here:
*/
Promise.resolve('Resolved promise 1').then(res => console.log(res));
/*
So "resolved promise one", and then we can handle that resolved promise.
And so that, our response we can then simply log it to the console.
So, just like in any other promise, we can handle it with a .then() method.
And this callback function here, will get called with the resolved value, as an argument.
And so in this case, the result value of that promise, is this one here that we just specified.

And now just to finish, let's just log another string test:
*/
console.log('Test end');
/*
And, and so for now, that's actually it. So in what order do you think that these four messages, that we have here, will be logged to the console?
And I want you to really think about this and maybe even pause the video, and write it down.

Well, let's think about this together before we actually check out the result.
So the first two messages that are gonna be printed should be pretty obvious,
that's because we already know that any top level of code. So code outside of any callback, will run first.
And so of course, the first two logs will come from these two synchronous:

Test start 👉🏋️‍♀️ sync
Test end 👉🏋️‍♂️ sync
Resolved promise one
0 seconds timer

But now between the timer, and the resolved promise here, it might be a little bit trickier.
So both the timer and a promise, will finish at the exact same time. So both right after zero seconds.

So the timer, because we told it to finish after zero seconds and a promise because we told it to immediately become resolved. Right?

And so therefore, they will both finish at the exact same time. So which one do you think will be handled first or in other words
which of these two callbacks here will be executed first?
Well, the timer appears first in the code and so it kind of finished first.
And so it's callback, will be put on the callback queue first, but does that mean that this call back here will be executed first?

Well, actually, no, it doesn't. And that's because of the micro-tasks queue, remember?
So the callback of the resolved promise here, so this one will be put on the micro-tasks queue and this micro-tasks queue,
as you learned in the last video has priority over the callback queue.
And so after this whole code runs, we will have one callback in a callback queue and one in a micro-tasks queue.

And therefore the one from the micro-task queue should be executed first.
And so therefore the callback from the micro-tasks queue should be executed first.
And so that's this one here and therefor the first message to appear of these two, should be resolved Promise one.
So what I told you in the last lecture is actually true.


Now, remember that the implication of the fact that micro-tasks have priority
over regular callbacks, is that if one of the micro-tasks takes a long time to run,
then the timer will actually be delayed and not run after the zero seconds that we specified here, right?
So instead it will run a little bit later just after the micro-task is actually done with its work. And so to finish this lecture,
let's actually simulate what I just said. So here I will create another promise,
that will immediately resolve:
*/
Promise.resolve('Resolved promise 2').then(res => {
  //Heavy task
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});

/*
So let's just say resolved promise two, and then again, we can handle it here. And then as always, we want to log, the result to the console.
But before we doing that, we actually want this callback function to have a really heavy task, which should take a lot of time.
And so let's simulate that this callback takes a long time to run, by looping over a large number.
So we can do the simulation simply, with an old school for loop.



And so by doing that, I can show you that the callbacks in the callback queue, will indeed be delayed and not run after zero seconds.
So let's try this now, and you see, that now only after all this work,
the zero second timer message appeared on the screen.
And so this is actual proof that these zero seconds that we have here are not a guarantee. Okay.

And that is exactly what I wanted to show you. So this means, that you cannot really do high precision things using JavaScript timers.
So just keep that in mind, whenever you are working with promises. So basically with micro-tasks, and with timers at the same time. Okay.


And so now we're ready to go back to some more practical aspects of asynchronous JavaScript,
and that will be to create promises from scratch in the next video.
*/
