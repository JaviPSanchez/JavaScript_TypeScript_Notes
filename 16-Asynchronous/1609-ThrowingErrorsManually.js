'use strict';

/*
So in this lecture, we're gonna fix the request 404 error that we saw happening
in the last lecture. And so as we saw in the last video, the problem here is that during the fetch, there was a 404 error, which is because our API couldn't find any country with a wrong name.

But still, even though there was obviously a big problem with this request, the fetch function still did not reject in this case, and so we will have to do it manually. So to see what happens here, let's go back to this first then handler here, which gets access to the response immediately:

const getCountryData = country => {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)

⏬

//Añadimos un bloque { } y metemos un console.log para ver que pasa con response, debemos añadir tambien un return explicitamente al haber puesto el bloque {}.

    .then(response => {
        console.log(response) 
        return response.json()
    })


⏫

    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err} 😫`);
      renderError(`Something went wrong ⚠⚠⚠ ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};


And so here it is:

Response {type: "cors", url: "https://restcountries.eu/rest/v2/name/brazl", redirected: false, status: 404, ok: false, …}
body: (...)
bodyUsed: true
headers: Headers {}
ok: false  😫
redirected: false
status: 404
statusText: ""
type: "cors"
url: "https://restcountries.eu/rest/v2/name/brazl"
__proto__: Response


and so right here, you can see that the Ok property is set to false. And so the reason for that, is, of course, the status code 404. Now, when the request goes well, then if we take a look at the response, Ok is true, and that's because status is 200. And so 200 literally stands for Ok.

So we can say, if there is no response:

if(!response.ok)

or in other words, if response.Ok is false, then we write:

throw new Error();

and then here we can define an error message:

throw new Error(`Country not found ${response.status}`);

So this is the real error message that we want to see here. We can then also take the status code, and display it as well. So this is something that we never did before. So let's analyze what happens here. So we create the new error by using again, this constructor function:

throw new Error();

and then we pass in a message, which is gonna be the error message, then we use the throw keyword here, which will immediately terminate the current function. So just like return does it. Now the effect of creating, and throwing an error in any of these .then() methods is that the promise will immediately reject. So basically, the promise returned by this then handler here will be a rejected promise.

And that rejection will then propagate all the way down to the catch handler, which we already have set up before.



So again, any error will cause any promise to reject, but here, we are simply creating our own error to basically reject the promise on purpose, so that we can then handle that error down here in the chain, so in this catch method.

But now, you might be wondering, why should we even bother handle all these errors?
Isn't that just a bunch of work and a waste of time? Well, first, handling these errors is the only way in which we can actually display an error message like this on the screen for the user, but even more important, it's just a really bad practice
to leave these rejected promises, hanging around without handling them.

So don't do that, always use catch, and if necessary, you can also use finally, okay.

And now, again, what if there was no error in other promise? in the second fetch for exemple. So we now need to go ahead, and do the same in the other handler, aunque esto sea una mala practica y copiar codigo.



And so now, I think that it's a good time to actually create ourselves a really nice helper function. And this helper function will wrap up the fetch the error handling, and also the conversion to JSON.


So instead, we will basically encapsulate all of this here:

fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })

into one nice function, so let's do that, and I'm gonna call it getJSON:
*/
const getJSON = function (url, errMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);

    if (!response.ok) throw new Error(`${errMessage} (${response.status})`);

    return response.json();
  });
};
/*


So that's working great, but there's still one more thing that we need to do, which is to handle the fact that sometimes there might be no neighbor. So right now, what we're doing here when there is no neighbor, is to simply return, but as I mentioned before, that doesn't really do anything.

So let me just try here, a country that has no neighbors. So let's say Australia, because that is an island, and so here again, we get cannot read property flag
of undefined, and so that is happening, because it is trying to render a country that doesn't exist.

getCountryData('australia');

Okay, so again, it's because of this neighbor:

 const neighbour = data[0].borders[0];
      console.log(neighbour); //undefined

and just to make sure, to illustrate my point here, you see that the neighbor is indeed undefined. And so what we want to do here is to simply just like before, throw a new error that will then get caught down in our catch handler, right.

if (!neighbour) throw new Error('No neighbour found!');

and that's a lot better. So now, this is a real error message that actually makes sense to the user. Of course, this could be all a bit better, but this is just a demonstration anyway, but I think that it nicely demonstrate how we can create a real error message that does actually make sense.

And again, that is super important for any user interface that you're building,
because in web applications like this very small one, errors will happen, that is just guaranteed, and so your application needs to be ready, and needs to be prepared for that.



And I think that the big takeaway from this lecture is that whenever we want to create some error that we want to handle  in the catch handler, all we need to do is to throw, and create a new error, just like we did.
*/

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
};

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour); //undefined

      if (!neighbour) throw new Error('No neighbour found!');

      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err} 😫`);
      renderError(`Something went wrong ⚠⚠⚠ ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});
