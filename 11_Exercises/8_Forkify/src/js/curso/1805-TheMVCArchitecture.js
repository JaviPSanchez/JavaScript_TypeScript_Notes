/*


So we already implemented a part of the Forkify application. But at this point, it has no structure whatsoever. And so now it's time to talk about the project architecture, but also about software architecture more in general. Now, we touched on this already in the Mapty application a little bit earlier. But in this lecture, let's now go a little bit deeper. And first of all, why do we even need an architecture when we build software?

<cmg ../img/Picture10.JPG>

Well, there are actually multiple reasons. First, the architecture will give our project the structure in which we can then write the code. So just like a house, software also needs a structure. Now in software, structure basically means how we organize and divide the code into different modules, classes, and functions. So all these will basically hold our code together and give it structure.

The next reason is maintainability. So when we build a project, we always need to think about the future and keep in mind that the project is never really done. It is never finished. We will always need to change things in the future and we will need to maintain the project. And that only works if the project is nicely structured.

Plus, we might even want to add new features to the project, which brings us to expandability. So expandability is basically the ability to easily add new features in the future. And once again, that is only possible with a good structure, and a good overall architecture.

So the perfect architecture is basically one that allows for all these three aspects
of structure maintainability, and expandability. Now, in order to achieve that perfect architecture, we can of course create our own architecture from scratch. And that's exactly what we did in the Mapty project.However, that only works with a really small project like that one. But when the project grows more complex, then it's going to be very hard to achieve a good architecture completely on our own.

And so instead, we can opt for a well established architecture pattern that developers
have been using for years, or even for decades. And examples of that are model view controller "MVC", model view presenter "MVP", flux, and many other architectures.

Now these days, in modern web development, many developers actually use a framework like react, Angular, Vue or Svelte to take care of the architecture for them. And so in this case, developers don't have to think a lot about architectures on their own.

<cmg ./img/Picture11.jpg>

And probably this is actually a good idea at a certain point, especially for large scale applications. However, and this is key, as I said many times before, it is very important that you really know JavaScript, before switching to some of these frameworks. And in my opinion, that includes knowing how to implement an architecture by yourself. And so that's what I will teach you with this project, among many other things of course.

And so this will make it so much easier for youto learn React, or Vue or whatever framework that you choose later down the road. Now no matter where the architecture comes from, and who develops it, there are some components that any architecture must have.

<cmg ./img/Picture12.jpg>

And that is business logic, state, HTTP library, application logic, and presentation logic.

So business logic is basically all the code that solves the actual business problem.
So that's code that is directly related to what the business does and to what it needs. So if your business is what's up, then your business logic will include sending messages. Now if your business is a bank, then one of the many parts of business logic will be to store transactions. So essentially, business logic is the logic that is really related to solve the problem that the business set out to solve in the first place.

Next is the state which is one of the most important aspects of any web application.
So the application state is essentially what stores all the data about the application that is running in the browser. So the data about the applications front end basically. So the state should store any data that you might fetch from an API or data that the user inputs, or what page the user is currently viewing and so on. And this data should be the so called single source of truth, which should be kept in sync with the user interface. So that means that if some data changes in the state,
then the user interface should reflect that. And the same is true the other way around. So if something changes in the UI, then the state should also change. Now storing and displaying data and keeping everything in sync is one of the most difficult tasks when building web applications. And that's why there are actually many state management libraries like Redux or MobX. But in this project, we will keep things very simple and use a simple object to store our entire state.

Next, the HTTP library is simply responsible for making and receiving AJAX requests.
And we have been doing that using the fetch function and so that's what we will keep doing here. And most real world applications of course, need some interaction with the web. And so that's why this is an aspect to keep in mind.

Now about the presentation logic, this is the code that is only concerned about the implementation of the application itself. So it's more the technical aspects of the application, which are not directly related to the underlying business problem. So for example, application logic includes handling of UI events and navigation on the page. That's the reason why this component is many times also called a router. So basically mapping actions to the users navigation.

Finally, the presentation logic, which is also called the UI layer, is of course all about the visible part of the application. So essentially, we can say that the presentation logic is responsible for displaying the application state on the user interface, in order to keep everything in sync.

Now any good architecture has a way of separating all these components. So instead of mixing everything together in one big file, and in one big mess. And so let's now take a look at a well established architecture pattern that we're going to use in this project. And that is the model view controller architecture MVC.

<cmg ./img/Picture13.jpg>

So basically, this architecture contains three big parts, which are the model, the view and the controller. Now the view is of course, for the presentation logic. So it's the part of the application interacting with the user.

The model is all about the applications data. And so that's why it usually contains
the state and also the business logic that manipulates the state. So these two should be kept closely together. Now, the model is also what contains the HTTP library, that might get some data from the web. So like from some API or some back end. And so this is of course also about the data, and so it also goes into the model.

Finally, the controller is what contains the application logic. And it kind of sits between the model and the view. So it basically creates a bridge between the model and a view which in fact, should know nothing about each other. So again, the model and the view will exist completely independent from one another, and not even knowing that the other one exists, basically. And in fact, one of the big goals of the MVC pattern so of this model view controller "MVC" architecture is to actually separate business logic from application logic, which makes developing the application so much easier. But as a consequence, we then need something to connect these two parts. And so that is the controller.

<cmg ./img/Picture14.jpg>

Now let's actually take a look at a typical flow of actions and of data as soon as some event happens on the UI for example like a click! So to start, it's going to be the controller who will handle that event, because handling an event is doing something in the application. And that is clearly part of the application logic.

Now, this handling might involve updating the user interface and also ask the model
for some data. So we can say that the controller dispatches tasks to model and to the view or in other words, it controls and orchestrates this entire action. And in fact, the whole application itself.

Now asking the model for some data might, of course involve doing an AJAX request to the web. And so that's exactly what the model does. Then, when the data arrives, the controller takes the data and sends it to the view. And so finally to finish the view,
will render that data to the user interface, and finish this whole cycle.

Now in this diagram, you see two types of arrows. So the dotted arrows represent data flow between the different parts, while the solid arrows represent actual function calls and module imports. So analyzing this, we can see that it's only the controller
who imports and calls functions from the model, and from the view, but never the other way around. And so as I mentioned before, the model and view are in fact completely standalone and completely isolated. So again, they don't import each other,
and they don't even import the controller.

And in fact, they don't even know that the controller exists. All they do is to basically just sit there waiting to get some instructions from the controller. And this part is pretty important to understand. So take some time to really analyze this.

Now, there are actually different ways of implementing the MVC pattern, where some are more complex than others. But this one is my favorite way of doing it, because I think it makes the most sense. But anyway, let's know see this MVC architecture applied to the part of the Forkify application that we already implemented.

<cmg ./img/Picture15.jpg>

And so this is a flowchart of loading and rendering a recipe that we already implemented. And then down there, there's also a reminder of the MVC diagram that we just analyzed. So in this flowchart, handling these events is associated to the controller. Then loading the recipe happens in the model.

So the controller basically calls some function that is in the model. And then the model asynchronously gets the recipe data from the API. And once that data has arrived, the controller asks for that data, receives it, sends it to the view, which will then ultimately render the recipe on the screen and that's it. So that's what every step of the flowchart is associated to in the MVC architecture.

But this is still quite abstract. Because remember, the flowchart is simply what we will implement, not how we will do that. And so let's go even deeper, and actually take a look at a detailed implementation diagram of or MVC architecture:

<cmg ./img/Picture16.jpg>

And again, this is only about loading and rendering a recipe. And let's start by noticing how both the model and controller are implemented in a module, while the recipe view is actually a class. And we will explore the reasons for this when we actually write the code.

But now once again, let's analyze the same data and actions flow, but this time in this real implementation. So when the user clicks on a search result, there is a control recipes function in the controller and this is the one that will handle this event. And how exactly that happens doesn't matter for now. So we will come back to this later. What matters is that this controller will instruct the recipe view to render a loading spinner while the user interface waits for the data to arrive.

In the meantime, the controller also called the load recipes function in the model to fetch the recipe data from the Forkify API. Now the model also contains a big state object that we export from the model. And this state will contain all sorts of data, like the current recipe, search results, bookmarks, etc. But anyway, as the data arrives, it will be stored in this state object. And the controller then reaches into the state object, grabs the recipe data, and finally calls the render method on the recipe view with that data.

So in order to finally render the recipe to the user interface. So basically the exact same steps as before, but this time actually implemented in our code. well, at least in theory and so next up, let's actually go from theory to practice and implement this architecture in our code.
*/
