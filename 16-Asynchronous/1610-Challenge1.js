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
  countriesContainer.style.opacity = 1;
};

// CODING CHALLENGE 1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API respondult, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀

//Creamos la funcion, pasamos dos argumentos y hacemos un fetch de la API:*/

const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=949449785238995372407x102421`
  )
    .then(respond => {
      //Si no recibimos nada lanzar el error y si no hay error pasar el respondpond JSON.
      //Si ok es false entonces lanza...
      if (!respond.ok)
        throw new Error(`Problem with geocoding ${respond.status}`);
      return respond.json();
    })
    //Nueva promise que sera el respondultado de la primera promise, sacamos el valor de la ciudad y del pais con el template literal:
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      //Render el pais
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(respond => {
      if (!respond.ok) throw new Error(`Country not found (${respond.status})`);

      return respond.json();
    })
    //Cogemos el primer elemento del ARRAY
    .then(data => renderCountry(data[0]))
    //Cazamos todos los rejection con catch.
    .catch(err => console.error(`${err.message} 💥`));
};
btn.addEventListener('click', function () {
  whereAmI(52.508, 13.381);
  whereAmI(19.037, 72.873); //You are in Mumbai, India
  whereAmI(-33.933, 18.474); //You are in Cape Town, South Africa
});

/*
{statename: {…}, distance: "0.000", elevation: "39", osmtags: {…}, state: "Berlin", …}
adminareas: {admin10: {…}, admin9: {…}}
alt: {loc: Array(2)}
altgeocode: "ERPLATZ-YMXPC"
city: "Berlin"
class: {}
confidence: "0.9"
country: "Germany"
distance: "0.000"
elevation: "39"
geocode: "BERLIN-YMXPC"
geonumber: "3058574411076"
inlatt: "52.50800"
inlongt: "13.38100"
latt: "52.50800"
longt: "13.38100"
osmtags: {wikipedia: "de:Berlin-Mitte", wikidata: "Q2013767", source: "http://wiki.openstreetmap.org/wiki/Import/Catalogue/Kreisgrenzen_Deutschland_2005", name_de: "Mitte", name_prefix: "Ortsteil", …}
poi: {website: "https://www.doktor-kugler.de/", operator: "Dr. med. Anton Kugler, Astrid Vonau", poilon: "13.3812", id: "8105267094", poilat: "52.5049", …}
postal: "10117"
prov: "DE"
region: "Berlin"
remaining_credits: {}
staddress: "Niederkirchnerstraße"
state: "Berlin"
statename: {}
stnumber: "5"
timezone: "Europe/Berlin"
__proto__: Object

*/
//SOLUCION CON TODOS LOS PAISES VECINOS INCLUIDOS//
/*
const getCountryAndNeighbours = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    `${country} not found!`
  )
    .then(matchingCountries => {
      matchingCountries.forEach(renderCountry);
      return matchingCountries.flatMap(c =>
        c.borders.map(code =>
          getJSON(
            `https://restcountries.eu/rest/v2/alpha/${code}`,
            `${code} neighbour not found!`
          )
        )
      );
    })
    .then(allJSONs => Promise.all(allJSONs))
    .then(neigbours => neigbours.forEach(n => renderCountry(n, 'neighbour')))
    .catch(err => {
      renderError(`📛📛 ${err.message}. Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};
*/
