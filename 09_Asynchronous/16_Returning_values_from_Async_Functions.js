'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=949449785238995372407x102421`
    );

    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    //Country data

    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    if (!res.ok) throw new Error('Problem getting Country data');

    const data = await res.json();

    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err}😫`);
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};

// console.log('1: Will get location');

// btn.addEventListener('click', whereAmI);

// console.log('2: Finished getting location');
/*

At this point, we have a pretty good idea of how to work with async/await, right?
However, there is one important thing missing. So right now, it might still be a
little bit unclear what an async function actually is and how it works. And so let's
now fix that. So to understand a bit better, what's actually happening here.


But now let's say that we wanted to return some data from this function, all right?


And so here at the end let's now say we wanted to return a string like we had previously based on the geocoding data:

return `You are in ${dataGeo.city}, ${dataGeo.country}`

And so for now, let's pretend that this is simply a regular function and then we would do this, we would simply define a variable:
*/
console.log('1: Will get location');

const city = whereAmI();
console.log(city);

console.log('3: Finished getting location');

/*
What do you think is going to happen here in this case? Well, let's see:

1: Will get location
Promise {<pending>}
3: Finished getting location

And so the second thing that is logged to the console here is this promise. And remember that back then, when we first started to work with async/await, I told you that an async function always returns a promise. And so here is the proof for that. And if we think about this, then it actually makes sense that here we get a promise and not the value that we would like to get:

`You are in ${dataGeo.city}, ${dataGeo.country}`

So the string here, right? The reason for that is that at this point of the code,
JavaScript has simply no way of knowing yet there's a string here that we want because the function is still running, but it is also not blocking the code out here. And so therefore again, at this point, JavaScript has no way of knowing
what will be returned from this function. And so therefore all that this function does return is a promise.

Now the value that we return from an async function, so again, that's this string here will become the fulfilled value of the promise that is returned by the function. And so that's important to understand.

So again, this promise that we see here:


Promise {<pending>}

the fulfilled value of that promise is going to be this string here:

`You are in ${dataGeo.city}, ${dataGeo.country}`

because that is the value that we return from the async function while at least if there is no error here happening in the function. So since we know that this here:

const city = whereAmI();

will return a promise, we also know how we can actually get the data that we want. So all we need to do instead is simply:
*/
whereAmI().then(city => console.log(city));
/*
and so this will be our promise. Then just like before we can use the then method to get the fulfilled value of the promise.

In the then() handler, this argument that will be passed into the callback function is going to be the result value of the promise. And so now let's see what happens:

1: Will get location
Promise {<pending>}
3: Finished getting location
You are in Villeurbanne, France

Now we get our result!

And so with this, we essentially, successfully returned a value from the function. Now we will be able to do a little bit better, but for now let's think about errors. 
*/
const whereAmI = async function () {
  try {
    if (!resGeo.ok) throw new Error('Problem getting location data');

    if (!res.ok) throw new Error('Problem getting Country data');

    /*
    So if any error occurs here in this try block, then this return here will never be reached because the code will immediately jump here to the catch block, right?
    */

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err}😫`);
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};
/*
Si creasemos un error aqui por ejemplo, nada funcionaria...

 const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.countrygggggggg}`
    );

Obtendriamos undefined aqui y nada seria devuelto de la funcion
*/

whereAmI().then(city => console.log(city));
/*
Now what's interesting here is that the log still worked. This console.log here es el que nos esta enviando undefined:

console.log(city)

which means that this callback function is still running:

city => console.log(city).

which means that the .then() method was called, which in turn means that this promise here:

whereAmI()

was actually fulfilled and not rejected. So even though there was an error in the async function, the promise that the async function returns is still fulfilled and not rejected, right? And in fact, if we add a catch handler here:
*/
console.log('1: Will get location');
whereAmI()
.then(city => console.log(`2: ${city}`)
.catch(err => console.error(`2: ${err.message} 😫`));
console.log('3: Finished getting location');
/*
And so we should still get the error from here and indeed we do, but still it is this callback here that is executed:

(city => console.log(`2: ${city}`)

*/

const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=949449785238995372407x102421`
    );

    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    //Country data

    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    if (!res.ok) throw new Error('Problem getting Country data');

    const data = await res.json();

    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err}😫`);
    /*
And so again, what that means is that even though there was an error in the async function, the promise that it returns is still fulfilled. Now, if we wanted to fix that, if we want to be able to catch that error here as well,
then we would have to rethrow that error right here:

Rethrowing the error means to basically throw the error again so that we can then propagate it down.
    */

   renderError(`Something went wrong 💥 ${err.message}`);

   //Rejected promise returned from async function

   throw err;
  }
};
/*
And so sometimes it's important to do this. And so rethrowing an error is then the correct solution to that problem, all right?

And now finally, if we wanted to fix the, not the error, but the fact that the three is printed before the two, well then how would we do that? Well, we can simply add a finally here, right?:
*/
console.log('1: Will get location');
whereAmI()
.then(city => console.log(`2: ${city}`)
.catch(err => console.error(`2: ${err.message} 😫`))
.finally(() => console.log('3: Finished getting location'));

/*
Because the finally, as you already know, is always gonna be executed. So no matter what, all right? So now we only get the one then we should get the two with the error and then the number three. And indeed, if we remove now the error that we have previously created, entonces veremos todos correctamente y en orden, uno, dos y tres:

1: Will get location
2: You are in Lyon, France
3: Finished getting location

So I admit that this might've been a little bit confusing, but I hope that you understood how all the pieces fit together here. Now this of course works just fine, but in my opinion, there's still a problem here. And that problem is the fact that doing this here:

console.log('1: Will get location');
whereAmI()
.then(city => console.log(`2: ${city}`)
.catch(err => console.error(`2: ${err.message} 😫`))
.finally(() => console.log('3: Finished getting location'));

kind of mixes the philosophy of async/await with handling promises using then and catch, right? So we are mixing the old and the new way of working with promises here, all in the same code. And that's something that I personally don't like. So I prefer to always just use async functions instead of having to mix them. And so let's now go ahead and convert this to async/await as well.

And we can do that because, of course, we can treat the promise here that has returned just like any other promise. And so of course we are able to handle it
using async/await. So that's what we're going to do next. Now it would be great if we could simply use await without the async function, but that doesn't really work, at least for now, await can only be used inside an async function.

However, we don't really want a new complete function here, and so instead we can use an IIFE.
So remember IIFEs from way back, they are immediately-invoked function expressions. And remember
that this is how we create one:
*/

(async function(){
try{
const city = await whereAmI();
console.log(`2: ${city}`)
}catch(err){
  console.error(`2: ${err.message} 😫`)
}
console.log('3: Finished getting location')
})();
/*
So we write function then here the function body, and then in the end we simply call it. And so of course
we can also easily create an async IIFE as well, all right? And actually this pattern here is one of the
last remaining cases for IIFEs.

So let's start with the try catch block. So try catch, here We get access to the error and then
let's actually immediately do this part. And then here we can simply await the whereAmI promise,
 And then all we have to do is to store that result into the city variable and then log that to
 the console.


And we should get the exact same result and let's wait for it. And here we go.
So great. We managed to do the conversion and now everything is using async/await. And so that's much nicer.
And now we know how to basically return data from an async function and how to properly receive and handle
that returned data.

And actually in the real life, this is something that happens all the time.
So it's pretty common that we have async functions calling other async functions
and returning values between them. And so that's the reason why I'm showing you all this.
To make sure that you really correctly understand how async functions work behind the scenes.
*/
