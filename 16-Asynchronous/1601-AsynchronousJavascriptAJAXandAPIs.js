'use strict';

/*
Basicamente debemos diferenciar ASYNCHRONOUS de SYNCHRONOUS.

SYNCHRONOUS --> Es lo que hemos estado haciendo hasta ahora, el codigo se ejecuta linea por linea. Por lo que si una linea de codigo tarda demasiado en ejecutarse toda la pagina queda bloqueada esperando a que termine la tarea. Un alert por ejepmo es uan operacion que bloquea, algo nada bueno!

<cmg img/Picture01.jpg>

ASYNCHRONOUS --> Por contra el codigo ASYNC permite saltar una tarea y dejarla funcionar en segundo plano. Para poder implementar el codigo async basta con crear una funcion callback, pero no todas las funciones callback hacen el codigo ASYNC. Por ejemplo un ARRAY MAP METHOD acepta una callback function pero no es ASYNC.

<cmg img/Picture02.jpg>

Podemos ver otro ejemplio en el que cargamos una imagen con el attributo src de source, este atributo transforma la operacion en  ASYNC.


<cmg img/Picture03.jpg>

There's just one more important thing that I need to mention which is the fact that event listeners alone do not make code asynchronous, just like callback functions alone, do also not make code asynchronous.

Hay mas ejemplos de comportamiento ASYNC como la API de geolocalizacion o AJAX calls. AJAX CALLS son probablemente el uso mas importante del comportamiento ASYNC.

Que es AJAX?

So Ajax stands for Asynchronous JavaScript and XML, and basically it allows us to communicate with remote web servers in an asynchronous way.Now in practice,
we make Ajax calls in our code in order to request some data from a web server dynamically. So without reloading the page so that we can use that data in our application dynamically. For example, right in the next video, we're going to make Ajax calls to request data about countries.

And we can then use that data about countries to build a small application that shows us information about the country that we're currently in. And the possibilities and use cases are endless, but more about that in the next slide.

For now, let's quickly understand how Ajax works. So let's say that we have our JavaScript application running in the browser, which is also called the Client.

<cmg img/Picture04.jpg>

And we want the application to get some data from a web server. And let's say the data about countries that I was talking about earlier. So with Ajax, we can do an HTTP request to the server, which has this data. And the server will then set back a response containing that data that we requested. And this back and forth between Client and server all happens asynchronously in the background,
just the way we learned before.

And there can even be different types of requests, like get requests to receive data or post requests to send data to a server. But there is a whole lecture about this a bit later to really show you how it all works in detail.

Now, when we're asking a server to send us some data, this server usually contains a web API. And this API is the one that has the data that we're asking for. So an API is something pretty important, and so let's now see what an API
and web APIs actually are.

<cmg img/Picture05.jpg>

So first of all, API stands for Application Programming Interface. Now in general terms, and on the very high level of abstraction, an API is basically a piece of software that can be used by another piece of software in order to basically allow applications to talk to each other and exchange information.

And that's true not only for web development and JavaScript, but for programming in general. Now in JavaScript and web development, there are countless types of APIs, like the DOM API or the Geolocation API that we have been using.

So these are called APIs because they are a self-contained piece of software that allow other pieces of software to interact with them. For example, our Mapty application that we built in the previous section. Also, we can always implement a small and simple API in a class where we make some methods available as a public interface. Remember?

So again, objects made from a class can be seen as self-contained encapsulated pieces of software that other pieces of software can interact with. And so that fits the definition of API, right? But now let's talk about the important type of API that we are actually interested in when we use Ajax. And that are APIs that I like to call Online APIs. So an online API is essentially an application running on a web server, which receives requests for data, then retrieves this data from some database and then sends it back to the client. So just as we saw in the last slide, right?

Now, when building applications in practice, we simply call these online APIs, API, and many people will also call these APIs, Web APIs, or again, just simply API. So the term Online API is actually a term that I came up with myself because the term Web API is actually also used for other things.

Now, of course we can build or own Online APIs,  but that requires back-end development. So development with servers and databases and all that. And this is something really interesting that you can learn after this course, and I actually have a course on Node.js myself, that you can check out if you're interested.

But anyway, for now, we are interested in using 3rd-party APIs. So APIs that other developers make available for us most of the times for free. So let's now imagine that you're building a traveling application, and you have a database with different destinations and tours that you're offering.

So on your own server, you could build your own API that can receive requests from your front end application in JavaScript and send back the results. So that would be your own API hosted on your own server. But that alone would probably not be enough to build a complete application.

<cmg img/Picture06.jpg>

And so you could also use some 3rd-party APIs. And there are really APIs for everything. So in our example, travel application, you could use an API to get weather data in your destinations, data about the destination countries themselves, data about flights, about currency conversion. And you could even use APIs to send emails or text messages or embed Google maps into your applications. So as you see, the possibilities are really endless with APIs.

So using APIs in JavaScript is super popular and everyone does it all the time, and so that's why I'm explaining you all these details. But now just to finish,let's quickly talk about API data formats. So Ajax stands for asynchronous JavaScript and XML. Remember?

So the X there stands for XML and XML is a data format, which used to be widely used to transmit data on the web. However, these days basically no API uses XML data anymore. The term Ajax is just an old name that got very popular back in the day, and so it's still used today, even though we don't use XML anymore.

So instead, most APIs these days use the JSON data format. So JSON is the most popular data format today because it's basically just a JavaScript object, but converted to a string. And so therefore, it's very easy to send across the web
and also to use in JavaScript once the data arrives.

<cmg img/Picture07.jpg>

So, now that we know what asynchronous JavaScript is, and also what Ajax and APIs are, let's finally use all this in practice and make our very first Ajax call in the next video.
*/
