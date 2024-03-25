'use strict';

/*
So now that you're super comfortable with consuming promises and also building promises, let's turn
 our attention back to actually consuming promises that's because since ES 2017, there is an
 even better and easier way to consume promises, which is called ASYNC/AWAIT.

So let me show you how it works. So we start by creating a special kind of function, which is an
ASYNC function. So in this lecture, we will basically recreate the whereAmI() function that we
have been building:
*/
const whereAmI = function (country) {};
/*
We will pass in the country again, to make it simple at the beginning. But as I was saying, we
now need to make this a special kind of function, which is an ASYNC function. And we do this by
simply adding ASYNC here in front of the function:
*/
const whereAmI = async function (country) {};
/*
And so this function is now an asynchronous function. So a function that will basically keep
running in the background while performing the code that is inside of it, then when this function
is done, it automatically returns a promise, but more on that in the next video for now,
what's important is that inside an ASYNC function, we can have one or more await statements:
*/
const whereAmI = async function (country) {
  await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
};
/*
And so in an ASYNC function like this one, we can use the await keyword to basically await for
the result of this promise. So basically await will stop the code execution at this point of the
function until the promise is fulfilled. And so until the data has been fetched in this case.

You might think isn't stopping the code, blocking the execution? Well, that's a really good
question, but the answer is actually no, with async functions we are running asynchronously in
the background. And so therefore it is not blocking the main threat of execution. So it's not
blocking the call stack. And in fact, that's, what's so special about a single await.

So it's the fact that it makes our code look like regular synchronous code while behind the
scenes everything is in fact asynchronous. But anyway, as soon as this promise here is resolved,
then the value of this whole await expression that we have here is going to be the resolved value
of the promise. And so we can simply store that into a variable, que llamaremos res por response.
*/
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  console.log(res);
};
/*
And just to show you that this function here is actually asynchronous. Let's log something to the
console before we call it:
*/
whereAmI('spain');
console.log('First');
/*
But even by doing this, this console.log will be displayed first, because again, this is an ASYNC
function. And so this Fetcher will be running in the background without blocking our mainthreat.


So you see here that by using ASYNC/Await or asynchronous code here, really looks and feels like
synchronous code. So we can simply await until the value of the promise is returned basically.
And then just assign that value to a variable. Something that was impossible before. So before we
had to mess with callback functions and that was true in callback hell, but also by consuming
promises with the then method. But now with ASYNC/Await, that is just completely gone.


Now, before you start using ASYNC/Await all over the place, you need to first understand that
ASYNC/Await is in fact, simply syntactic sugar over the .then() method in promises. So, of course
behind the scenes, we are still using promises.


So now that we know how ASYNC/Await works,

it's time to actually recreate the whereAmI function?

So first off we need to get the JSON out of this response, right? And so remember on the response, we need to call .json():
*/
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  /*
    and remember that this itself returns a new promise. And so previously we would have to return this promise and then chain another then handler. But now this becomes so much easier. All we have to do is to, again, await this and then we can store the results directly into the data variable that we have been using before.
  */
  const data = await res.json();
  console.log(data);
};

/*
So here is the same data as before. And so now all we need to do is to render it:
*/
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  /*
      and remember that this itself returns a new promise. And so previously we would have to return this promise and then chain another then handler. But now this becomes so much easier. All we have to do is to, again, await this and then we can store the results directly into the data variable that we have been using before.
    */
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};
btn.addEventListener('click', function () {
  whereAmI('spain');
});
console.log('First');
/*
And all without the chaining of promises like we had before. So this is really elegant.
One more time, simply being able to essentially store the fulfilled promise value immediately
into a variable without having to mess with callback functions.

But now let's actually finish the function here with all the other functionality as well.
So with geolocation and also reverse geo-coding. So for that, we need to get our promise
that we built before for geolocation,  So this one here:
*/
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// /*
// And so get positioned, remember it doesn't need any arguments. And so, as you know, all we have to do is to now await this and then store the result into a variable.
// */
// //Geolocation
// const whereAmI = async function (country) {
//   /*
//     And just like before let's simply destructor this. We also need the reverse geo coding. Right? So what we want here is to get the latitude and longitude from position.coords.
//     */
//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;
//   // Reverse geocoding
//   const resGeo = await fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=949449785238995372407x102421`
//   );
//   const dataGeo = await resGeo.json();
//   console.log(resGeo);

//   //Country data

//   const res = await fetch(
//     `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//   );
//   /*
//     And so now again, it becomes a lot easier to basically chain promises because we don't have to return anything. We don't have to create new then methods and we don't have to create new callback functions. So all we have to do is to await this and store the results into some variable.
//   */
//   const data = await res.json();

//   console.log(data);
//   renderCountry(data[0]);
// };
// btn.addEventListener('click', function () {
//   whereAmI('spain');
// });
// console.log('First');
/*
And so again, here at the country property, we got Spain. And so now we can plug that into this URL:

const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
  );

So that's going to be dataGeo.country. And so now we can eliminate the country from the function and we also don't need to pass it anymore when calling the function with the button click:

*/
const whereAmI = async function () {
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;
  // Reverse geocoding
  const resGeo = await fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=949449785238995372407x102421`
  );
  const dataGeo = await resGeo.json();
  console.log(resGeo);

  //Country data

  const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
  );

  const data = await res.json();

  console.log(data);
  renderCountry(data[0]);
};
btn.addEventListener('click', whereAmI);
/*
So let's just take a minute and appreciate how beautiful this data flow here is.

And so we now have all of this in one nice ASYNC function that runs behind the scenes until everything here is finished. So we are awaiting here one, two, three, four, five promises in a very easy way. A code that now actually looks and feels like normal synchronous code. So to me personally, this ASYNC/Await feature was really a huge, huge addition to the JavaScript language.

Now, again, just keep in mind that ASYNC await is just synthetic sugar over consuming promises. So it's a bit like classes in JavaScript, which also hides the true nature of how things work behind the scenes. But I think that's no problem. At least if you already know exactly how promises and asynchronous JavaScript actually do work behind the scenes.

And we spent a lot of time in this section learning all that. And so I'm sure that you will be fine. Also ASYNC/Await is actually used a lot together with the
more traditional then method of consuming promises as we will see in the next video.

Now, let me just tell you something, which is when we reload too fast, then we should get four or three errors. And so with those errors, our whole example here falls apart. So we get this cascade of errors here and nothing works anymore. And the reason for all of these errors here is because right now we actually don't have any error handling here. And so let's fix that in the next video.
*/
