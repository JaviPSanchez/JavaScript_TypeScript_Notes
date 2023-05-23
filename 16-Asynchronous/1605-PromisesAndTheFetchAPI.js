'use strict';

/*
En la leccion anterior hemos visto un poco el CALLBACK HELL, So in this lecture, let's learn about a modern JavaScript feature called promises, so that we can escape callback hell.

However, before we learn about promises, we should actually see one. And so let's not replace the old XML HTTP request function with the modern way of making AJAX calls. And that is by using the Fetch API.

So let me go up here to our first function, just to see how it used to work and
how we can do it now.
*/
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
request.send();
/*
So this is how we used to do it. And now all we need to do is to call fetch and then with our URL! haremos el ejemplo con españa.
*/
fetch('https://restcountries.eu/rest/v2/name/spain');
/*
And that's actually it, all we have to do now is to store the results into a variable and let's still call it request here:
*/
const request2 = fetch('https://restcountries.eu/rest/v2/name/spain');
/*
Now there are actually some more options that we can specify here in the fetch function, if we'd like, but to make a simple get request like this one, all we really need is to pass in the URL and that's it.

So for more complex AJAX calls, the fetch function can take in like an object of options as well. But again, for now, we don't need that:
*/
console.log(request2);
/*
Promise {<pending>}
__proto__: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: Response
*/
/*
And so you see that the fetch function immediately returned a promise here. It says pending. So if we open that up, then here it says fulfilled.

What exactly is a promise and what can we do with it?

So the formal definition of a promise is that it's an object that is used basically as a placeholder for the future result of an asynchronous operation.
And if that sounds weird to you, we can also say that a promise is like a container for an asynchronously delivered value or even less formal.
Let's say that a promise is a container for a future value.

<cmg img/Picture22.jpg>

the perfect example of a future value is the response coming from an AJAX call.
So when we start the AJAX call, there is no value yet, but we know that there will be some value in the future.
And so we can use a promise to handle this future value. I like to use the analogy of a lottery ticket.
So a promise is just like a lottery ticket. So when I buy a lottery ticket, essentially I buy the promise that
I will receive some amount of money in the future if I guess the correct outcome, right?
So I buy the ticket now with the prospect of winning money in the future and the lottery draw which determines if
I get the money or not happens asynchronously.

So of course I don't have to drop everything and keep waiting until the lottery draw happens, right?
Now, in case I did get the correct outcome, then I will receive my money because I have my lottery ticket, which is the promise that I bought.

<cmg img/Picture23.jpg>

Now, what's the big advantage of using promises? Well, there are two of them actually,
first by using promises, we no longer need to rely on events and callback functions
to handle asynchronous results, events and callback functions can sometimes cause unpredictable results.
And so this is a big win already, but even better with promises, we can chain promises for a
sequence of asynchronous operations instead of nesting like we did in the last video.
And with this, we can finally escape callback hell, which was our initial goal all along and by the way,
promises are an ES6 feature. So they became available in JavaScript in 2015. And so by now, they are widely used by everyone.

<cmg img/Picture24.jpg>

Now, since promises work with asynchronous operations, they are time sensitive.
So they change over time. And so promises can be in different states and this is what they call the cycle of a promise.
So in the very beginning, we say that a promise is pending.
And so this is before any value resulting from the asynchronous task is available.

Now, during this time, the asynchronous task is still doing its work in the background.
Then when the task finally finishes, we say that the promise is settled and there are two different
types of settled promises and that's fulfilled promises and rejected promises.
So a fulfilled promise is a promise that has successfully resulted in a value just as we expect it.

For example, when we use the promise to fetch data from an API, a fulfilled promise successfully get that data, and it's now available to being used.
On the other hand, a rejected promise means that there has been an error during the asynchronous task:

<cmg img/Picture25.jpg>

And the example of fetching data from an API, an error would be for example, when the user is offline and can't connect to the API server.
Now these different states are very important to understand because when we use promises in our code,
we will be able to handle these different states in order to do something as a result of either a successful promise or a rejected one.

Another important thing about promises is that a promise is only settled once. And so from there, the state will remain unchanged forever.
So the promise was either fulfilled or rejected, but it's impossible to change that state.
Now, these different states that I showed you here are relevant and useful when we use a promise to get a result, which is called, to consume a promise.

<cmg img/Picture26.jpg>

So we consume a promise when we already have a promise, for example, the promise that was returned from the fetch function,
right at the beginning of this video, remember. But in order for a promise to exist in the first place, it must first be built.
So it must be created in the case of the fetch API, it's the fetch function that builds the promise and returns it for us to consume.

So in this case, we don't have to build the promise ourselves in order to consume it.
Now, most of the time we will actually just consume promises, which is also the easier and more useful part.
And so that's what we will do in the next couple of videos. But sometimes we also need to build a promise and to not just consume it.
And of course, we will also learn how to do that a bit later.

Alright. And so now let's actually start using promises in the next video.
*/
