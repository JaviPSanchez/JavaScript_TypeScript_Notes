'use strict';

/*
🔍 Define what a promise is and describe its applications.
En la leccion anterior hemos visto un poco el CALLBACK HELL, So in this lecture, let's learn about
a modern JavaScript feature called promises, so that we can escape callback hell. However, before we
learn about promises, we should actually see one. And so let's now replace the old XML HTTP request
function with the modern way of making AJAX calls wich is the Fetch API.
*/
fetch('https://restcountries.eu/rest/v2/name/spain');
const request = fetch('https://restcountries.eu/rest/v2/name/spain');
console.log(request); // Promise returned: pending
/*
What exactly is a promise and what can we do with it?

So the formal definition of a promise is that it's an object that is used basically as a placeholder
for the future result of an asynchronous operation. Let's say that a promise is a container for a
future value. Like a lotery ticket! We buy the promise of winning the prize! The lottery draw happens
in an asynchronous way. if we win the lottery the promise is fulfilled otherwise is rejected.

Now, what's the big advantage of using promises?

Well, there are two of them actually, first by using promises, we no longer need to rely on events
and callback functions to handle asynchronous results, events and callback functions can sometimes
cause unpredictable results. And so this is a big win!

secondly, and even better, we can chain promises for a sequence of asynchronous operations
instead of nesting like in callback hell.

<cmg img/Picture24.jpg>

Now, since promises work with asynchronous operations, they are time sensitive. So they change over
time. And so promises can be in different states and this is what they call the cycle of a promise.

Pending asynchronous tasks --> Settled (after a period of time) --> Fulfilled || rejected

<cmg img/Picture25.jpg>

An error could be when the client is offline so we can´t connect to the server. Now these different
states are very important to understand because when we use promises in our code, we will be able to
handle these different states in order to do something as a result of either a successful promise or
a rejected one.

Another important thing about promises is that a promise is only settled once. And so from there,
the state will remain unchanged forever. So the promise was either fulfilled or rejected, but it's
impossible to change that state. Now, these different states that I showed you here are relevant and
useful when we use a promise to get a result, which is called, to consume a promise.

<cmg img/Picture26.jpg>
*/
