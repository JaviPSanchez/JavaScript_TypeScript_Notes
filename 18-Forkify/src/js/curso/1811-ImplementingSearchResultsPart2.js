/*
Let's now render the search results by creating a new view.

So we already have the searchView in the controller.js but now we also want to create like a resultsView.js which will contain a render so that we can then call that render from the controller.js



So let's create the resultsView.js. so now this view will actually be pretty similar to the recipeView.
*/
class ResultsView {}
/*
So we will have a #parentElement, #data, #message. We will  also need the render() method, the same renderSpinner().
So we will need to display the spinner while the data is being fetched, so in this case, the search results.
We might need also render an error and so now it's time to basically refactor this code and create a parent class.

So I had mentioned that before but now it's actually time to do it because by creating a parent class, we will then be able to reuse all of these methods on all the views. So basically, on all the objects that are created through all the view classes.

So let's create yet another file here and I'm calling it View.js. And so let's create a new class here called View:
*/
export default class View {}
/*
and so we will then export immediately this class. And actually, let's make it a default export. So we are actually exporting the class itself because of course, we are not going to create any instance of this view.

We will only use it as a parent class of these other child views, all right?

Here in the recipeView.js, let's now import that parent class. So import View from View and actually, we don't even need the .js but I like to keep it there for consistency. And so now, all we need to do is to basically copy everything that should be common to all the views to that parent class of View.js
*/
import View from './View.js';


import icons from 'url:../../img/icons.svg'; // Parcel 2
import { Fraction } from 'fractional';

class RecipeView {
  #parentElement = document.querySelector('.recipe');
  #data;
  #errorMessage = 'We could not find that recipe. Please try another one!';
  #message = '';
  addHandlerRender(handler) {
    
  }
  addHandlerUpdateServings() {
    
    }
  addHandlerAddBookmark() {
     
    }
  _generateMarkup() {
   
  }
  _generateMarkupIngredient() {
  }
}
export default new RecipeView();
/*
However, there is one thing that we still need to change here. And that is that right now, with Parcel and Babel, inheritance between these truly private fields "#" and methods doesn't really work yet. So here it was nice to actually use the native way of JavaScript of protected methods and properties with "#" but now we cannot really use it anymore. So maybe that might be possible at some point in the future but for now, we will have to go back to protected fields and protected methods with the "_".

So let's basically select all of these hash "#" symbols and then replace it with "_" So changing from truly private
to only protected using the underscore convention.
*/
import View from './View.js';


import icons from 'url:../../img/icons.svg'; // Parcel 2
import { Fraction } from 'fractional';

class RecipeView {
  _parentElement = document.querySelector('.recipe');
  _data;
  _errorMessage = 'We could not find that recipe. Please try another one!';
  _message = '';
  addHandlerRender(handler) {
    
  }
  addHandlerUpdateServings() {
    
    }
  addHandlerAddBookmark() {
     
    }
  _generateMarkup() {
   
  }
  _generateMarkupIngredient() {
  }
}
export default new RecipeView();
/*

But anyway, let's now basically extract the View class from this RecipeView.js So what we need in all the views
is this render() method, the clear() method, renderSpinner(), renderError(), renderMessage(), etc...
*/
render(data) {
  this._data = data;
  const markup = this._generateMarkup();
  this._clear();
  this._parentElement.insertAdjacentHTML('afterbegin', markup);
}

_clear() {
  this._parentElement.innerHTML = '';
}

renderSpinner() {
  const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;
  this._clear();
  this._parentElement.insertAdjacentHTML('afterbegin', markup);
}

renderError(message = this._errorMessage) {
  const markup = `
    <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
  `;
  this._clear();
  this._parentElement.insertAdjacentHTML('afterbegin', markup);
}

renderMessage(message = this._message) {
  const markup = `
    <div class="message">
      <div>
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
  `;
  this._clear();
  this._parentElement.insertAdjacentHTML('afterbegin', markup);
}

/*
and basically everything except for generating the markup because that, of course, is gonna be unique to every single view, right? But everything else we want to be the same on all the views. For example, rendering a spinner
will be really easy. So all the views will simply have this method and we will then be able to call it on that method
and thanks to the parentElement property, it will then know exactly to which element it should attach the spinner
because again, the parentElement, of course, will be unique to each single view.



And here we, of course, then need to extend the View. Right?

*/
import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2
import { Fraction } from 'fractional';

class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _data;
  _errorMessage = 'We could not find that recipe. Please try another one!';
  _message = '';
  addHandlerRender(handler) {
    
  }
  addHandlerUpdateServings() {
    
    }
  addHandlerAddBookmark() {
     
    }
  _generateMarkup() {
   
  }
  _generateMarkupIngredient() {
  }
}
export default new RecipeView();

/*
So we successfully extracted the View class from the recipeView.

So even without any code yet in the results view, we will already be able to add a spinner to the search results. All right? We need actually the parent element here. And we also need to import the View.
*/
import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
  //This is just another child class of View. Then here, we need to say that parentElement is the results element here in resultView. So document.querySelector results.
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}
export default new ResultsView();
/*
And then we have to export default just like before and then a new instance of this view. And so this way they can only be one ResultsView.

Then in controller.js, we can immediately import that without having to create the instance manually.
*/
import resultsView from './views/resultsView.js';
/*
And so now here in the controller.js we should already be able to load the spinner or actually to display the spinner. So let's do that at the very beginning:
*/
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};
/*
So resultsView.renderSpinner().

All without writing any new code for displaying that spinner here in the ResultsView because it is now simply inheriting that method so that renderSpinner method from its parent class.


Now it's actually time to create basically this generateMarkup method also in the resultsView, okay?
*/
import View from './View.js';
import previewView from './previewView.js';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

/*
So all the child views should have this method here because in the View.js, the render() method actually relies on that, okay?

So this.generateMarkup needs to exist in order for the render method then being able to create the markup and render it or to insert that HTML into the DOM. And so let's take that, just that name and create that right here. So as always, a template literal and then now it's time to actually get this code here. Okay?
*/
  _generateMarkup() {
    return `
    <li class="preview">
    <a class="preview__link" href="#23456">
      <figure class="preview__fig">
        <img src="src/img/test-1.jpg" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__name">
          Pasta with Tomato Cream ...
        </h4>
        <p class="preview__publisher">The Pioneer Woman</p>
      </div>
    </a>
    </li> `;
  }
}
export default new ResultsView();
/*
And so now we need to take our data, but... where actually is that search results data? So with all of the structure,
it might be a little bit hard to follow where that data is. So let me actually start by calling the render method here. in the controller.js
*/
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    
    //So here, besides of simply logging the search results, we now also want resultsView.render because of course, just like renderSpinner, the resultsView also inherits render and then into that, we pass whatever we want to be rendered.
    console.log(model.state.search.results);
    resultsView.render(model.state.search.results);

  } catch (err) {
    console.log(err);
  }
};
/*
And then in the render in View.js, here we see that it takes this data:
*/
render(data) {
  this._data = data;
  const markup = this._generateMarkup();
  this._clear();
  this._parentElement.insertAdjacentHTML('afterbegin', markup);
}
/*
and puts it into this._data.

And so if we then take a look at the resultsView.js, let's simply log that to the console: So console.log(this._data)
and so this_data here should basically be exactly the console.log(model.state.search.results) in the controller.js inside of the controlSearchResults.
*/
import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    console.log(this._data); //--> Es un ARRAY Que queremos loopear con .map
    return this._data.map().join('');
  }
}
export default new ResultsView();
/*


Let's now actually create this method. Now, this is actually console.log(this._data) an array now and so here we need to loop over that array. So in fact, we don't want to return simply the whole HTML markup but instead, we want to return a whole string (HTML markup) for each of the search results in the array.

So we will return basically this._data and then we map over it. Remember, so we did that before with the ingredients
and then at the end, we join everything together and so then that will be the string that we return.

Now, we could now go ahead and put this code here:
*/
`
<li class="preview">
<a class="preview__link preview__link--active" href="#23456">
  <figure class="preview__fig">
    <img src="src/img/test-1.jpg" alt="Test" />
  </figure>
  <div class="preview__data">
    <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
    <p class="preview__publisher">The Pioneer Woman</p>
    <div class="preview__user-generated">
      <svg>
        <use href="src/img/icons.svg#icon-user"></use>
      </svg>
    </div>
  </div>
</a>
</li> `
/*
into the map function but instead, I will create just another method down here to make this a little bit cleaner.

*/
import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    console.log(this._data); //--> Es un ARRAY Que queremos loopear con .map
    return this._data.map().join('');
  }


  _generateMarkupPreview() {

  }
}
export default new ResultsView();
/*

And I'm simply calling it this because that's also the class name --> class="preview"

So let's put this one here:
*/
import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    console.log(this._data); //--> Es un ARRAY Que queremos loopear con .map
    return this._data.map().join('');
  }


  _generateMarkupPreview() {
    return `
    <li class="preview">
    <a class="preview__link preview__link--active" href="#23456">
      <figure class="preview__fig">
        <img src="src/img/test-1.jpg" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
        <p class="preview__publisher">The Pioneer Woman</p>
        <div class="preview__user-generated">
          <svg>
            <use href="src/img/icons.svg#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li> `;
  }
}
export default new ResultsView();
/*

And so then here we can call the method:

*/
import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    console.log(this._data); //--> Es un ARRAY Que queremos loopear con .map
    return this._data.map(this._generateMarkupPreview).join('');
  }


  _generateMarkupPreview() {
    return `
    <li class="preview">
    <a class="preview__link preview__link--active" href="#23456">
      <figure class="preview__fig">
        <img src="src/img/test-1.jpg" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
        <p class="preview__publisher">The Pioneer Woman</p>
        <div class="preview__user-generated">
          <svg>
            <use href="src/img/icons.svg#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li> `;
  }
}
export default new ResultsView();
/*

Now, all we need to do is to fill it with the real data. So with the id, image, publisher and title. Okay?

So to start, we need the ID here in order to build the link and so then we click the link, that will change the hash in the URL, which will trigger a loading recipe.
*/
//We need to pass the result
  _generateMarkupPreview(result) {
    return `
    <li class="preview">
    <a class="preview__link preview__link--active" href="#${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li> `;
  }
/*


So we get all of these search results here in UI. You see that it's already working and now let's click on one of them and it works.




Now you see that actually the states that we had here before in the page is gone and so let's activate that hot module reloading that I mentioned in the last section. So remember that with parcel, we can do this:
*/
if (module.hot) {
  module.hot.accept();
}
/*
And again, this is not real JavaScript, at least this module.hot. This is simply coming from parcel. All right?
And so previously, that would then reload the entire page but now, as we go back, you see that the state here actually remains. All right?



Now, let's just see what happens when we search something that for sure does not exist. So in this case, we actually want to render like an error message here saying that there was no result for that query. So let's start by creating also the errorMessage property here:
*/
import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');

//And here let's say no recipes found for your query! Please try again.
  _errorMessage = 'No recipes found for your query! Please try again 👌';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();

/*
But now, how exactly will we actually display this errorMessage on the parentElement? So we could do that right here in generateMarkup and basically check if the array is empty and if it is so, then render the errorMessage. So that would work. However, we can also do that directly in the render method at the View.js:
*/
render(data, render = true) {
 
  this._data = data;
  const markup = this._generateMarkup();
  this._clear();
  this._parentElement.insertAdjacentHTML('afterbegin', markup);
}
/*
So automatically, right as we receive the data. And I believe that is what makes more sense. So right in the beginning when the render method is first called and receives the data for the first time, we can immediately check if that data actually exists.

So right now, we only simply assumed that there always is data and that we can then generate some markup with that data. But as always, it's a good idea to check if the data actually exists. And that is true no matter if we receive a simple object or if we receive an entire array of objects, which is the case of the results.

So let's add a guard clause here:
*/
render(data) {
//So if there is no data, then we want to return immediately and we also want to render the error. So we can do that all in one line and this will then still work.
  if (!data) return this.renderError();

  this._data = data;
  const markup = this._generateMarkup();
  this._clear();
  this._parentElement.insertAdjacentHTML('afterbegin', markup);
}
/*
We actually don't even have to pass in any message because we already automatically get the message from this._errorMessage.
*/
 renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
/*

Now, however, in this case, this check is actually not enough because in fact, we do get data. It's just an empty array and so in this case, we also want to treat the empty array as though we had no data. So this here basically only works for undefined or for null. But now we also want to check if the received data is an array and if it is empty. So we can do that by saying so if there is no data or || and then basically, if the data is an array and if it's empty. And we can do that by using a helper function that is on the Array constructor, which is isArray:
*/
render(data, render = true) {
  if (!data || (Array.isArray(data) && data.length === 0))
    return this.renderError();

  this._data = data;
  const markup = this._generateMarkup();
  this._clear();
  this._parentElement.insertAdjacentHTML('afterbegin', markup);
}
/*
So we can check that. And so if it's an array and the length of the array is zero basically, data.length zero, well, then in this case, exit this function immediately and also render the error, okay? So in both these cases, we want the error to be shown.



So in the next lecture, we will actually take care of the problem of having to many results, all one after another one in the UI. So that's not good and so we will implement pagination in the next two lectures.
*/
