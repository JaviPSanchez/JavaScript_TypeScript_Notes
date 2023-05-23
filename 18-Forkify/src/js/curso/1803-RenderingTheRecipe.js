'use strict';

/*
So after loading the recipe data from or API, let's now render that data in our application.

And for that, let's go to our HTML file to basically get the template from there. So the recipe class whole gray container which is the one that will contain the rendered recipe.
*/

const showRecipe = async function () {
  // 1 --> Loading the recipe
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(recipe);

    // 2 --> Rendering the recipe

    /*
    And so now let's take all the data that we need, siendo la primera la imagen:
    */

    const markup = `
    <figure class="recipe__fig">
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="src/img/icons.svg#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">


          
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">1000</div>
              <div class="recipe__description">
                <span class="recipe__unit">g</span>
                pasta
              </div>
            </li>

            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">0.5</div>
              <div class="recipe__description">
                <span class="recipe__unit">cup</span>
                ricotta cheese
              </div>
            </li>
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    
    `;
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    alert(err);
  }
};
showRecipe();

/*
Vamos rellenando los datos, cabe destacar los ingredientes, que por cada ingrediente tenemos un tag ul, tambiezn saber que los, ingredientes vienen en un ARRAY y cada posicion del ARRAY es un OBJECT:

ingredients: Array(7)
0: {quantity: 1, unit: "", description: "tbsp. canola or olive oil"}
1: {quantity: 0.5, unit: "cup", description: "chopped sweet onion"}
2: {quantity: 3, unit: "cups", description: "diced fresh red yellow and green bell peppers"}
3: {quantity: 1, unit: "", description: "tube refrigerated pizza dough"}
4: {quantity: 0.5, unit: "cup", description: "salsa"}
5: {quantity: 2, unit: "cups", description: "sargento chefstyle shredded pepper jack cheese"}
6: {quantity: null, unit: "", description: "Chopped cilantro or dried oregano"}

And so we will have to basically loop over this array and then use all of this data to create one list element for each of them.


Of course now we need to actually insert this HTML into our DOM. So for that, we can use the insert adjacent HTML method and we need to do that on the parent element, remember, que en nuestro caso es el div con la class="recipe"
*/
const recipeContainer = document.querySelector('.recipe');
//And so that's where we want to attach this HTML markup, lo hacemos afterbegin para situarlo como primer child y luego la variable markup
recipeContainer.insertAdjacentHTML('afterbegin', markup);

/*
Con esto aparecera en nuestro UI el markup con un pequeño problema, hay que quitar el mensaje que teniamos por defecto, y añadir los ingredientes ademas de los icones y demas.

So before we insert any new markup we need to get rid of the markup that is already there. So let's simply do recipeContainer.innerHTML and set it to nothing. So emptying it out.
*/
recipeContainer.innerHTML = '';
/*
So let's now worry about the ingredients. And again, we will need to loop over the ingredients array. And for each of them, we should then create a markup like this:

<li class="recipe__ingredient">
    <svg class="recipe__icon">
    <use href="src/img/icons.svg#icon-check"></use>
    </svg>
   <div class="recipe__quantity">1000</div>
   <div class="recipe__description">
    <span class="recipe__unit">g</span>
      pasta
   </div>
</li>

So how should we do that? El objetivo es devolver un STRING para el HTML markup, lo cual queire decir que nuestro ARRAY tiene que devolver algo, el METHOD .foreach() no nos vale, queremos devolver un nuevo ARRAY, or ello usamos el .map() METHOD.

So map returns a new arraywith the same length. And so that array, we will then in the end, be able to simply join. And so now we can loop over the array by specifying a callback function, So each element is going to be called ingredient and then here we can do something. So let's simply replace a string here.
*/
`${recipe.ingredients
  .map(ing => {
    return `
  <li class="recipe__ingredient">
    <svg class="recipe__icon">
    <use href="src/img/icons.svg#icon-check"></use>
    </svg>
   <div class="recipe__quantity">${ing.quantity}</div>
   <div class="recipe__description">
    <span class="recipe__unit">${ing.unit}</span>
      ${ing.description}
   </div>
</li>
  `;
  })
  .join('')}`;
/*
So each array element is an object which has quantity, unit and description.

And so now here we will have an array in which each element will contain this markup corresponding to the ingredient. And so now all we need to do is to transform that array of strings into one big string. And so now the result of this entire expression
is going to be a big string containing all the ingredients.

But now there is one thing missing, which is the icons. Remember that the page that
is displayed here in the browser, is this HTML here from the disc folder. Right?
And so remember that all the images and really all the assets are now coming from this folder. And that includes the icons. So our icons are always coming from the icon.svg file.

Sin embargo en nuestro template literal seguimos teniendo el old path.
And so right now, JavaScript will not be able to find this. But again right now we are basically shipping the application already. And so it's using the data from the disc folder.

And so now we need a way of telling our JavaScript that the icons file is no longer this one. And we can actually do that with parcel by basically simply importing the icons file.

So let's go to the top of our file because I like to keep all the imports
always at the top. And so again, in parcel, we can import more than just JavaScript files. We can import all kinds of assets and that includes images.

So let's import that file! and let's call it simply icons from where we want to import, tenemos que subir al parent folder, y ya sabemos como hacerlo: ../ 
*/
import icons from '../img/icons.svg';
/*
So if for some reason, you are running parcel one then this is the way to go. But in parcel two, it works almost the same way. But then for any static assets that are not programming files. So for any like images
or videos or sound files, we need to write url: and then the path to the file.
*/
import icons from 'url:../img/icons.svg';
console.log(icons); //http://localhost:1234/icons.d4a14980.svg
/*
This icons really is nothing more than simply the path to the new icons file.

And so now let's use that. So everywhere it says icon. So everywhere we have the old path we now want to replace it simply with the icons.
*/
`<use href="${icons}#icon-clock"></use>`;
/*
And now just to finish this lecture, vamos a implementar unos spinners a nuestra pagina!!

So before the recipe arrives I want like a loading spinner there because that's a very common pattern that you see in all kinds of applications. And it's actually very simple. So we have the code already here in our HTML:
*/
<div class="spinner">
  <svg>
    <use href="src/img/icons.svg#icon-loader"></use>
  </svg>
</div>;
/*
Ahora en JS, simplemente crealos una funcion externa a la que pasamos el parent element, de esa forma podemos agregar la funcion a cualquier parent element.

Dentro añadimos nuestro markup como de costumbre y dentro reemplazamos el viejo path con el nuevo!

And then of course, we need to add this HTML to the dump as a child
of the parent element in this case.
*/
const renderSpinner = function (parentEl) {
  const markup = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};
/*
Esto funciona porque en el codigo CSS tenemos una animacion de rotacion!

.spinner {
  margin: 5rem auto;
  text-align: center;
}
.spinner svg {
  height: 6rem;
  width: 6rem;
  fill: #f38e82;
  animation: rotate 2s infinite linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

And probably, before we insert this, we should also clear the parent element. So just like before setting the inner HTML to nothing.
*/
parentEl.innerHTML = '';
parentEl.insertAdjacentHTML('afterbegin', markup);
/*
Y ahora la parte mas importante, insertar esta funcion donde queremos que se ejecute! en nuestro caso sera al principio de la funcion showRecipe obviamente! como argumento hay que pasar el parent element de donde queramos ejecutarlo, en nuestro caso es el div con la clase "recipe"

 <div class="recipe">

 Lo tenemos ya seleccionado y guardado en la variable:
*/
const recipeContainer = document.querySelector('.recipe');

const showRecipe = async function () {
  //Spinner

  renderSpinner(recipeContainer);

  //(.....)
};
/*
So that spinner is a nice touch, I think. And it definitely makes this application feel more real world.


Now just to finish this video something that I should have done in the last video already is to add polyfills for es6 features to our code base.
So just like we did in the previous section as well. So remember to do that, we installed some special packages. So the packages are called:

👉 npm i core-js

and we can actually install multiple packages at the same time.

👉 npm i core-js regenerator-runtime

Una vez instalados los importamos:
*/
import 'core-js/stable';
import 'regenerator-runtime/runtime';
/*
So we have this working. Now in the next video, let's quickly add some event handlers so that after that we can start talking about the architecture.
*/
