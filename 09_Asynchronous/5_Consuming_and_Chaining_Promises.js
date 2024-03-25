import './main.css';

/*
In this lecture, we will learn how to consume a promise. And in this case, we will consume
the promise that was returned by the fetch function. We will wrap the fetch into a function:
*/

const countriesContainer = document.querySelector('.countries');

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

// method .json() and .then() inheritated from fetch.
const getCountryData = (country, className) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    //Promise to fulfill from asynchronous operation
    .then(response => response.json())
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
      /*
      We can remove if(!neighbor) as the forEach will not process if
      there are no neighbors since the array length will equal 0.
      */
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
            renderCountry(neighbourCountry, className, languageNames, currency);
          });
      });
    });
};
getCountryData(
  'brazil',
  'w-[250px] h-[350px] bg-grey4 rounded-xl overflow-hidden shadow-lg text-2xl text-black'
);
