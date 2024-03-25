'use strict';

/*
Many real world applications have special modules that are completely independent of the rest of the architecture. And these modules are for the project configuration and for some general helper functions that are gonna be useful across the entire project. And so let's now implement these modules in our own project. And let's start with the configuration module.

In our JS folder, we create a new file config.js. And so here into this file, we will basically put all the variables that should be constants and should be reused across the project. And the goal of having this file with all these variables is that it will allow us to easily configure our project by simply changing some of the data that is here in this file. So of course we will not want to put all the variables here in this file.

The only variables that we do want here are the ones that are responsible for kind of defining some important data about the application itself. So one example of that is for example, the API URL.
*/
export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
/*
So this URL here, we will actually reuse in multiple places across this project, for example, for getting search data, and also for uploading a recipe to the server. And so all of them will use this URL.

So let's call this one API_URL, And now all we have to do is to export this constant from here. So, I'm using uppercase here, because this is basically a constant that will never change. And so using uppercase for that kind of variable is kind of a common practice especially in a configuration file like this. So, API_URL is one of the variables that makes a lot of sense.

And now actually import that into the model.js now remember that here we have a named import, and later we will actually also have more named imports. And so here I could go ahead and import all of them basically at the same time:
*/
import * as config from './config.js';
/*
or actually I prefer to import them one by one, basically with their actual name. And so remember we do that by using curly braces and then the name
of the variable like this:
*/
import { API_URL } from './config.js';
/*
and then config is in the same folder. And so that should work, and here, all we have to do now is to replace, or to actually put that API_URL right here:
*/
export const loadRecipe = async function (id) {
  try {
    //And so we successfully basically export it, this configuration value that we have API_URL into this config file. Okay.
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;

    console.log(state.recipe);
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
/*


Next up, let's create a new file for some helper functions. So this one is usually called helpers.js. And the goal of this file is to contain a couple of functions that we reuse over and over in our project.


And to start we have a great candidate, which will be the getJSON. So basically a function which encapsulates all of this ⏬, and also some of the error handling.


And so here let's create a function and export it, called getJSON. So it's gonna be an async function which will basically do the fetching and also converting to JSON all in one step. And so with this, we abstract all this functionality into one nice function that we can then use all over our project.


*/
//this getJSON function, we'll take a url como argumento so with this, we can then reuse this function for other URLs.
export const getJSON = async function (url) {
  //So let's now put all of this into a try block, and then catch the error. Now, what we are going to do with the error here? Of course we could do a console.log or alert it as always to the console but let's say we actually want to handle that error here in the function situada en el helpers.js
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    //Hay que devolver la info, siendo este valor "data" el resolve value of the promise que la funcion getJSON returns
    return data;
  } catch (err) {
    throw err;
  }
};
/*
This is actually not where we want to handle the error. We really would like to handle it in model.js. So basically we have to re-throw the error.
And so now with this, the promise that's being returned from getJSON will actually reject.

Okay.

And so then we will be able to actually handle the error in the model.js.
*/
export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;

    console.log(state.recipe);
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
/*
So we basically propagated the error down from one async function to the other by re-throwing the error in the catch block of the . And that's really important to do. And we will actually come back to this in one of the future lectures.

Okay. And now to finish, let's make this function here a little bit more robust and more real world code by adding some time out. So basically setting a time after which we make the request fail. And so this is important in order to prevent for really bad internet connections where the fetch could be running forever.
*/
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
/*
And so basically what this function does, is that it will return a new promise which will reject after a certain number of seconds. And so in order to now use this function here, we will have a race between the time out promise which will take whatever seconds we pass into it, and the fetch function, which is the one responsible for getting the data. And then whatever occurs first will win the race.

So let me just put that in code actually:
*/
export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    //Hay que devolver la info, siendo este valor "data" el resolve value of the promise que la funcion getJSON returns
    return data;
  } catch (err) {
    throw err;
  }
};

/*
So, remember that works by using Promise.race, and this takes in two promises. So the first promise is fetchPro, and then the second promise will be time out with a certain number of seconds que los importaremos desde config.js
*/
export const TIMEOUT_SEC = 10;
//importamos aqui, So again is a named import and so here we use the curly braces.
import { TIMEOUT_SEC } from './config.js';
/*


So let's analyze what happened here. So we passed in X seconds TIMEOUT_SEC  And so after that time has passed, this promise simply rejected with this error message:
*/
reject(new Error(`Request took too long! Timeout after ${s} second`));
/*

And so as soon as any of these promises here in the race rejects or fulfills, then that promise will become the winner And so therefore we now have a rejected promise here, which will then trigger the catch block here.
And so that error will then be thrown again here. And then it will make its way into the loadRecipe function at the model.js

Now of course, then in the real world, we will want to do something with that error, but again, a bit more on actual error handling a bit later in the section.



TIMEOUT_SEC is one of these so called magic numbers or magic values, which is like a value that seems to appear out of nowhere. So if someone reads this code, they will find this number 10 and not really understand what it's doing. And so one more time, this is a perfect candidate for a configuration value.

So this is something that we might want to change about our application. And so, if we want to do that, all we have to do is to come to our config.js file and change it.






So, these are two important files helpers.js and config.js that are used in many applications in the real world. And so make sure to also include them in some way in your own applications, in the future.

Okay.

And now in the next video, we will kind of finish this architecture and to really implement a missing part here which is kind of handling the events in a better way.

And so let's go do that right now.


*/
