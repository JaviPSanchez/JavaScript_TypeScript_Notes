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

/*
Let's now keep promisifying things and this time around, we're gonna promisify the geolocation API, and this is gonna be really cool because it will allow us to take the small app that we built in the last coding challenge to the next level.

Now we used the geolocation API before, and so let's start by reviewing how it works. So remember we use:
*/
navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.error(err)
);
/*
and then this function here accepts two callbacks where the first is for the success
and the second one is for the error. So this first callback function actually gets access to the position object. So let's pass that in as an argument to this callback function, then let's simply log that to the console. So this is our first callback, and now let's create a second callback with the error.

So for example, in case that the user does not allow the page to get access
to the current location and so in that case, let's just log that error to the console just as we did previously.

And now, just like in the mapty app, JavaScript asks us for permission and when we allow, then at some point when JavaScript actually figures out the location, then we get that data back:

GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1625297378993}
coords: GeolocationCoordinates {latitude: 45.7555899, longitude: 4.8765203, altitude: null, accuracy: 20, altitudeAccuracy: null, …}
timestamp: 1625297378993
__proto__: GeolocationPosition


this is actually asynchronous behavior in exactly the way that we have been talking about. So the code is not blocked, which we can check here:
*/
console.log('Getting position');
/*
So we have a console.log after the geolocation. Now this console.log is logged first
and so this one happens first and so that's because the geolocation function basically offloaded its work to the background. So to the web API environment in the browser.

So this is very clearly a callback based API. So we have to pass in these different callbacks and so this is another great opportunity to promisify a callback based API, to a promise based API.

So let's do that and it's actually pretty simple. So let's create a function here
just like before with the wait function. So get positioned and we don't need to pass anything into this one:
*/
const getPosition = function () {
  return new Promise(function (resolve, reject) {});
};
/*
and just like before we are going to return a new promise, which we then can handle later on. So here we pass in the executer function, which gets access to the resolve function and the reject function, which remember we can use to mark the promise as either rejected or fulfilled.


So let's actually grab the previous code and paste it inside our Promise function:
*/
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position), // => Success Callback function
      err => reject(err) // => Reject Callback function
    );
  });
};
/*
and now all we need to change is basically what happens here in each of these callback functions. So remember that the success callback function receives the position, and so when we have success, we want to resolve the promise. So we want to mark it as fulfilled, and so therefore we call the result function and we pass in that position object, because that is actually the fulfilled value that we want to get from this promise in case that is successful. And we do the same, but with reject.

Now, this is going to work just fine, but we can actually make this even simpler because if this function here automatically calls these callback functions here, and if it also automatically passes in the position, then we can simply do this.
*/
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
/*
So this is exactly the same as the one before. So before we specified the callback manually like this:

position => resolve(position),

all we did was to take the position and pass it down into resolve, but we make it to happens automatically. So now resolve itself is the callback function, which will get called with the position, and so that's exactly what we do here, and the same of course, with reject, and so now let's actually try this out:
*/
getPosition().then(pos => console.log(pos));
/*
So get position and then we want to handle the result. So again, this is exactly the same thing that we did previously with the fetch function, or also with the wait function that we created in the last lecture. So let's now log this position to the console and for now we don't need the catch block and so let's see:

GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1625298883549}

and yeah, so now we get it back. So the promise was marked as successful by the resolve function and so therefore then here, this callback was called in the .then () handler.



This worked just fine and so we just promisified the geolocation API to a promised based API now, but now let's actually take it to the next level.

So remember how in the last coding challenge, we built a function which received GPS coordinates as an input, and then rendered the corresponding country. Well, now we actually got these coordinates via geolocation and so we don't even have to pass in any coordinates into that function.

So let's get that function from the coding challenge:
*/
const whereAmI = function (lat, lng) {
  /*
    So remember here, we passed in the latitude and longitude and then based on that, we did reverse geocoding, which gave us the country that basically these coordinates belong to and so then based on that country, we could get all the data about the country and then display it here on our page,

    but now since we have this get positioned function, we actually no longer need to even pass in the coordinates and so now we're gonna be able to build a function that will tell us where we are in the world, simply based on the geolocation of our device.
    */
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=949449785238995372407x102421`
      );
    })
    .then(res => {
      //Si no recibimos nada lanzar el error y si no hay error pasar el respondpond JSON.
      //Si ok es false entonces lanza...
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    //Nueva promise que sera el respondultado de la primera promise, sacamos el valor de la ciudad y del pais con el template literal:
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      //Render el pais
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    //Cogemos el primer elemento del ARRAY
    .then(data => renderCountry(data[0]))
    //Cazamos todos los rejection con catch.
    .catch(err => console.error(`${err.message} 💥`));
};
/*
So let's run this but first need to set it up with the event handler:
*/
btn.addEventListener('click', whereAmI);
/*
So if we click now, so here, then we get an error that latitude is not defined, but what we were interested in any way is get the latitude and longitude of this coords object, and so let's not go ahead and destructure this object giving new names a lat and lng with latitude and longitude:
*/
const { lat = latitude, lng = longitude } = pos.coords; // OJITO con no caer en el error de hacer the equal sign "=" porque en destructuring is actually to set a default value.

// So this is not what we want.
/*
Nosotros queremos crear una variable basada en otra:

const { latitude: lat, longitude : lng } = pos.coords;

and next, all we need to do done is to chain the next promise, and so let's grab this code here:

fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)

and put it inside the getPosition() creating a new promise, basically, and then return it, so we can handle it in the next .then() handler, and so now we have an even longer chain, as you can see.

And so now let's see what happens:

{statename: {…}, distance: "0.019", elevation: "186", osmtags: {…}, state: "FR", …}
You are in Villeurbanne, France


It does take some time. So in the real world, we would have like some loading spinner, but it works. So we got now the country that I'm currently in, which is indeed France and all of that was simply done using geolocation.




Now, just imagine that you would have to handle all of these asynchronous operations here using callback function. So that would literally be hell. So therefore the name callback hell, but again, with this, we have a really nice flat chain of promises that's easy to handle and also easy to manage.


But anyway, with this, we saw that We can really promisify all kinds of asynchronous stuff in JavaScript. For example, we could also promisify, the old XML HTTP request function that we used in the beginning to make Ajax calls, or also we could promisify the image loading example that We have seen a couple of times in our slides and actually that's exactly what we're gonna do in the next coding challenge.
*/
