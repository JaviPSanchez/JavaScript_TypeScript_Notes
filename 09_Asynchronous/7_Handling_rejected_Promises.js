import './main.css';

/*
An important part of web development is to actually handle errors.

We can pass in a second callback which will be called when the
promise was rejected

.then(response => response.json(), err => alert(err))

The .catch() method at the end of the chain will basically catch
any errors that occur in any place in this whole promise chain and no matter
where that is. So errors basically propagate down the chain until they are caught.

Now just to finish there is one more quick method that I wanted to show you
and that is also available on all promises. So besides .then and .catch
there is also the .finally() method

👉 .then() method is only called when the promise is fulfilled
👉 .catch() method is only called while the promise is rejected

Now the finally method is not always useful. So we use this method for something
that always needs to happen no matter the result of the promise. And one good
example of that is to hide a loading spinner!
*/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const errorContainer = document.querySelector('.error');

const renderError = function (message) {
  errorContainer.insertAdjacentText('beforeend', message);
};

const renderCountry = function (data, className, languageNames, currency) {
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
          <p class=""><span>💰</span>${currency[0].name}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getCountryData = (country, className) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    //Promise to fulfill from asynchronous operation
    .then(
      response => response.json(),
      err => console.log(`${err}, ⛔`)
    )
    //Promise to fulfill
    .then(data => {
      // console.log(data[0]);
      const neighbour = data[0].borders;
      // console.log(neighbour);
      const languageNames = data[0].languages
        ? Object.values(data[0].languages).join(', ')
        : 'No official languages';
      // console.log(languageNames);
      const currency = data[0].currencies
        ? Object.values(data[0].currencies)
        : 'No currencie';
      // console.log(currency[0].name);

      renderCountry(data[0], className, languageNames, currency);
      return neighbour;
    })
    .catch(error => {
      renderError(`Something went wrong ❌❌❌ ${error.message}. Try again!`);
    })
    .then(neighbours => {
      // console.log(neighbours);
      neighbours.forEach(neighbour => {
        // console.log(neighbour);
        fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
          .then(response => response.json())
          .then(data => {
            const neighbourCountry = data[0];
            const languageNames = data[0].languages
              ? Object.values(data[0].languages).join(', ')
              : 'No official languages';
            const currency = data[0].currencies
              ? Object.values(data[0].currencies)
              : 'No currencie';
            // console.log(languageNames);

            //Throw Errors manually to the console
            if (!neighbourCountry) throw new Error('No neighbour found!');
            renderCountry(neighbourCountry, className, languageNames, currency);
          })
          .catch(error => {
            renderError(`Something went wrong 😥 ${error.message}`);
          }) // Do something that we want always to happen
          .finally(() => {});
      });
    });
};

btn.addEventListener('click', function () {
  getCountryData(
    'brazil',
    'w-[250px] h-[350px] bg-grey4 rounded-xl overflow-hidden shadow-lg text-2xl text-black'
  );
});
