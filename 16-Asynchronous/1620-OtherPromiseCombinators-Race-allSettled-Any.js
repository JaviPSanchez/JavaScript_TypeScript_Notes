'use strict';

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

/*
Let's now quickly talk about the three other Promise combinators, which are race, allSettled and any. And the first one we're gonna talk about is Promise.race:

And Promise.race, just like all other combinators, receives an array of promises and it also returns a promise. Now this promise returned by Promise.race is settled as soon as one of the input promises settles. And remember that settled simply means that a value is available, but it doesn't matter if the promise got rejected or fulfilled. And so in Promis.race, basically the first settled promise wins the race.

But let's now actually see this in action. And I will create a quick IIFE here so that I can use async/await without like creating a whole new function with a name.
*/
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
//     getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
//   ]);
// })();
/*
And so as always then we use await Promise and in this case .race, and let's also now store it here as a response. And now here let's define an array of promises and lets just get getJSON function and try it with three countries. Let's say Italy, Egypt and then also Mexico.

And so now these three promises will basically race against each other, like in a real race. Now, if the winning promise is then a fulfilled promise, then the fulfillment value of this whole race promise is gonna be the fulfillment value of the winning promise. So that's more obvious than it maybe sound.

So let's just see the result here in the console:
*/
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();
//{name: "Italy", topLevelDomain: Array(1), alpha2Code: "IT", alpha3Code: "ITA", callingCodes: Array(1), …}
/*
And so we got Italy, but if we try it again, then maybe we get another result because then maybe another call is gonna be faster.


Okay, so again, just keep in mind that here in Promised.race, we only get one result and not an array of the results of all the three. Now a promise that gets rejected can actually also win the race. And so we say that Promise.race short circuits whenever one of the promises gets settled. And so again, that means no matter if fulfilled or rejected.

In the real world Promise.race is actually very useful to prevent against never ending promises or also very long running promises. For example, if your user has a very bad internet connection, then a fetch requests in your application might take way too long to actually be useful. And so we can create a special time out promise, which automatically rejects after a certain time has passed.

So let's do that. And it's gonna be similar to the wait function that we created earlier. But the difference is that this one is actually going to reject and not going to resolve. So this time let's actually pass in seconds, just to make it consistent with the other one.
*/
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000); //Para pasarlo a miliseconds
  });
};
/*
So return new Promise and execute a function. And again, in this case, we will not resolve but reject. And so here for the resolve function,  which is always the first one we can once again, use this throw away variable (_). So using this convention and then here reject and setTimeout and here we specify a callback function. And so we say that after a certain amount of seconds, let's call it sec like this actually.
So after this time has passed, we reject the promise. So we create a new error saying, "Requests took too long." And so now we can simply have the Ajax call that we were talking about earlier, raced against this timeout:
*/
// Promise.race([
//   getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
//   timeout(1),
// ]);
/*
All right, so let me show you what that means. So Promise.race,
and then here, the first promise, let's use again or getJSON but using another country, like Tanzania. And the second promise is then going to be our timeout. So let's say that we only want to wait like one second.
And so we will have these two then race against each other. And if the timeout happens first, then all of this here will be rejected, right?

And so basically that will then abort the fetch that is happening here in getJSON. So I could have used again ASYNC/Await, but why not use the then method also here?:
*/
Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));
/*
So in this case, let's just log the response or we could have called it data, but that's not really important here and here the error, and lets just also log to the console in case there is any. And so now we have :

"Error: Request took too long!"

But that was very fast.

I went here, we have to multiply it by a 1000 ⏫. So again, this one takes milliseconds and not just seconds. Okay, so we got to Tanzania pretty fast. And so it was faster than one second. And so therefore it did not timeout. But let's now try 0.1 seconds:
*/
Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(0.1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));
/*
And so now we see that the request took too long. So 0.1 seconds was not enough for this request here to get finished. And you will have to experiment with different values here because this is going to depend on your internet connection. So let's see 0.2 seconds. And so now the request was actually fast enough so that it didn't timeout.

So that's pretty useful, but of course in the real world you will use a larger number. Let's say like five seconds.

Now, okay, so that's Promis.race. But also Promise.all are by far the two most important promise combinators. But let me show you also the other two that we have.

So the next one is Promise.allSettled. And this one is a pretty new one. It is from ES2020 and it is actually a very simple one. So it takes in an array of promises again, and it will simply return an array of all the settled promises. And so again, no matter if the promises got rejected or not. So it's similar to Promise.all in regard that it also returns an array of all the results, but the difference is that Promise.all will short circuit as soon as one promise rejects, but Promise.allSettled, simply never short circuits. So it will simply return all the results of all the promises:
*/
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

/*
And so now here I will create actually the most basic example ever. So I will simply fake promises by saying Promise.resolve Success, all right.
And so you already know that this automatically creates a promise that is resolved.

And so we don't have to wait for anything to finish like this here:


Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(0.1),
])

Now, okay, and then here we can just call then and let's see. Now here we want actually all of the results. And so indeed here we get three results, even though one of them rejected, okay?

[{…}, {…}, {…}]
0: {status: "fulfilled", value: "Success"}
1: {status: "rejected", reason: "Error"}
2: {status: "fulfilled", value: "Another success"}
length: 3
__proto__: Array(0)

So this is the result of the three promises and yeah, so this is how they look like when we do them manually with resolve, reject and resolve.
Just contrast that with Promise.all, so that would then look different.
So here we would get an error, okay:
*/
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
/*
So of course we can also catch the error then. And so here we will simply get error and that's again... Because the Promise.all() combinator will short circuit if there is one error, if there is one rejected promise. So that's the difference between these two. But now let's go to the last one, which is Promise.any. So like this
*/
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));
/*
Now Promise.any is even more modern. It is ES2021 and actually at the time of recording, this one doesn't work in my browser, but probably by the time I'm releasing this course, it will work in the latest version of Google Chrome. And so let me simply do this here as well. So let me simply explain what it does. So as always Promise.any takes in an array
of multiple promises and this one will then return the first fulfilled promise and it will simply ignore rejected promises.

So basically Promise.any is very similar to Promise.race with the difference that rejected promises are ignored. And so therefore the results of Promise.any is always gonna be a fulfilled promise, unless of course all of them reject, okay.

And then maybe you can experiment a little bit with this to see the difference between all the four Promise combinators. And again, the most important ones are definitely Promise.all and Promise.race. So keep at least these two in mind for your own projects.
*/
