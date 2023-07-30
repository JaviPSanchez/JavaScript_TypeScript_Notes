'use strict';
//VARIABLES
const countriesContainer = document.querySelector('.countries');
//DOM
const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(2)} M</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
In this lecture, we will learn how to consume a promise. And in this case, we will consume the promise that was returned by the fetch function:
*/
const request = fetch('https://restcountries.eu/rest/v2/name/spain');
console.log(request);

/*
So let's now implement the get country data function from the very first lecture.
But of course, this one using a promise:

So get country data and so again, here we pass in a country.
*/
const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    /*
    And as we already know, calling the fetch function like this, will then immediately return a promise.
    
    So as soon as we start, this promise is still pending because the asynchronous task of getting the data, is still running in the background.
    
    Now, of course, at a certain point the promise will then be settled and either in a fulfilled or in a rejected state, but for now let's assume success.
    
    So assume that the promise will be fulfilled and that we have a value available to work with.
    
    And so to handle this fulfilled state, we can use the then method that is available on all promises.

    Now into the then method, we need to pass a callback function that we want to be executed as soon as the promise is actually fulfilled.
    
    Then this function will actually receive one argument which will be the value of the fulfilled promise.
    
    So let me call it response here because this is the response of an AJAX call in this case.
    */
    .then(function (response) {
      console.log(response);
      /*
So this is how we actually handle a fulfilled promise, but now let's actually do something with the response here.

And as always, I will start by logging it to the console. But of course, we also need to call this function above ⏬.

Response {type: "cors", url: "https://restcountries.eu/rest/v2/name/spain", redirected: false, status: 200, ok: true, …}
body:  ReadableStream 🖐
bodyUsed: true
headers: Headers {}
ok: true
redirected: false
status: 200 🟢
statusText: ""
type: "cors"
url: "https://restcountries.eu/rest/v2/name/spain"
__proto__: Response

All right, and so here we now get the response indeed. And even the type of this object is actually called Response.

We have a couple of things about the response itself, for example, the status code for the headers.

And so if you watch the lecture about how the web actually works behind the scenes, then this kind of data here will be familiar to you.

But anyway what we're actually interested in is the data itself. And so that data is in the response body.

So let's click there just to see 🖐. And as we see, the body is basically the ReadableStream.

All right, and so actually we cannot yet really look at the data here. So in order to be able to actually read this data from the body,

we need to call the json method on the response:
      */

      return response.json();

      /*
Okay, so json is a method that is available on all responses of the fetch method.

So again, the json method here is a method that is available on all the response objects that is coming from the fetch() function,

so all of the resolved values, and indeed this response here is in fact a resolved value.

And so therefore it does have the json method attached to it.

Now, the problem here is that this json function itself, is actually also an asynchronous function.

And so what that means, is that it will also return a new promise. And that's all a bit confusing and I really don't know why it was implemented like this,

but this is just how it works. So anyway, what we need to do now here is to actually return this promise from here.
      */
    })
    /*
Okay, and so now we need to handle that promise as well. All right, and so the way we do that is to then call another .then().

So we need another callback function, this time let's call it data.

And for now let's log it here to the console and let's give it a save, just to see if it worked. And yeah, here it is. So here we are back to having the same data that we already had before, but this time using two promises. and this time, we get access to the data because the resolved value of the previous promise.
    */
    .then(function (data) {
      console.log(data);
      /*
      [{…}]
      0: {name: "Spain", topLevelDomain: Array(1), alpha2Code: "ES", alpha3Code: "ESP", callingCodes: Array(1), …}
      length: 1
      __proto__: Array(0)
      */
      // And so now all we have to do is render country of data zero, okay.
      renderCountry(data[0]);
    });
};
getCountryData('spain'); //⏫
/*
And so here it is. So we just did the same thing as before, but using promises.

We could actually simplify this a lot using arrow functions.
*/

const getCountryData = function (country) {
  //Esto fetch something
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    //then we get a response which will be transformed to json.
    .then(response => response.json())
    //And then we take that data and render the country to the DOM
    .then(data => renderCountry(data[0]));
};

getCountryData('spain');

/*
Now, just to finish you might be thinking, well, we're using callbacks here, right.

And that is actually true. So promises do not get rid of callbacks, but they do in fact get rid of callback hell.

So even if this doesn't look like a big change for now, it will look like a change after we add the functionality of

loading the neighbor country like we did in the previous lecture.

And so actually let's go do that now in the next lecture.
*/
