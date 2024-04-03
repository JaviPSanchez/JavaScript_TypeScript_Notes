import '../main.css';

// CODING CHALLENGE 1

/* 
In this challenge you will build a function 'whereAmI' which renders a country
ONLY based on GPS coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates
to a meaningful location, like a city and country name. Use this API to do reverse geocoding:
https://geocode.xyz/api. The AJAX call will be done to a URL with this format:
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data.
3. Once you have the data, take a look at it in the console to see all the attributes that you
recieved about the provided location. Then, using this data, log a messsage like this to
the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get
this error with code 403. This is an error with the request. Remember, fetch() does NOT reject
the promise in this case. So create an error to reject the promise yourself, with a meaningful
error message.
6. Now it's time to use the received data to render a country. So take the relevant attribute
from the geocoding API respond, and plug it into the countries API that we have been using.
7. Render the country and catch any errors.

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
*/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className, languageNames, currency) {
  const html = `
          <article class="country ${className}">
            <img class="w-full aspect-video" src="${data.flags.png}" />
            <div class="px-8 py-10">
            <h3 class="mb-2 text-4xl font-bold">${data.name.common}</h3>
            <h4 class="uppercase mb-4">${data.region}</h4>
            <p class="mb-4"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(2)} M</p>
            <p class="mb-4"><span>🗣️</span>${languageNames}</p>
            <p class=""><span>💰</span>${currency[0].name}</p>
            </div>
          </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

function whereAmI(lat, lng, className) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=296526603029712428374x68891`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${respond.status}`);
      return response.json();
    })
    .then(data => {
      //   console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with the country ${respond.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data[0]);
      const languageNames = data[0].languages
        ? Object.values(data[0].languages).join(', ')
        : 'No official languages';
      // console.log(languageNames);
      const currency = data[0].currencies
        ? Object.values(data[0].currencies)
        : 'No currencie';
      renderCountry(data[0], className, languageNames, currency);
    })
    .catch(err => console.log(err.message));
}

const classname =
  'w-[250px] bg-grey4 rounded-xl overflow-hidden shadow-lg text-2xl text-black';

btn.addEventListener('click', function () {
  whereAmI(52.508, 13.381, classname);
  whereAmI(19.037, 72.873, classname); //You are in Mumbai, India
  whereAmI(-33.933, 18.474, classname); //You are in Cape Town, South Africa
});
