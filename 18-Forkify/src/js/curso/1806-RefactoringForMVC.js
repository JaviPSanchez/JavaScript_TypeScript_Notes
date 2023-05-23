'use strict';

/*
So now that you know everything about the model-view-controller MVC architecture and also how it's gonna be implemented in our project, let's now actually go do that in practice. And this is gonna be a long lecture, so let's get started.

And let's start by creating the necessary new files so that we can then split up our code between them. Creamos los archivos siguientes dentro de la carpeta de src:

181-controller.js
182-model.js
183-recipeView.js

So we will have one big module here for all the controllers:

181-controller.js

Then one big file for the entire model, So for all the models basically:

182-model.js 

So for the recipe, for search, for bookmarks, for the views, we will have one module for each of the different features:

183-recipeView.js
184-xxx.js
185-yyy.js

And you'll understand why that makes sense as we keep developing our application. And probably the first reason that comes to mind is that the views are simply much bigger. And so we don't want a file, which like 500 lines of code.

We could, of course, also split up the model and the controller and probably many people would do that but I don't want to have to mess with a lot of files here in this project. That would just make it very confusing for you to follow.

So let's actually take a look again here at this architecture that I showed you in the last video:

<cmg ./img/Picture17.jpg>

And here, we will actually start with the model. So again, we're going to have a big state object, which then inside will contain an object for recipe, search and bookmarks. And now we will just start with the recipe
and then there will be a function for loading the recipe, right?

And so then that function will then be called by controlRecipes, which kind of sits between loading the recipe and then rendering it using the view. So remember that the controller kind of sits between model and the view so it acts like a bridge.

And so here in our model: 182-model.js let's simply create that state object:
*/
const state = {};
/*
and then in there we have the recipe, which in turn, is also an empty object. At least at the beginning:
*/
const state = {
  recipe: {},
};
/*
And then we will export this state so that we can then use it in the controller.
*/
export const state = {
  recipe: {},
};
export const loadRecipe = async function () {};
/*
So we're exporting the state from here and now let's also create that loadRecipe function. And of course, we also export it so that we can use it in the controller. So loadRecipe. And this function will be the one responsible for actually fetching the recipe data from our Forkify API. And so this is going to be an async function. All right?

So as I said, basically the goal of this lecture is to refactor all the code here
into the different parts of the architecture. Okay? So what here exactly is concerned with basically getting the data? So it starts here when we fetch the recipe from the API and then basically, it's all of this here:
*/
export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  //
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
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
};
/*
Now, we just need to get this ID from anywhere. So right now, we have no idea
which ID we should actually fetch. And so it's probably a good idea to pass that ID into the loadRecipe() function.

So the 181-controller.js is the one that will actually get that ID right here:
*/
const id = window.location.hash.slice(1);
console.log(id);
/*
and so then when it calls the model, so the loadRecipe function, it can pass that ID into it. And this actually should now not be the recipe but state.recipe:
*/
const { recipe } = data.data; //👌
state.recipe = {
  //👌
  id: recipe.id,
  title: recipe.title,
  publisher: recipe.publisher,
  sourceUrl: recipe.source_url,
  image: recipe.image_url,
  servings: recipe.servings,
  cookingTime: recipe.cooking_time,
  ingredients: recipe.ingredients,
};
console.log(recipe); //👌
/*
And here we can just create a const from this. And here let's also log state.recipe. All right.

So this function here loadRecipe() is not going to return anything. All it will do is to change our state object.So this big state object:
*/
export const state = {
  recipe: {},
};
/*
which will then contain the recipe and into which the controller will then grab and take the recipe out of there. And this is going to work because there is a live connection between the exports and the imports. Remember that?

So when this state object here is going to get updated by loadRecipe, then that state is also updated in the controller, which imports the state.

So let's now actually import all of that into here. So doing it here at the very top of 181-controller.js So import and then from the model, we simply want to import everything. So we have a couple of named exports here. So again, there are named exports and default exports and these ones are named exports because we explicitly gave them a name like loadRecipe, state, etc and so here we can simply import everything and then call it the model from de current folder.
*/
import * as model from './model.js';
/*
And so here in the controller, we will then end up with model.state and model.loadRecipe. Remember that?



And so here, now let's actually call the function at the 181-controller.js
*/
// 1 --> Loading the recipe
await model.loadRecipe(id);
/*
So let's call model.loadRecipe and then pass in the ID. And this loadRecipe function is an async function and therefore, it is going to return a promise.
Remember? And so therefore, here we have to await that promise before we can move on in the next step here in the execution of this async function.

And so you see, this is exactly the situation of one async function calling another async function that we already studied in one of the previous sections.
Remember that? And so again, it is really, really important to keep in mind that an async function will return a promise that we then need to handle whenever we call that async function.

At least, if we want to get some result out of it or if we kind of want to stop the execution in the function that is calling the other async function. All right? So again, really important to understand the mechanics of what is happening here.

Now, here we should probably also have some error handling:
*/
export const loadRecipe = async function () {
  // So try and all the way down here, and then catch the error and then alert the error as well.
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const { recipe } = data.data;
    state.recipe = {
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
  } catch (err) {
    alert(err);
  }
  err;
};
/*

All right. So remember that this loadRecipe function here does not return anything. And so therefore, we are not storing any result into any new variable.
Instead, here we will get acces to state.recipe that is going to be manipulated right here:

const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

So you see that this loadRecipe function here clearly is not a pure function.
So it has the side effect of manipulating this variable that is outside of it.


But anyway, we now here 181-controller.js have access to model.state.recipe:
*/
const recipe = model.state.recipe;
//Lo convertimos en:
const { recipe } = model.state;
/*
And so just in order to see if everything still works, let's store that recipe into the recipe variable so that we can then render it, and then destructure it.
So let's give it a save and continue our application here.




So that was actually the easy part, now comes the recipeView, which will then contain basically all the rest of the code that we have here. So let's go here and set the view up. So the view is going to be a class and in this case called RecipeView.
*/
class RecipeView {}
/*
And we do this because later, we will also have a parent class called View, which will contain a couple of methods that all the views should inherit. And so using classes makes all of this very simple to implement.

Also, we want each view to have a couple of private methods and properties and so classes makes this really easy to implement again. And just in general, I feel that classes are really the right way to go here. And again, it will make even more sense once we start to add the parent class of view.

But anyway, I mentioned that I want each of these classes to have a couple of private properties and one of them is going to be the parentElement.
*/
class RecipeView {
  #parentElement = document.querySelector('.recipe');
}

/*
So parentElement, and let's right away set the parentElement to the recipe container. Because this will then make it really easy to render the spinner
and to render success or error messages or to render, of course, the recipe itself.

So if each of the views has this parentElement property, then it will be really easy to do all of those tasks and again, that will become really clear once we start adding more and more views.

But now the next thing I want to do is to actually export something from this module. So of course, we have to export something from this view so that the controller can then use it:
*/
export default new RecipeView();
/*
En vez de exportar todo la clase:
export class RecipeView {
  #parentElement = document.querySelector('.recipe')}) 
  
que nos daria demasiados problemas o por lo menos nos obligaria a crear un nuevo OBJECT en controller.js tal que asi:

const recipeView = new recipeView(model.state.recipe)

, creamos un nuevo OBJECT y exportaremos ese OBJECT. And so like this, no one from the outside of the class RecipeView will have access to anything, except for the object.

So what we will do is to export default and then a new RecipeView. All right?
And that's actually it. So we don't pass any data in and so therefore, we don't need any constructor even. Okay?

And then here 181-controller.js all we do is import:
*/
import recipeView from './183-recipeView.js';
/*
So I'm calling it recipeView because I think that's what makes most sense. Now, how do we then actually pass any data into the recipeView? Because if we're not creating the new object ourselves, then we cannot pass any data in for the constructor, right? So we cannot pass any data into this RecipeView:
*/
export default new RecipeView();
/*
Because we're creating that object in the RecipeView module already. But actually, I did that on purpose so that we can create a very nice method called ..render().
*/

recipeView.render();

/*
And then here all we do is to pass in the data which will be model.state.recipe.
*/
recipeView.render(model.state.recipe);
/*
And this method here called render is a very common name for methods, for example, in React, it is also called render. And so I think this is a nice name.
It's really descriptive of what is going to happen.


So having this nice render method is a lot more descriptive and a lot cleaner and also for the reasons that I explained previously already. Now, anyway, this render method here will now accept this data : model.state.recipe

It will then store it into the following object from 183-. So let's add the public render method
*/
class RecipeView {
    #parentElement = document.querySelector('.recipe');
    #data; 👌
  
    render(data) {
      this.#data = data;
    }
  }
/*
So this receives data and will then set this.#data to the data it just received.
So we need to declare that up here 👌. And so this render method here and these two properties are something that all the views are going to have in common.

And this will be really beautiful to work with as you will see.

But now, let's actually do something with this data, which is to actually render it. So basically what we want now is to take all of this code:

#generateMarkup() {
    return `
    <figure class="recipe__fig">
          <img src="${recipe.image}" alt="${
      recipe.title
    }" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${
              recipe.cookingTime
            }</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${
              recipe.servings
            }</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${recipe.ingredients
            .map(ing => {
              return `
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
              <use href="${icons}#icon-check"></use>
              </svg>
             <div class="recipe__quantity">${ing.quantity}</div>
             <div class="recipe__description">
              <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
             </div>
          </li>
            `;
            })
            .join('')}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${
              recipe.publisher
            }</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    
    `;
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
  }

And put it into our view: 183-recipeView.js Okay? Now, we will actually not put it into the render method:

render(data) {
    this.#data = data;
  }

because again, this method will later be common to all the views. So to all the classes. However, each view will, of course, render different HTML. And so we will simply have a method that generates that HTM so that the render method can then render that HTML. So if that sounds confusing, let me write it in code.

So #generateMarkup()

And so this is going to be a private method # and since we're using Babel here,
I can already use this syntax here #. We can actually immediately return the markup varible. Okay? Now, this is not going to do anything yet because what is recipe here in this case? It's nothing, right?

#generateMarkup() {
    return `
    <figure class="recipe__fig">
          <img src="${recipe.image} 🖐 este recipe no esta ligado a nada!
      (.....)
}

It's not defined at all. Now, in this case, where is this data actually? Well, it is in this.#data, right? So why's that? So let's take a look at our controller
and let's start from the beginning. So the recipe is loaded here:

// 1 --> Loading the recipe
    await model.loadRecipe(id);
    const { recipe } = model.state; --> Borramos

and then that will store it into the state object, right? Here we don't need tis anymore: const { recipe } = model.state;

Then here:

// 2 --> Rendering the recipe
    recipeView.render(model.state.recipe);


we take model.state.recipe, which is that data that we just received here in step one and then that data is passed into the render method, right? And so render method then takes that data and stores it inside of this.#data. And so this is so that we can then use that data all over the place inside of this object.

And by the way, this is exactly what we have here in this architecture diagram.

<cmg ./img/Picture18.jpg>

So inside of controlRecipes(), the loadRecipe() function is called, then the recipe data goes into the state and then that data passes right through the controller basically and goes into the render method, which then in turn, calls _generateMarkup().

So you see, we already have many things here implemented here already, like data and parentElement, we're just missing some small parts but we are going to get there. But now what we were doing here is to discuss where this recipe data is actually located right now:

${recipe.image} --> This data 🤗

And we came to the conclusion that it is in this.#data. So We will copy it and then we need to replace all the recipe with this.#data. and then that's it. All right?

Then down here, we have this code:

recipeContainer.innerHTML = '';
recipeContainer.insertAdjacentHTML('afterbegin', markup);

which is not supposed to be here because all this function does is to return an HTML string. And it's going to be the render method that will be responsible for then actually putting that HTML onto the page.
*/

render(data) {
    this.#data = data;

    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
}
/*
Now, okay. So here, let's say that the markup is this.#generateMarkup:
*/
render(data) {
  this.#data = data;
  const markup = this.#gerenateMarkup;
  recipeContainer.innerHTML = '';  // clearing the parentElement
  recipeContainer.insertAdjacentHTML('afterbegin', markup);
}
/*
So we have our markup. Now we need to put it on the page. So again, we need to start by clearing the parentElement and actually, let's create another small method for that. So just to get in the habit of obstracting some code and so now this is where our #parentElement will come into play, because now we can say this.#parentElement.innerHTML and set it to empty:
*/
#clear( ) {
  this.#parentElement.innerHTML = '';
}
/*
And so this method here will be usable for all the views as long as all the views have a #parentElement property like this one. So all of this will become really reusable as you will in one of the future lectures.
So here we now can then call that:
*/
render(data) {
  this.#data = data;
  const markup = this.#gerenateMarkup();
  this.#clear();
  recipeContainer.insertAdjacentHTML('afterbegin', markup);
}
/*
And then to finish, we can finally render that HTML to the page. And so here, once again, we can now use this.#parentElement and then insert the HTML.
*/
render(data) {
  this.#data = data;
  const markup = this.#gerenateMarkup();
  this.#clear();
  this.#parentElement.insertAdjacentHTML('afterbegin', markup);
}
/*
Now, this one at 181-controller.js, we actually want to call it controlRecipes:

const controlRecipes = async function ()

So let's replace it everywhere. And so now what we're missing is only to export the renderSpinner also into the view --> 183-recipeView.js
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
So this one not a function but a method and this one will also be a public method so that the controller can then call this method here as it starts fetching the data. Okay? And now here again,
we have the beauty of the parentElement already being inside of the object. So we can simply delete the argument (parentEl) and we can replace the rest with this.#parentElement.
*/
renderSpinner = function () {
  const markup = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>
  `;
  this.#parentElement.innerHTML = '';
  this.#parentElement.insertAdjacentHTML('afterbegin', markup);
};
/*
Next up, I'm seeing that this icons variable is not going to be defined anywhere in the module: 181-controller.js
*/
import icons from 'url:../img/icons.svg';
/*
So we will need to grab that and put in the 183-recipeView.js

And now what we need to do is to then call this .renderSpinner() in the 181-controller.js:
So that's going to be recipeView.renderSpinner() and here again, we no longer need to pass in the parentElement:
*/
recipeView.renderSpinner();
/*
And just watch how beautiful this is. So we have recipeView and then renderSpinner and we already know that this will then automatically render the spinner on the recipeView. And the same is later going to happen with other views. For example, with the bookmarks view. We will also have a renderSpinner on the bookmarks view and it's going to work the exact same way. And the same with render. So all we have to do is call these same methods then on all the views and they will then simply act on whatever view that we are calling them, right?

And that works so nice because we have this parentElement here and also this data property:
*/
class RecipeView {
  #parentElement = document.querySelector('.recipe');
  #data;
/*


And so I think with this, we successfully refactored our entire code to this new architecture. Well, not the entire code actually. We're still missing this handlerRender( ) in the ClassRecipeView.

But don't worry about that for now, okay? We will have a separate lecture, which will talk about how we can handle events in this particular architecture. For now what matters
is that this works just nicely. There's just one thing that I actually want to change but that has nothing to do with the architecture. So what I want to change the number formats. So do you see here we have 0.5 but in the real world, you will see this more like this. So like 1/2 tablespoon of brown sugar instead of 0.5. And so for that, we are actually going to use an external library, which will very easily do this for us. Okay?

👉 npm i fractional

And so you can basically create new fractions based on numbers and then you can do all kinds of multiplications with them, like multiplying, dividing and in the end, converting them to a string.
And so that's what we will do now. So we will convert each number to a fraction and then immediately convert them to a string.

And so let's import fractional:

import Fraction from 'fractional';

And so here again you see that any libraries or any packages that we import from npm, we don't even have to specify any path. All we have to do is to write their names here
and then here what they export. And let me see what they actually export. So it should be called fraction, okay? So this library actually exports something called Fraction.
And we can see that because here, it is importing the fractional library using require:

https://www.npmjs.com/package/fractional

 --> var Fraction = require('fractional').Fraction

And that is simply the old CommonJS way of importing, which I showed you earlier. And so that is one of the reasons why I show that to you because so many packages on npm are still using CommonJS.


So here:

<div class="recipe__quantity">${ing.quantity}</div>

we now no longer simply want the quantity but we want the quantity converted to a fraction string. So according to the documentation,
we have to say:
*/
`<div class="recipe__quantity">${new Fraction.Fraction(
  ing.quantity
).toString()}</div>`
/*
and in this case, it's actually Fraction.Fraction. So again that's because here inside of Fraction is where the Fraction function is actually located. Okay?

And here you could see that we have to then use new. Now, actually to make this a bit nicer, we can also use destructuring here right away:
*/
import { fractional } from 'fractional';
/*
And then call .toString() on that just like it said in the documentation. So you see that now as I destructured that fraction, it became the actual function:

`<div class="recipe__quantity">${new Fraction(
  ing.quantity
).toString()}</div>`

And yeah, here you see beautifully that it is now in this format of the fraction.



And so this is how we reach for packages on npm. So when we need some functionality that we don't want to implement ourselves.

I'm just going back here because I noticed some problem here which was this one:

NaN NaN/NaN

And that was because previously here we had null. So there was no value for this cilantro. And so we should probably check if the number does exist.
So we can say:
*/
`<div class="recipe__quantity">${ing.quantity ? new Fraction.Fraction(
  ing.quantity
).toString() : ""}</div>`
/*
If it exists, then do this. And if not, then simply put an empty string there



Now just to finish, I actually want to refactor this function here at 183-recipeView.js
*/
`
<ul class="recipe__ingredient-list">
${this.#data.ingredients
  .map(ing => {
    return `
  <li class="recipe__ingredient">
    <svg class="recipe__icon">
    <use href="${icons}#icon-check"></use>
    </svg>
   <div class="recipe__quantity">${
     ing.quantity
       ? new Fraction.Fraction(ing.quantity).toString()
       : ''
   }</div>
   <div class="recipe__description">
    <span class="recipe__unit">${ing.unit}</span>
      ${ing.description}
   </div>
</li>
  `;
  })
  .join('')}
</ul>
 `
/*
We are going to create this:
*/

#generateMarkupIngredients(ing) {
  return `
  <li class="recipe__ingredient">
    <svg class="recipe__icon">
    <use href="${icons}#icon-check"></use>
    </svg>
   <div class="recipe__quantity">${
     ing.quantity
       ? new Fraction.Fraction(ing.quantity).toString()
       : ''
   }</div>
   <div class="recipe__description">
    <span class="recipe__unit">${ing.unit}</span>
      ${ing.description}
   </div>
</li>
  `
}
/*
And this will then receive the ingredient (ing). And then inside of the map, we can then simply call this:

#generateMarkupIngredients(ing)

And so successfully refactored this part and so we are now done in this lecture where we also successfully refactored the entire code that we already had to the model-view-controller (MVC) architecture. All right? So we're not done 100% but we've done a lot of work in this lecture and I really hope that you understood everything that we did here.

So this was a really, really, really important lecture. So make sure that you understand everything that we did. So make sure to review all the code and also compare it here with the diagram one more time.

You really must understand how all of this fits together because otherwise, it's gonna be very hard to follow the rest of the project.
*/
