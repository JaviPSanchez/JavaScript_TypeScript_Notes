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
            ).toFixed(2)} M</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  //   countriesContainer.style.opacity = 1;
};

const getCountryData = country => {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0], '');
      return data[0].borders;
    })
    .then(neighbors => {
      neighbors.forEach(neighbor => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
          .then(response => response.json())
          .then(data => renderCountry(data, 'neighbour'))
          .catch(err => {
            console.log(`${err} 😫`);
            renderError(`Something went wrong ⚠⚠⚠ ${err.message}. Try again!`);
          })
          .finally(() => {
            countriesContainer.style.opacity = 1;
          });
      });
    });
};

/*
So until now, we have always assumed that everything went well with our AJAX calls, so we never handled any errors. However, an important part of web development is to actually handle the errors because it's very common that errors happen in web applications. And so in this lecture, let's talk about how to handle errors in promises.

And to start, remember that a promise in which an error happens is a rejected promise. And so in this video, we're gonna learn how to handle promise rejections.

Now, actually the only way in which the fetch promise rejects is when the user loses his internet connection. And so for now, that's gonna be the only error that we will handle here. Now to simulate losing the internet connection we can go to the console > Network > change the speed to Offline.

However, when we then reload the page then basically everything will disappear, and so that's not really what we want. We want to simulate that the page was first still loaded but then as the user does the request without internet then we want to see the error happening. And so let's set it back to Online and so now what we want to do is to basically only call this function here:

getCountryData();

whenever the user clicks on a button. And so that will then make it easier for us
to simulate losing the internet connection. So here in the HTML we already have a button:

<button class="btn-country">Where am I?</button>

And so all we will do now is:
*/

btn.addEventListener('click', function () {
  getCountryData('brazil');
});
/*
Now wait, so just to see what happens here when we set ourselves Offline, then we get these errors here.

So first this one here:

ERR_INTERNET_DISCONNECTED

but the one that's most important is that we now have an Uncaught promise, and so because we have failed to fetch. And so at this point for the first time the promise that's returned from the fetch function was actually rejected. And so let's no handle that rejection. Now there are two ways of handling rejections and the first one is to pass a second callback function into the .then() method.

So the first callback function here:

.then(response => response.json())

is always gonna be called for the fulfilled promise. so for a successful one.

But we can also pass in a second callback which will be called when the promise was rejected. So let's do that:
*/
.then(response => response.json(), err => alert(err))
/*
And this callback function will be called with an argument which is basically the error itself. And so let's simply alert the error. And so now actually we handled the error by displaying this alert window. And the error that we saw previously down here is now gone. So now, in fact, we no longer have this Uncaught error down here because we did actually catch the error right here:

err => alert(err)

So handling the error is also called catching to error. And so with this we are now handling the error that might occur in this promise here, okay. Now, in this case there are then no more errors because basically the chain stops here when this error happens and when it's handled right here.

But now what if there was actually no error in this fetch promise here?
*/
const getCountryData = country => {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
};
/*
So basically what if this fetch promise was actually fulfilled but then the second one here was rejected:
*/
const getCountryData = country => {
  

        fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
          .then(response => response.json(), err => alert(err))
          .then(data => renderCountry(data, 'neighbour'));
      });
    });
};
/*
Well then we would also have to catch an error here. So we would have to come here
get the function and paste it there and also handle the error. However, that is a little bit annoying and so in fact there is a better way of basically handling all these errors globally just in one central place.

So instead of all of these callback error functions let's just delete them and just have one callback in the end of the chain by adding a .catch() method:
*/
fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
          .then(response => response.json())
          .then(data => renderCountry(data, 'neighbour'))
          .catch(err => alert(err)); 👌
      });

/*
And then here we can actually use the same callback error function. So again this catch method here at the end of the chain will basically catch any errors that occur in any place in this whole promise chain and no matter where that is. So errors basically propagate down the chain until they are caught.

Now instead of having that annoying alert window let's just lock the error to the console and create some string.

.catch(err => console.log(`${err} ⚠⚠⚠`));

But anyway, usually simply logging the error to the console is not enough in a real application with a real user interface. And so instead of just logging something to the console let's also display an error message for the user to see.

And so that's then a more real use case of this catch block. All right, so I'm adding a new block { } here:

.catch(err => {
              console.log(`${err} ⚠⚠⚠`)
            }
          );

so we still want to of course lock the error to the console but besides that let's actually now create a function that will also render some kind of error, okay. So let's do that outside:
*/
const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};
/*
So this is a function and it can take in a message just call it like "message".
And just like the country elements we want to attach this to countriesContainer
and then insert.adjacent. And this time not HTML but insertAdjacentText. So this is a new one but basically it does the same thing as insertAdjacentHTML but simply with text, so it doesn't create any new HTML elements. Okay. And then besides that
remember we always have set the opacity back to one.

And so now here let's use that renderError function:

*/
fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
          .then(response => response.json())
          .then(data => renderCountry(data, 'neighbour'))
          .catch(err => {
            console.log(`${err}`);
            renderError(`Something went wrong ⚠⚠⚠ ${err}`); 👌
          });

/*
Actually this error that is generated here is a real JavaScript object:

.catch(err => blablabla...)

So we can create errors in JavaScript with a constructor, for example, just like a map or a set. And any error in JavaScript that was created like this contains the message property. So we can use that here:
*/

        fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
          

            renderError(`Something went wrong ⚠⚠⚠ ${err.message}. Try again!`);
          });
 
/*
to basically only print the message of that error and not the whole object itself.
And we will actually learn more about the built in error object of JavaScript in the next video. Now to try this we need to again, get ourselves Online then Offline, check the console. And indeed we get our custom error down here
visible by the emojis and then our own message here for the user.


All right, and so that's how we handle errors happening in promises in any .then() handler. So basically handling any promise rejection no matter where it happens in the chain.

Now just to finish there is one more quick method that I want to show you and that is also available on all promises. So besides then and catch there is also the .finally() method.

So let's add a finally here:
*/
fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
          .then(response => response.json())
          .then(data => renderCountry(data, 'neighbour'))
          .catch(err => {
            console.log(`${err}`);
            renderError(`Something went wrong ⚠⚠⚠ ${err}`); 
          })
          .finally(() => {
countriesContainer.style.opacity = 1;
          })

/*
And then the callback function that we defined here will always be called whatever happens with the promise. So no matter if the promise is fulfilled or rejected this callback function that we define here is gonna be called always. So that's the difference between the other two so the .then() method is only called when the promise is fulfilled while the .catch() method is only called while the promise is rejected.

Now the finally method is not always useful, but sometimes it actually is. So we use this method for something that always needs to happen no matter the result of the promise. And one good example of that is to hide a loading spinner like these rotating circles that you see everywhere in web applications when you load some data. So these applications show a spinner when an asynchronous operation starts and then hide it once the operation completes. And that happens no matter if the operation was successfully or not. And so for that to finally method is perfect.

And in our case, what we always need to do is to fade-in the container. So no matter if we render the country in the case of success or if we render the error in case of an error, no matter what, we always need to do this:

countriesContainer.style.opacity = 1;

And so let's take this out of here:

const renderError
const renderCountry

and then let's put it in the finally handler, okay. And now we no longer need the Offline so let's just reload, put it here and yeah that works beautifully.

Just notice that this actually works because catch itself also returns a promise. So that's the only way why this here can work so of course this only works on promises. And so, yeah, again, this can only work if catch itself also returns a promise.

All right, now let's try to simulate another error so let's say that we're trying to search for a country that simply doesn't exist. And so, or API is not gonna find any result for that:
*/
btn.addEventListener('click', function () {
  getCountryData('republica bananera');
});
/*
And well we get to this weird error that we Cannot read property flag of undefined in line XXX. So it's coming from getCountryData. So anyway, this error here is weird
and it doesn't really reflect the true error which is simply that our API cannot find any country with this name. So the true error is of course not that we Cannot read flag of undefined but in fact it is that our API cannot find any country.

And so that's reflected here with the status code 404. However, as I said in the beginning the fetch promise only rejects when there is no internet connection, but with a 404 error the fetch promise will still get fulfilled. So there is no rejection and so our catch handler cannot pick up on this error. It does pick up on the flag error but that's not the one that we actually want to handle.

In this case we really want to tell the user that no country was found with this name. And so that is what we will do in the next lecture.
*/
