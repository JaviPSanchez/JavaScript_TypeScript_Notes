'use strict';

/*
Let's now add some EventListeners to our application, and kind of simulate that we already have some search results in place.

And let's start by taking a quick look at our flowchart here.
So we already implemented this part here of loading a recipe, and also of rendering it:

<cmg ./img/Picture08.jpg>

But now in this lecture, we want to also hook up these two event listeners here:

<cmg ./img/Picture09.jpg>

so that the recipe is actually loaded on one of these two events here. So when the user selects a recipe from the results list, or when the page loads with a certain recipe Id.

Okay, so let's do that.

And let's also take a quick look here at the demo version. So searching for pizza again, and let's click on any recipe here. And so again, here, you see that we have this hash 👉#.

https://forkify-v2.netlify.app/👉#5ed6604591c37cdc054bcd09

<cmg ./img/Picture07.jpg>

So everything that comes after this hash symbol here is called the hash. So this is the "id" of the recipe. And all of this together is called the hash. And the way this is going to work is that whenever this hash here changes, a new recipe is going to be loaded.

And that changing of the hash is actually an event that we can listen for. So again,  we can listen for that event, take the hash, and from there, take the Id, and then load the recipe with that Id.
*/
window.addEventListener('hashchange', showRecipe);
/*
And so let's do that now. We have to use window.addEeventListener. And the name of the event is called hashchange. Okay. And the function that we want to run then is showRecipe.

Because the next step is that we actually need to get the recipe Id from the hash:
*/
// const id = window.location.hash;
// console.log(id); // #5ed6604591c37cdc054bc886

/*
And here it is. So it's basically the Id plus this hash symbol. And so we want to basically remove this first character. Or in other words, we only want to start reading from the string basically, at the first position. So we can do that easily, using the slice method, starting at one, all the way to the end:
*/
const id = window.location.hash.slice(1);
console.log(id); //5ed6604591c37cdc054bc886
/*
And so now, instead of having the Id hard coded here:

const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );

like we have, right now, we can simply insert the Id right there:
*/
const res = await fetch(
  `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
);
/*
So this was actually already a pretty important part of our applications functionality. But now what happens if we take this entire URL:

http://localhost:1234/#5ed6604591c37cdc054bc886

and copy it and open it in another tab? Well, then no recipe at all shows up. And so that's because this time, the hash did not really change, right? We simply opened this page here, but we never changed the hash. And so we also want to listen for the load event. So basically, for the event of the entire page loading.

Okay, and that's easy enough. So all we would have to do is listen for the load event:
*/
window.addEventListener('load', showRecipe);
/*
So this event here is fired off immediately after the page has completed loading.
But here we have some duplicate code:

window.addEventListener();

And so I actually wanted to show you a nice way in which we can do 'load' and 'hashchange' at the same time. Imagine you had like 10 events for which you wanted to run the same event handler function : showRecipe() So then it wouldn't be good to have this same code here 10 times. Right?. And so instead, what we can do is a nice array, which contains these two events:
*/
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));

/*
And then we can simply loop over this array and do something. And so for that we use forEach. And in this array, each element is an event. So ev for event. And then here,all we have to do is window.addEventListener, and then the event and then the handler function.

So in the first iteration, this ev will be hashchange. And in the second, it will be load. Right? Now it loaded the recipe right at the beginning.


And now, just one more scenario, let's say we didn't have any hash, well, then we get an error. Right? So something went wrong. And then our spinner here keeps loading forever. And so the problem is that right now, we don't have any Id. Right?

And so let's put a simple guard clause, saying that if there is no Id, then return:
*/
if (!id) return;
/*

Then that's it. And again, using guard clauses like this is really the modern way of performing this test. So the old way would have been to write if Id. And then we would have to wrap all of this code here into def block. And so that would then create unnecessary nesting and make our code harder to read.

if (!id) {
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
} return;

And that's actually it for the very core functionality here that we have in our flowchart. And so in the next lecture, it is finally time to talk a little bit about
the architecture that we're going to implement in this project.
*/
