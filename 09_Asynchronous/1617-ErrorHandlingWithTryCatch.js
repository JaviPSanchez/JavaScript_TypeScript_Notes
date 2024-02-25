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
In this lecture, we're gonna learn how error handling works with ASYNC/Await.
So with ASYNC/Await, we can't use the catch method that we use before, because we can't really attach it anywhere, right. So instead, we use something called a try catch statement.

And the try catch statement is actually used in regular JavaScript as well.
So it's been in the language probably since the beginning. So try catch has nothing to do with ASYNC/Await. But we can still use it to catch errors in async functions. But before we do that, let's look at a more simple example, just to see how try catch works:
*/
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }
/*
So we can basically wrap all our code in a try block. And so JavaScript will then
basically try to execute this code. And so now here, we can add the catch block.
So we have a catch block, and this catch block will have access to whatever error
occurred here in the try block. And so now we can do something with this error.

So let's say we simply want to alert the error, or just the error message. So as we know, any error has the message property. And so we can simply alert that one. So let's see. And indeed, now we get an "assignment to constant variable" here in this alert. And you see that the error now no longer appears in the console. So the script does no longer die in this case.


And so let's know use try catch for something more useful, which is to actually handle real errors in async functions. Okay. So just like in the small example that we saw, let's wrap our entire code of this function into a try block poniendo al final el catch:
*/

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = async function () {
//   try {
//     //Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     // Reverse geocoding
//     const resGeo = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth=949449785238995372407x102421`
//     );
//     const dataGeo = await resGeo.json();
//     console.log(resGeo);

//     //Country data

//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );

//     const data = await res.json();

//     console.log(data);
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`${err}😫`);
//     renderError(`Something went wrong 💥 ${err.message}`);
//   }
// };
// btn.addEventListener('click', whereAmI);
/*
We can now handle any errors, just like we did before in the catch method.

So at this point, we do have some error handling. So we are able to add the error here to the user interface. But just like before, this error is not really meaningful, because the fetch promise does not reject on a 404 error, or on a 403 error, which was actually the original error, which caused everything here to collapse. El error que sale es por demasiadas llamadas a la API.

But the solution is simple, because it's exactly the same as before. So all we have to do is to manually create an error. And so that error will then be caught
here in the catch block. Right?

So let's do that. So right here. So basically, immediately after this fetch:
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

    /*
    So this response here will have the .ok property. And if this property is not set to true, well, then we want to throw a new error. Okay. And so this one basically handles any error in this fetch.
        */

    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(resGeo);

    //Country data

    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    /*
        And so now the same here. So let's say that we come back with a real weird country, from this fetch.
        */

    if (!res.ok) throw new Error('Problem getting Country data');

    const data = await res.json();

    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err}😫`);
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};
btn.addEventListener('click', whereAmI);

/*



So that is the complete version now of this async function, complete with a pretty robust error handling strategy. So again, please never ignore handling errors, especially when it comes to asynchronous code like this one, because here, there is always a lot of stuff that can go wrong.

And so our application needs to be ready to handle that. Now, right? But with that being said, in the next lecture, we're going to dive even deeper into how async functions really work. And so let's go there right away.
*/
