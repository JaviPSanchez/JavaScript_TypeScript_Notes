'use strict';

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

/*
Let's now imagine that we wanted to get some data about three countries at the same time,
but the order in which the data arrives does not matter at all.
So let's now implement an async function, using everything that we know at this point,
and that this function will simply take in three countries and it will lock the capital cities of these three countries as an array:
*/
const get3Countries_v1 = async function (c1, c2, c3) {
  try {
    await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
  } catch (err) {
    console.log(err);
  }
};

// get3Countries_v1('portugal', 'canada', 'tanzania');
/*
So let's say get3Countries. And again, it's an async function. So country one, two, and three, and then an async function, we really always need to wrap our code
into a try catch block, okay? So never work an async function without this. And again, in a real world scenario, you would do real error handling and not just log it to the console. Okay, so await, and then let's use our getJSON function that we coded at some point at the beginning of this section.

So here at the top of my file, I have this getJSON function, which remember, encapsulates the fetch request ansd the error handling also. So basically when there is an error in its fetch, it will throw a new error and it also immediately converts the response to JSON.

So getJSON, and then here again, we're using our rest countries API, so let me get to the URL. So here we now will use c1, and so then we store that data into a variable just like this:
*/
const get3Countries_v2 = async function (c1, c2, c3) {
  try {
    //So let's use destructuring to take the first element there.
    const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.log(err);
  }
};

/*
So this is the magic of ASYNC/Await, all right? Now we already know that the result of this is gonna be an array with one object.

And now let's simply duplicate the code three times.
So creating three variables for these three countries, and then what we want to get is the capital.
So now let's say data1.capital, because there is such a property in each of these objects.
And so remember that we want to return an array here, and so that's what we're doing:

And so this should actually already work, all right? So let's call this function:
*/
// get3Countries_v2('portugal', 'canada', 'tanzania');
/*

 ["Lisbon", "Ottawa", "Dodoma"]
0: "Lisbon"
1: "Ottawa"
2: "Dodoma"
length: 3
__proto__: Array(0)

So here we get the three capital cities of the three countries. So great, this works just fine, and also at a first sight,
there seems to make sense. But if we think about what we did here, then maybe it actually doesn't make so much sense
because what we did here basically was to run all these Ajax calls one after another,
even though the result of the second one here does not depend on the first one,
and the result of the third one does also not depend on any of the other ones.

And so actually this doesn't make much sense. Why should the second Ajax call wait for the first one?
And actually let's take a look at this in our network tab here as well.

<cmg img/Picture36.jpg>

Okay, so down here, we actually have the three Ajax calls. And so basically these bars that you see there is JavaScript downloading something.
So here, of course, the first one is the HTML, CSS and JavaScript, so nothing strange there,
but then here we load the data for Portugal, right? So that's the first Ajax call.
And then after that has finished, we load the data for Canada, and then after that has finished, we download the data for Tanzania.
So just as we have it here in the code, and so as I explained, that doesn't make a lot of sense.

So instead of running these promises in sequence, we can actually run them in parallel, so all at the same time.
And so then we can save valuable loading time, making these three here, basically load at the same time.
And each of them takes half a second.
And so with that, we will basically save one second, which is actually a lot of time when loading a website.

So let's do that, and for doing that, we use the promise.all combinator function:
*/
const get3Countries_v3 = async function (c1, c2, c3) {
  try {
    /*
        And so the METHOD .all() is kind of a helper function on this promise constructor.
        So it's a static method, right? Now, this function here takes in an array of promises,
        and it will return a new promise, which will then run all the promises in the array at the same time.
    */

    Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.log(err);
  }
};
// get3Countries_v3('portugal', 'canada', 'tanzania');
/*

So as I said, this here, we'll return a new promise, so a promise that runs all of these promises at the same time. And so then we can handle that promise in the exact same way as before.

So that's called the result data, and then await it here:
*/
const get3Countries_v4 = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
get3Countries_v4('portugal', 'canada', 'tanzania');

/*
and then log the data to the console. And so yeah, you see once again that these three now loaded exactly at the same time.
So they are running in parallel, no longer in sequence now:

<cmg img/Picture37.jpg>

So that's all I wanted to show you, so let's go back here. Okay, and so indeed here we get the result

(3) [Array(1), Array(1), Array(1)]
0: [{…}]
1: [{…}]
2: [{…}]
length: 3
__proto__: Array(0)

So an array, which in this case returns three arrays and each of them is of course the object we're looking for.
And so Promise.all() receives an array and it also returns an array.
And so to create the same output as before, now, all we have to do is to loop over this data and take out the data that we want:
*/
const get3Countries_v5 = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(items => items[0].capital));
  } catch (err) {
    console.log(err);
  }
};
get3Countries_v5('portugal', 'canada', 'tanzania');

/*
So we use a data.map method, because remember that we want to actually return an array, but not this array, but simply an array with all the capital cities. So in this array of data, each element, let's call it d, which stands for data. So d is now this single array. So from d we want to take element zero and then on there,
we want the capital city:

3) ["Lisbon", "Ottawa", "Dodoma"]

Now, just one thing that's also very important to mention here is that if one of the promises rejects,
then the whole Promise.all() actually rejects as well. So we say that Promise.all() short circuits when one promise rejects.


Great, so whenever you have a situation in which you need to do multiple asynchronous operations at the same time,
and operations that don't depend on one another, then you should always, always run them in parallel,
just like we did here using Promise.all(). And this is actually more common than you might think.

And so please keep this technique in mind because your users will thank you.

Okay, and that's the Promise.all() combinator. So it's called a combinator function because it allows us to combine multiple promises.

There are actually other combinator functions, so let's take a look at them right in the next session.
*/
