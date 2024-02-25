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
Let's now learn how to chain promises in order to also render the neighboring country, of the initial country that we give to the function.

And actually, we already have a small chain of promises because of this JSON function:
*/

const getCountryData = function (country) {
  //Esto fetch something
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    //And so here, these two thens called and sequence are basically already a small chain.
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

getCountryData('spain');

/*
But anyway, in this lecture, we will now take chaining to a new level and actually chain together, two sequential Ajax calls. So just like before we first get data about the country.
*/
const getCountryData = function (country) {
  //Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())

    // So let's simply modify what we already have here. And so the second Ajax call basically needs to happen here in this then handler.

    .then(data => {
      renderCountry(data[0]);

      // So as soon as we get the data, then we need to get the neighbor country and do the Ajax call for that one as well. So let's get the neighbor and we already know
      // that it is at data zero at borders. And then also the first one. And just like before, let's say, if there is no neighbor, then return immediately.

      const neighbour = data[0].borders[0];

      // And actually this is not going to work, but nevermind about this for now. So we will talk about error handling actually in the next video. And so let's do the second Ajax call. And so, we use again fetch and then the URL.
      if (!neighbour) return;
      //
      //       Country 2

      //       Now, for now, this is not going to do anything because what we need to do now is to actually return this new promise, because then when we do that, we will be able to chain a new then method on the result of this then method.

      //       So by returning this promise here, then the fulfilled value of the next then method will be fulfilled value of this previous promise.
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    /*
    So I know that sounds confusing, but what you need to understand is that basically this then method here ⏫ returns in your promise until, we can then one more time handle the success value of that promise.
    */
    /*
    So one more time, I'm calling this one now a response, because here we are dealing with the fulfilled value of a fetch promise.

    And so here, one more time, we need to call the JSON method and that is pretty annoying, but that's just how we have to do it.
   */
    .then(response => response.json())
    /*
    And so here again, the fulfilled value of the promise will become that body. So the data that is stored in the body, and then we can again, handle that.

    So data like this and then render country with data. And then here again, we pass in that CSS class for the neighbor.
    */
    .then(data => renderCountry(data, 'neighbour'));
};

// getCountryData('spain');
/*
So as you can see, promises really allow us to handle these complex asynchronous operations with as many steps as we want. So right now we have four steps here, 
but of course we could extend this as much as we want.

So even if we wanted the neighbor of the neighbor of the neighbor, like 10 countries, we could easily do this by chaining all these promises one after another and all without the callback hell.

So here, instead of the callback, hell we have what we call a flat chain of promises. And this one is again, very easy to understand and to read. So as a conclusion to this video and the previous one, promises really, are an incredibly powerful and elegant solution to handle asynchronous code.

But anyway, let's now move on and actually handle errors because that is also a pretty common scenario when we work with promises and especially with Ajax calls.
*/

//SOLUCION PARA TODOS LOS BORDERS
const getCountryData = country => {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0], '');
      return data[0].borders; // return neighbors
    })
    .then(neighbors => {
      neighbors.forEach(neighbor => {
        //We can also remove the if(!neighbor) check as the for loop will not process if there are no neighbors since the array length will equal 0.
        // if (!neighbor) return; // terminate if no neighbors

        // process neighbors
        fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`)
          .then(response => response.json())
          .then(data => renderCountry(data, 'neighbour'));
      });
    });
};

getCountryData('brazil');

/*
Para resumirlo un poco el pattern que queremos seguir es asi:


fetch(...)

.then(...)

.then(... return fetch(...))

.then(...)

.then(... return fetch(...))

.then...

*/
