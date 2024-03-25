import './main.css';

/*
So now that we know about AJAX and API's, let's actually make our first API call.

We're gonna start with the most old school one (XML HTTP request function):

What we need to do is to register a callback on the request object for the load event using an addEventListener:
*/

const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className, languageNames) {
  const html = `
        <article class="country ${className}">
          <img class="w-full aspect-video" src="${data.flags.png}" />
          <div class="px-8 py-10">
          <h3 class="mb-2 text-4xl font-bold">${data.name.common}</h3>
          <h4 class="uppercase mb-4">${data.region}</h4>
          <p class="mb-4"><span>👫</span>${(+data.population / 1000000).toFixed(
            2
          )} M</p>
          <p class="mb-4"><span>🗣️</span>${languageNames}</p>
          <p class=""><span>💰</span>${data.currencies.EUR.name}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getCountryData = function (country, className) {
  const request = new XMLHttpRequest();
  // We open the request.
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  // Here, we basically send off the request with .send() that fetches the data in the background.
  request.send();
  //And then the response is in the property response text.
  request.addEventListener('load', () => {
    const [data] = JSON.parse(request.responseText);

    const neighbour = data.borders;
    if (!neighbour) return console.log('There are not Neighbours!');

    const languageNames = data.languages
      ? Object.values(data.languages).join(', ')
      : 'No official languages';
    // console.log(data);
    renderCountry(data, className, languageNames);

    for (let border of neighbour) {
      const secondRequest = new XMLHttpRequest();
      // console.log(border);
      secondRequest.open(
        'GET',
        `https://restcountries.com/v3.1/alpha/${border}`
      );
      secondRequest.send();
      secondRequest.addEventListener('load', function () {
        const [neighbourCountry] = JSON.parse(secondRequest.responseText);
        const languageNames = neighbourCountry.languages
          ? Object.values(neighbourCountry.languages).join(', ')
          : 'No official languages';
        console.log(languageNames);
        renderCountry(neighbourCountry, className, languageNames);
      });
    }
  });
};
/*
And by calling these functions here twice, we will basically have two AJAX calls happening at the same time.
So in parallel, so to say. And if we reload this page here a couple of times, then they might appear in a different
order. And the reason for that is basically that the data arrives at a slightly different time, each time that
we're loading the page.

if we actually wanted these requests to be made in a specific, like predefined order, then we would basically
have to chain the requests. Which means to make the second request only after the first request has finished.
But that will create a callback hell.
*/
getCountryData(
  'spain',
  'w-[250px] h-[350px] bg-grey4 rounded-xl overflow-hidden shadow-lg text-2xl text-black'
);
