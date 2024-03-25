/*

So let's now learn how we can listen for events and also handle events in our MVC architecture by using something called the Publisher-Subscriber pattern.

And let's start by analyzing the code that we already have here. So right now we are listening for the hashchange and for the load events right here in the controller.js:
*/
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
/*
However, that doesn't make a lot of sense, does it? Because everything that is related to the DOM, so to the view, should really be inside of a view. Now, maybe these two events here don't really look as if they have to do with the view, so with the user interface. But imagine that instead we would be handling a click event on some DOM element.

And so listening for that event should for sure, go into the view. And therefore, we can say the same about these events here. So in the end, this has more to do with DOM manipulation or what to DOM itself then actually with the controller.

And so therefore, we need a way of putting this logic here into the recipeView.js However, the handler function that we use to handle these events is actually this controller.

So it's this function that we have here, that is sitting inside of this controller module controller.js.
*/
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};
/*
And so we have basically a problem here. We don't want this code to be here so we want it to be in the view. But in this code, we need this controller function "controlRecipes" which is here in this module controller.js And of course, we don't want to put the function controlRecipes() in the view.

And so let's now think about how we could solve this problem:

<cmg ./img/Picture19.jpg>

And recapping everything that I just said before, we can basically say that we want to handle events in the controller because otherwise, we would have application logic in the view, and of course we don't want that. But on the other hand, we want to listen for events in the view,  because otherwise we would need DOM elements in the controller, and we would basically have presentation logic in the controller which would be wrong in our MVC implementation.

So essentially, event listeners should be attached to DOM elements in the view, but the events should then be handled by controller functions that live in the controller module. And so if you take a look at this small diagram we have the controlRecipes() function in the controller, and we have a special method in the view, which is called addHandlerRender.

Now, we might think that it is very easy to connect these two functions because why not simply call the control recipe's function right from the recipeView.js whenever an event occurs? Well, that's actually not possible because in the way that we set up the architecture, the recipeView does not know anything about the controller.

<cmg ./img/Picture20.jpg>

So recipeView.js doesn't import the controller, and so we can't call any of the functions that are in the controller.js from the recipeView.js. So it only works the other way around and therefore it's more complex than this.

But fortunately, there is a good solution and this solution
is called the Publisher-Subscriber Design pattern. And by the way, design patterns in programming are basically just standard solutions to certain kinds of problems.

So in the publisher-Subscriber pattern we have a publisher
which is some code that knows when to react.

<cmg ./img/Picture21.jpg>

And in this case, that's going to be the addHandlerRender function because it will contain the addEventListener method.
And therefore, it will know when to react to the event.

Now, on the other hand, we have a subscriber which is code that actually wants to react. So this is the code that should actually be executed when the event happens.

<cmg ./img/Picture22.jpg>

And in this case, that is the controlRecipes() function that we already have in our controller. And remember that the publisher does not know yet that the subscriber even exists
because the subscriber is in the controller.js which the view cannot access.

But now finally comes to solution to the problem. So the solution is that we can now subscribe to the publisher by passing into subscriber function as an argument.

Now in practice, that means that as soon as the program loads, the init function is called which in turn immediately calls the addHandlerRender function from the recipeView.js.

And that is possible, remember, because the controller does in fact import both the view and the model, right? Now, anyway, as we call addHandlerRender, we pass in our controlRecipes function as an argument. So essentially, we subscribe controlRecipes to addHandlerRender

<cmg ./img/Picture23.jpg>

And so at this point, the two functions are basically finally connected. And so now addHandlerRender listens for events using the addEventListener method as always. And then as soon as the event actually happens, the controlRecipes function will be called as the callback function of addEventListener. Or, in other words, as soon as the publisher publishes an event the subscriber will get called.

And this is how we implement event listeners and event handlers in the MVC architecture. So this will allow us to keep the handler in the controller and the listener in the view. And by that, keeping everything nicely separated.

So in summary, the handler subscribes to the publisher, which is the listener in this case, and then as the publisher publishes an event, the subscriber is executed.

<cmg ./img/Picture24.jpg>

And if you want to think even deeper about this and are really interested in this, then notice how there is actually a profound difference between a certain arbitrary like function A() simply calling function B() directly and function A() receiving function B() as an input in order to then call that input function.

So this is all about control. In the first scenario, function A is in control. However, in the second scenario function A has no control. So it simply has to execute whatever function it receives.

But anyway, leaving that theory aside now, let's go back to our code and implement all of this. And so with everything we just learned about the Publisher-Subscriber pattern actually, now implementing it should be the easiest part, right?

So let's simply grab this code:

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));

We will create a new method addHandlerRender() that we just talked about.
*/
addHandlerRender() {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));
  }
/*
This is going to be for rendering the recipe right at the beginning, right? And then this method, which remember, is the publisher basically needs to get access to the subscriber. And so that in this case is the handler function.
All right? And so then we can simply paste that in here:
*/
addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
}
/*
And then here, of course we don't know about controlRecipes,
but we know about the handler. And so that's actually it for this function. So of course it is not a private method because it needs to be part of the public API of this object so that we can then call it in the controller, right.

And so let's actually do that now.

So let's create an init function here, actually like this,
and then we simply call it right at the beginning. So only once:
*/
const init = function () {
    recipeView.addHandlerRender(controlRecipes);
  };
  init();
/*
Creamos recipeView.addHandlerRender and  we simply pass in controlRecipes, and that's actually it. With this, we just implemented the Publisher-Subscriber pattern.





And so let's quickly recap what exactly is happening here. So we can also take a look at our final diagram here:

<cmg ./img/Picture25.jpg>

And here, I actually have the event here in the controller because that is actually where it is handled. So as we start the program then the init function runs and it will then immediately run addHandlerRender, right? So it is this function here in the recipeView.js
*/
 addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }
/*
And it is this function that is actually listening for events. Now, as we call this method here addHandlerRender(), from the controller, we pass in the controller function or the handler function that we want to get executed as soon as the event happens:
*/
const init = function () {
    recipeView.addHandlerRender(controlRecipes);
};
init();
/*
And here we then receive that function as being called handler:
*/
 addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }
/*
And so that's what we then call as soon as the event happens, right?

And so again in our diagram, that's exactly what we have here. So that's why I have this dotted line here which stands for data flow. So we are passing in the controlRecipe function as the handler here. And that is the whole reason
why the method here is called addHandlerRender.

So because we are using it to, in fact, add a handler function and in this case, it is for rendering the recipe in the first place. And then later on, we will actually have other addHandler methods.



And so it's crucial that you understand this logic here before you can move on any further in this project. But I hope that with all this explanation, this became all really clear and also obvious why we had to do it like this.


And so from now on, all we have to do is to basically use this structure to implement all of the missing features of our application.

*/
