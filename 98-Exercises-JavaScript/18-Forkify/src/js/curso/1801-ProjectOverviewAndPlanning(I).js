/*
We need to go through the same planning steps, that we did in the Mapty project. Now in this case, we will actually leave, the architecture for a bit later and only talk about the user stories, features and also about the flow chart for now.

<cmg ../img/Picture01.jpg>


Now, all the user stories, put together, will then provide a clear picture,
of how the whole application is gonna work. And so based on these stories, we will then be able to implement, all our application's features.


And let's also pretend, that we are the project managers of this project and in the real, this is basically gonna be your starting point.

<cmg ./img/Picture02.jpg>

And so now, we can use all these user stories, for our next step and come up with the features, that we need in the application:

<cmg ./img/Picture03.jpg>

But now, let's take this list, of unstructured features and actually put it, into a nice structured flowchart, which will allow us to plan, how exactly the application, is actually gonna work.

And as always, we're going to focus on events and the first event in our web application, should probably be, the user searching for a recipe. So, when a user searches for a certain recipe, then we need to asynchronously, load the search results from our API, and so of course that happens asynchronously, and then once the results are in we will simply render them in our application.

However, we will not render all the search results, right away, because that would be overwhelming. And so instead, we also render some pagination buttons, in order to hide, basically part of the search results on different pages.

And then as a user clicks one of the pagination buttons, it will then render the search results, for the new page that was selected basically and it will also render new pagination buttons. So for example, when we're on page two, then there will be a button, to go back to page one and a button to go to page three.

But when we're on page three, then the button to go back will point to page two
and the button to go forward, will point to page four. And so we need to rerender these buttons, basically, every time that a user clicks on one of them.

Then, finally, we also need a logic, to actually display the recipe. So when the user selects a recipe, then, we need to asynchronously load, all the recipe data from the API and then once the data arrived, we render the recipe, to the user interface.

<cmg ./img/Picture04.jpg>


<cmg ./img/forkify-flowchart-part-1.png>
*/
