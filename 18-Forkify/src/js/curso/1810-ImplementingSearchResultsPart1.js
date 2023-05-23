/*
Let's now start implementing the next feature of our application, which is going to be the search functionality. And let's start by taking a look and or flowchart here.

<cmg ./img/Picture26.jpg>

We are going to work basically first on the user searches part. So handling the event of a user searching for recipes, then loading the search results and rendering them. So that's going to be this lecture and the next one. And then afterwards, we are going to worry about the pagination.

And so for that, we need to now implement the model, the view and the controller that binds everything together.

And usually, I find it easiest to start with the data. So basically with the model, which means in this case,
starting to make some API calls in order to load some search results. So let's start implementing the search functionality. So, just like before, we are going to create a function that will be exported so that it can be used
by the controller:
*/
export const loadSearchResults = async function (query) {};
/*
And this one, I'm gonna call it loadSearchResults. And so, since this one will be performing AJAX calls it's going to be an async function. Now, again this function here is going to be called by the controller. And so, it's going to be the controller who will tell this function what it would actually search for. So basically, it will pass in a query argument like string, which we can then plug into our API call.
*/
export const loadSearchResults = async function (query) {
  try {
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
/*
And here we are going to need a try catch block, and here in the catch block, all we will do is to, basically do the same as before. So, all we're really interested in here is to throw the error again so that eventually, we will be able to use it in the controller. So just like before in the last lecture 1809.

So that part is easy, but now let's actually implement the functionality. And to do that, let's go back to our documentations page: https://forkify-api.herokuapp.com/v2

And so, this is how we get all recipes, so making a get request to this path : https://forkify-api.herokuapp.com/api/v2/recipes and then, with the search parameter, and the way we add a parameter, and I think I explained this before is with the question mark ?, and then search equal, and then, pizza here in our case is actually the search query:

https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza

And so, basically, this is the URL that we need to call in our AJAX request.
*/
export const loadSearchResults = async function (query) {
  const data = await getJSON(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`
  );
  try {
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
/*
And so now, just like before, use the get JSON method. And so, that will then fetch the data and also convert it to JSON and create an error if something went wrong. So get JSON returns a promise. And so we await that here and store it into data, just like always. So get JSON and then the URL, and we need a template literal.

And so now we just have to replace everything to make this work. And the first thing is to actually take again out the page address, and replace it with the API_URL coming from config.js
*/
export const loadSearchResults = async function (query) {
  const data = await AJAX(`${API_URL}?search=${query}`);

  try {
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

/*
And usually, actually a URL ends with a slash, so it should be like this : https://forkify-api.herokuapp.com/api/v2/recipes/

Then here, question mark search and then this one is going to be our query. And so, we can then already log that data to the console, to take a look at it before we then manipulate it a little bit. Before we actually write any controller or any view, we can already call that function here.
*/
loadSearchResults('pizza');
/*
So load search results, and then let's try it, as always with pizza and see what we get. And indeed, this is the result that we get here:

{status: "success", results: 59, data: {…}}
data: {recipes: Array(59)}
results: 59
status: "success"

And so here, is the data that we get back. So we have an object which has a data property, which then has a recipe's property, which is the Array. And then, each array contains all of the data about each of the recipes. So, again, this object here is called data then in there, there is data again, and then in there, there is recipes, which is then, the array itself where each of the elements is an object with only some of the data about the recipe.

{status: "success", results: 59, data: {…}}
data:
recipes: Array(59)
0:
id: "5ed6604591c37cdc054bcd09"
image_url: "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg"
publisher: "Closet Cooking"
title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)"


So you see, it's not the complete recipe object, it's only some of the data so that we can actually display it in the search results UI. So without the unnecessary data like ingredients and all that.

All right, so let's now take this data and store it into our state. And also, we will want to change again image_url to image only. And so, we will basically create some new objects based on this data that we receive here.
All right.

So, we get data.data.recipes:
*/
data.data.recipes;
/*
So this is the array of all the objects. And now we want to create a new array which contains the new objects where the property names are different:
*/
data.data.recipes.map(rec => {
    return {
      id: rec.id,
      title: rec.title,
      publisher: rec.publisher,
      image: rec.image_url,
    };
/*
So, let's map over this, and each element is going to be a recipe "rec". And then here, we will simply return a new object. So this will return a new array with the new objects. And so now, where should we store that? Well, as you can guess, we will put it also in our state. So again, the state contains all the data that we need in order to build our application.
*/
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};
/*
So let's call this one search and all the data about the application that I just mentioned might as well also include the search query itself. So let's create a new object here search: {} and then specify the query, which we start as an empty string. And then, the results, let's say, results, and will start as an empty array. So, basically the state should contain all the data really about the application.


And then the data's already there for us. For example, we might want to add some analytics  in the future to know which queries are made the most. And so by then, yeah, as I said, that would become useful. Okay. But anyway, let's now store this data in state.search.results, right:
*/

state.search.results = data.data.recipes.map(rec => {
    return {
      id: rec.id,
      title: rec.title,
      publisher: rec.publisher,
      image: rec.image_url,

};
/*

And here at the beginning, the very first thing that we're going to do is to state.search.query equal to query:
*/
export const loadSearchResults = async function (query) {
    try {

      state.search.query = query;
  
      const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
      console.log(data);
  
      state.search.results = data.data.recipes.map(rec => {
        return {
          id: rec.id,
          title: rec.title,
          publisher: rec.publisher,
          image: rec.image_url,
         
        };
      });
      state.search.page = 1;
      console.log(state.search.results);
    } catch (err) {
      console.error(`${err} 💥💥💥💥`);
      throw err;
    }
  };
/*
All right. And now, let's quickly just to see if everything worked, log data to the console. So state.search.results.

(59) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {id: "5ed6604591c37cdc054bcd09", title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)", publisher: "Closet Cooking", image: "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg"}
1: {id: "5ed6604591c37cdc054bcc13", title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)", publisher: "Closet Cooking", image: "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg"}
2: {id: "5ed6604591c37cdc054bcb34", title: "Homemade Pizza", publisher: "Simply Recipes", image: "http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg"}
3: {id: "5ed6604591c37cdc054bcb37", title: "How to Grill Pizza", publisher: "Simply Recipes", image: "http://forkify-api.herokuapp.com/image

And here we are. So that is exactly the kind of array that we had before. And now the image URL we had before is indeed called image. And so everything has the same format as before.  And of course, we want everything to have the same names throughout the entire application.

So let's get rid of the code calling the function

loadSearchResults('pizza');

because of course, we want to call this function in a controller. And so let's go there to the controller
and basically create a new function which is going to be like the new controller:
*/
const controlSearchResults = async function () {
    try {
      
    } catch (err) {
      console.log(err);
    }
  };
/*
So const controlSearchResults. And so this one, of course then also need to be an asynchronous function itself.
And so, as always try catch, and here for now, let's simply log the error
and we will then fix that later.

So, here is where we actually will want to call the loadSearchResults that we just built. So that is in model.loadSearchResults.
*/
const controlSearchResults = async function () {
    try {
    
      
      await model.loadSearchResults('pizza');
  
    } catch (err) {
      console.log(err);
    }
  };


/*
And here we then, we'll need to pass in the query, but for now, let's just do that again manually 'pizza'. And of course, we need to await this, but we do not store any results anywhere because, just like the loadRecipe function,
this one also doesn't return anything. All it does is to manipulate the state. And so, then we should be able to do this console.log in the controller and still get access to the results, right? So, let's see:
*/
const controlSearchResults = async function () {
    try {
    
      
      await model.loadSearchResults('pizza');
      console.log(model.state.search.results);

    } catch (err) {
      console.log(err);
    }
  };
/*
Now, of course, we first have to also call this function. And again, later, we will, of course hook this us up to an event listener.


But now, instead of only searching for pizza, we actually want to get the query right here from this input field  in the UI, right? And we also want to start this whole process of loading the search results when the button "search" is clicked. And so, now let's basically create a view only for this search part here.

So we will have a view for the search UI component. So for the search field, and for the button, and then a different view which will actually render the results. So, it's a good idea to keep every view really focused.




Now the view search results is of course not going to render anything, but what it will do is to basically give us the content of the input field. So getting that input data is of course something that has to do with a DOM. And so, it should be in a view and not in a controller, right?



And so, in order to follow our architecture, we will create a new view right now. And this one is going to be called the searchView.js.
*/
class SearchView {
    _parentEl = document.querySelector('.search');
  
    
  }
  
  export default new SearchView();

/*

And just like before, here, we will create a class called searchView and we will then not export that class
but export an instance, so an object that was created by this class. So export default new SearchView, and without passing in any data.

Just like before, we will have a parent element "parentEl" and then we will set that to something in the DOM. So in the HTML, we have this entire form, which is called search:

        <form class="search">
          <input
            type="text"
            class="search__field"
            placeholder="Search over 1,000,000 recipes..."
          />
          <button class="btn search__btn">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-search"></use>
            </svg>
            <span>Search</span>
          </button>
        </form>

and which has this input field and also the button. And so I think that this is the element that makes sense to select. So the one with the class of search, so .search. So this is our parent element here in this case. Now, again, this class is not going to render anything. All we want is to get the query and eventually to also listen for the click event on the button,

but let's start with the query here:
*/

class SearchView {
    #parentEl = document.querySelector('.search');
  
    getQuery() {
      return this.#parentEl.querySelector('.search__field').value;
      
    }
    
  }
  
  export default new SearchView();

/*
And so, let's create a method that we will then call from the controller called getQuery(). And all this will do
is to return this.#parentElement. And then from there, we want to select this input field. So this one with this class="search__field" And so let's a select this child element using a querySelector, and then simply get the value of that.

Okay, and that's actually it. And again, of course we could have written this exact same code in a controller.js, but that wouldn't make any sense, because this is not concerned about the DOM at all. So we don't want to have any DOM elements in the controller.js We don't even want to know what the DOM looks like.

And now, I want to get the searchView here at the top of the controller.js
*/
import searchView from './views/searchView.js';
/*
And then here, we can get that query by saying searchView.getQuery:
*/
const controlSearchResults = async function () {
    try {
   
      const query = searchView.getQuery();
      if (!query) return;
  
      
      await model.loadSearchResults(query);
      console.log(model.state.search.results);
    } catch (err) {
      console.log(err);
    }
  };

/*
And of course, there might be no query. And so, let's add another guard clause here. So if there is no query,
then return immediately. And so here, we will now no longer look for pizza, but for query.


And so, in order to actually make this work, we now need to listen for the event of basically clicking this button or submitting this form. And then, only on that event, we want to actually call, this controller function controlSearchResults. So not in the beginning when the script loads.

So we will listen for the event in the searchView.js, and then pass the controller function. So the handler function
into the method that we will build here.
*/

addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

/*
So this addHandlerSearch method here is basically going to be the publisher and the controlSearchResults function is going to be the subscriber. Okay, so hopefully you really understood that pattern that we used before. And so this now, it should be obvious.

So, let's take our parent element. So this.#parentElement of course, and then this is where we will actually add the event listener. So not to the button, but really to the entire form because there, we can listen for the submit event. And so then, this will work no matter if the user clicks the submit button or if the user hits Enter while typing the query.

Now here, we cannot simply call the handler immediately, because remember, as we did many times before when we submit a form, we need to first prevent the default action, because otherwise the page is going to reload. So, e.preventDefault(). And only after that, we can call the handler() function.

And, as you already know, this handler function should be the controlSearchResults function. And so, all we have to do now is to call this method and pass in that function. So, let's do that:
*/
const init = function () {
   
    recipeView.addHandlerRender(controlRecipes);

    searchView.addHandlerSearch(controlSearchResults);
    
  };
  init();

/*
So searchView.addHandlerSearch. So you'll see that I'm always going to use this name here of addHandler, and then we pass in the controller function : controlSearchResults and that's it. So now it should actually already work.


Okay, so that's again, try pizza and yeah, beautiful, it worked. And so here we have the exact same 59 data that we had before. Let's try something else now, avocado, let's say, so I hit Enter, and, so this time we got 39 search results and you see, all of them basically have avocado right there in the title, it's really beautiful that it already works this great.

Now just one small detail, is that, after we search, we should probably clear out this field. So let's add another small method for that in the view:
*/
_clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }
/*
So, clearInput, and once again, having it nicely encapsulated inside of the searchView. So again, this could simply be also in a controller, because, it's really just one line of code, but we want to keep everything separated. This will make it so much easier to add features in the future. And it's really so much better.

So, all we do is to set to empty and that's it. Ah, of course we have to call the DOM method. So we need to do that in the controller. In order to keep the controller even simpler, we can do that right in the getQuery method.

So, let's go back here:
*/

class SearchView {
    #parentEl = document.querySelector('.search');
  
    getQuery() {
      const query = this._parentEl.querySelector('.search__field').value;
      this.#clearInput();
      return query;
    }
  
    #clearInput() {
      this.#parentEl.querySelector('.search__field').value = '';
    }
  
    addHandlerSearch(handler) {
      this.#parentEl.addEventListener('submit', function (e) {
        e.preventDefault();
        handler();
      });
    }
  }
  
  export default new SearchView();

  /*

and now we can make this private, so we're not going to use it outside. And then let's actually call it here. So this.#clearInput. And then of course, we first need to store this somewhere "const query" So we get the query, then we clear the field and then we return the query. All right, so that should now work.


And so, all there's left to do is to now implement actually the view. So the second view basically. So the one
that is responsible for then rendering all the results here in the sidebar UI. And so that's going to be a little bit of work. So let's leave that for the next video.
*/
