'use strict';

/*
So now that we know about AJAX and API's, let's actually make our first API call.

So in this lecture, we're gonna build a nice UI component, which contains data about a certain country.

And this data about the countries is actually gonna come from a third party online API

Now in JavaScript, there are actually multiple ways of doing AJAX calls,

But we're gonna start with the most old school one. And that's called the XML HTTP request function:
*/
new XMLHttpRequest();

/*

So we call this function and then all we need to do for now is to store the result in a new variable.

Nos inventamos una, por ejemplo request:

*/
const request = new XMLHttpRequest();
console.log(request);
/*

And so that's the first step of using the XML HTTP request way of doing AJAX calls.

So first, I want you to know that XML HTTP requests exists,

because you might actually need it in the future.

And second, I want to show you how AJAX calls used to be handled with events and callback functions.

And so only after that we should move on to a more modern way of handling asynchronous JavaScript,

which is gonna be a feature called Promises.

Next, we need the URL to which we will make the AJAX call.

Cogemos el OBJECT que hemos creado y le pasamos el METHOD open() como primer argumento

necesitamos pasar el tipo de request, and remember that the type of HTTP request to get data is simply called GET.

And second, we need a string containing the URL to which the AJAX call should actually be made.

La API seleccionada la encontraremos en el gran repository GitHub de Public API's:

https://github.com/JaviPSanchez/public-apis la API que vamos a utilizar se llama

REST Countries: https://restcountries.eu/ dentro de la seccion de Geocoding.

Podemos ver que esta API no necesita autentificacion, usa HTTPS, y muy importante comprobar el CORS, CORS stands for Cross Origin Resource Sharing.

And without CORS, we cannot access a third party API from our own code.

Dentro de la pagina de nuestra API, podemos burcar API ENDPOINTS which is essentially just another name for the URL that we need. So if we wanted to get a list of all the countries from this API, we could make an AJAX call to this URL here : https://restcountries.eu/rest/v2/all pero no es lo que queremos, lo que queremos es buscar por country name: https://restcountries.eu/rest/v2/name/{name}

Pegamos esta URL en nuestro segundo argumento:

*/

request.open('GET', 'https://restcountries.eu/rest/v2/name/{name}');

//Empezamos con España:

request.open('GET', 'https://restcountries.eu/rest/v2/name/spain');

//So with this, we basically open the request. And now next, we need to also send it.

request.send();
console.log(request.responseText); // No habria nada

//Si quisiesemos asignarle una variable a nuestra request.send() tal que asi:

const data = request.send(); //No FUNCIONA

/*
No funcionaria, And the reason why we cannot do this is because the result is simply not there yet,

right. So this AJAX call that we just send off here, is being done in the background,

while the rest of the code keeps running.

And so this is the asynchronous, non-blocking behavior that we talked about in the last lecture.

And instead, what we need to do is to register a callback on the request object for the load event.

So request, and then again, our old friend, addEventListener:
*/

request.addEventListener('');
/*
And here on the request, we will wait for the load event:
*/
request.addEventListener('load');
/*
So again, here, we basically send off the request with request.send()
this request then fetches the data in the background.
And so as soon as the data arrives, this callback function here will be called:
*/
request.addEventListener('load', function () {
  console.log(this); //el this keyword aqui es request. Podriamos poner simplemente request, pero usamos this.
});

//And then the response is in the property response text.

request.addEventListener('load', function () {
  console.log(this.responseText);
});

/*
WOW, el resultado de nuestra primera llamada AJAX seria:

:[{"name":"Spain","topLevelDomain":[".es"],"alpha2Code":"ES","alpha3Code":"ESP","callingCodes":["34"],"capital":"Madrid","altSpellings":["ES","Kingdom of Spain","Reino de España"],"region":"Europe","subregion":"Southern Europe","population":46438422,"latlng":[40.0,-4.0],"demonym":"Spanish","area":505992.0,"gini":34.7,"timezones":["UTC","UTC+01:00"],"borders":["AND","FRA","GIB","PRT","MAR"],"nativeName":"España","numericCode":"724","currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],"languages":[{"iso639_1":"es","iso639_2":"spa","name":"Spanish","nativeName":"Español"}],"translations":{"de":"Spanien","es":"España","fr":"Espagne","ja":"スペイン","it":"Spagna","br":"Espanha","pt":"Espanha","nl":"Spanje","hr":"Španjolska","fa":"اسپانیا"},"flag":"https://restcountries.eu/data/esp.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}],"cioc":"ESP"}]

Now, we just need to convert this here to an actual JavaScript object. Because what we have here right now is JSON. So remember that JSON is basically just a big string of text.
*/

const data = JSON.parse(this.responseText);

//Quedando todo junto:

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/name/spain');
request.send();
request.addEventListener('load', function () {
  //Destructuramos para dejarlo mas bonito.
  const [data] = JSON.parse(this.responseText);
  console.log(data);
});
/*
Ahora tandremos nuestro OBJECT creado:
0:
alpha2Code: "ES"
alpha3Code: "ESP"
altSpellings: (3) ["ES", "Kingdom of Spain", "Reino de España"]
area: 505992
borders: (5) ["AND", "FRA", "GIB", "PRT", "MAR"]
callingCodes: ["34"]
capital: "Madrid"
cioc: "ESP"
currencies: [{…}]
demonym: "Spanish"
flag: "https://restcountries.eu/data/esp.svg"
gini: 34.7
languages: [{…}]
latlng: (2) [40, -4]
name: "Spain"
nativeName: "España"
numericCode: "724"
population: 46438422
region: "Europe"
regionalBlocs: [{…}]
subregion: "Southern Europe"
timezones: (2) ["UTC", "UTC+01:00"]
topLevelDomain: [".es"]
translations: {de: "Spanien", es: "España", fr: "Espagne", ja: "スペイン", it: "Spagna", …}
__proto__: Object
length: 1
__proto__: Array(0)
*/

//Pasamos a contruir nuestras cartas con la info de cada pais, dentro de nuestra API

const countriesContainer = document.querySelector('.countries');

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/name/spain');
request.send();

//API

request.addEventListener('load', function () {
  //Destructuramos para dejarlo mas bonito.
  const [data] = JSON.parse(this.responseText);
  console.log(data);
  //LLamamos html a nuestro template literal. Ahora solo tenemos que reemplazar esta informacion por la de nuestro OBJECT
  const html = `
        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
  //And now all we have to do is to then actually insert this HTML into our page.
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //Now finally, we also need to set the style of this container to opacity one.
  countriesContainer.style.opacity = 1;
});

//Ahora nos aparecera nuestro pais en el BROWSER con toda la informacion obtenida desde la API!

//Ahora vamos a reusar este codigo para representar varios paises, para ello metemos todo en una funcion que tomara como input un STRING llamado country.

const getCountryData = function (country) {//Aqui meteremos nuestra API};

//Crearemos un template literal con la URL de nuestra API:

request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);

//Y ahora podemos llamar a la funcion con todos los paises que queramos!

getCountryData('portugal');
getCountryData('usa');
getCountryData('france');
getCountryData('germany');
getCountryData('italy');
getCountryData('belgium');

//Quedando finalmente todo:

const countriesContainer = document.querySelector('.countries');

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  //API
  request.addEventListener('load', function () {
    //Destructuramos para dejarlo mas bonito.
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //LLamamos html a nuestro template literal. Ahora solo tenemos que reemplazar esta informacion por la de nuestro OBJECT
    const html = `
        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
    //And now all we have to do is to then actually insert this HTML into our page.
    countriesContainer.insertAdjacentHTML('beforeend', html);
    //Now finally, we also need to set the style of this container to opacity one.
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('spain');
getCountryData('Usa');
getCountryData('France');
getCountryData('Germany');
getCountryData('Italy');
getCountryData('Belgium');

/*
And by calling these functions here twice, we will basically have two AJAX calls happening at the same time.
So in parallel, so to say.

And if we reload this page here a couple of times, then they might appear in a different order.

And the reason for that is basically that the data arrives at a slightly different time, each time that we're loading the page.

And so in fact, this really shows the non-blocking behavior in action.

So as we call getCountryData here with 'spain', for the very first time, it sends of this request, and then JavaScript moves on in the code right away.

And so it goes right to the next line 'usa'.

And this, of course, fires off another AJAX call immediately, way before the data of 'spain' has actually arrived.

So again, we will have two AJAX call happening at the same time. And so whatever one arrives first,

will then fire the load event first. And so if the first one is the AJAX call for the 'france',

then the first element that's gonna be printed will be 'france'. And only after that the rest of data arrives.

Now, if we actually wanted these requests to be made in a specific, like predefined order,

then we would basically have to chain the requests. Which means to make the second request only after the first request has finished.

And that's actually what we're gonna do in the next lecture so that I can show you something that we developers called callback hell.
*/
