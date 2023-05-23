'use strict';

/*
So in the last lecture, we did a simple AJAX call to fetch data from a country's API.

So we created a function for that. And as we called the function multiple times, multiple AJAX calls were made at the same time. So they were basically running in parallel. And we could not control which one finished first, remember that? However, in this lecture,
let's create a sequence of AJAX calls, so that the second one runs only after the first one has finished.

En este ejemplo que vamos a realizar el objetivo es solo permitir pasar a la siguiente funcion una vez que la primera ha pasado. Vamos a realizar un simple ejercicio, ayudandonos de la informacuion que obtenemos de cada pais gracias a la API, vamos a irnos al OBJECT y buscar sus paises limitrofes, por ejemplo, españa seran Francia, Portugal, Marruecos, etc.

Para organizar el codigo, vamos a acoger el codigo html y vamos a dejarlo en una funcion aparte llamada renderCountry, la cual llamaremos mas tarde y asi no hay que cambiar los variables names! importante!
*/
const countriesContainer = document.querySelector('.countries');
//Le pasaremos informacion, designamos por data:
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
//Cambiamos el nombre de la primera AJAX
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //Llamamos a la funcion renderCountry que contiene el HTML
    // Render country 1
    renderCountry(data);

    // Get neighbour country (2) No olvidemos que la info de los paises limitrofes esta contenida dnetro de data.borders
    const neighbour = data.borders;
    console.log(neighbour);

    //Algunos paises no tienen vecinos, por lo que si no hay datos, nos salimos:
    //Si no existen vecinos, return, GUARD CLAUSE!
    if (!neighbour) return;
    //Pero si existen, hacemos la AJAX call country 2

    //Creamos un loop para que se visualicen todos los paises y no solo el primero.
    for (let border of neighbour) {
      const request2 = new XMLHttpRequest();
      //Aqui ya no buscamos el nombre del pais, sino el neighbour con la particularidad de que la info ya no viene como nombre de un pais sino que es un codigo tipo ESP, FRA, etc pero si nos vamos a la documentaciond e la API podemos ver que podemos elegir por CODE en vez de buscar por nombre! solo hay que cambiar name por alpha:
      request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${border}`);
      request2.send();
      //Ahora solo queda escuhar al server enviarnos de vuelta el HTTP:
      //HAcemos nuestro 'load' y nuestra callback function
      request2.addEventListener('load', function () {
        const data2 = JSON.parse(this.responseText);
        console.log(data2);

        renderCountry(data2, 'neighbour');
      });
    }
  });
};
const pais = prompt('What country are you looking for?');
getCountryAndNeighbour(pais); //HAsta aqui nada calbia todo sera igual, aparecera el pais de españa. Pero nosotros queremos visualizpolandar tambien los paises limitrofes!

//Como curiosidad un callback hell  tiene la pinta siguiente:

/*
So basically, callback hell is when we have a lot of nested callbacks in order to execute asynchronous tasks in sequence. And in fact, this happens for all asynchronous tasks, which are handled by callbacks. And not just AJAX calls.

So for example, let's say we have a set timeout function. And then here, we want to log something to the Console, like 1 second passed, but then also, we want to start another timeout and another inside and so on...
*/
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
/*
And so here we have a callback hell. And in fact, callback hell is pretty easy to identify by the triangular pattern.

Now, the problem with callback hell is that it makes our code look very messy.
But even more important, it makes our code harder to maintain, and very difficult to understand, and to reason about, and code that is hard to understand
and difficult to reason about. Will have more bugs, and it's just worse code.

So this is a great rule that you should always remember and keep in mind. So again, the rule is that code that's hard to understand, is basically bad code, because it will have more bugs, because the harder it is to understand code
and to reason about the code, the more difficult it will be to add new features
and to add more functionality to the application. But anyway, given all these problems with callback hell, we of course, need a way to solve callback hell.

And fortunately for us, since ES6, there is actually a way of escaping callback hell by using something called PROMISES. And so let's now take the next step
in our journey of asynchronous JavaScript, which is to learn all about promises.
*/
