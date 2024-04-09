'use strict';

/*
🔍 Explain how code sharing between files can be accomplished.


How we write JavaScript today?

Because when we built applications, we don't just write all of our code into one big
script and send that script to the browser, and call it a day. It used to be like this,
but the way we built JavaScript applications, has changed tremendously over the last
couple of years. So back in the day, we used to write all our codes into one big script
or maybe multiple scripts. But today, we divide our projects into multiple modules and
these modules can share data between them and make our code more organized and maintainable!
Now, one great thing about modules is that we can also include 3rd-party modules into our own code

And there are thousands of open source modules, which we also call packages, that developers
share on the NPM repository.

In order to actually download and use and share packages, we use the NPM software installed on
our computer. And this is just a simple command line interface that allows us to do all that.
So basically NPM is both the repository in which packages live and a program that we use on
our computers to install and manage these packages.

So let's say that we are done writing our project code. So we divided it into multiple modules
and we included some 3rd-party modules as well. And so now the development step is complete.
However, usually that's not the end of the story. At least not when rebuilding a real world
application. Instead, our project now needs to go through a build process, where one big final
JavaScript bundle is built. And that's the final file, which we will deploy to our web server
for production.

<cmg images/Picture05.jpg>


Now, a build process can be something really complex, but we gonna keep it simple here and only
include two steps. And the first step, we'll bundle all our modules together into one big file.
This is a pretty complex process which can eliminate unused code and compress our code as well.

Now this step is super important for two big reasons. First, older browsers don't support modules
at all. And so code that's in a module could not be executed by any older browser. And second,
it's also better for performance to send less files to the browser, and it's also beneficial that
the bundling step compresses our code.

As the second step, we do something called transpiling and polyfilling, which is basically to convert
all modern JavaScript syntax and features back to old ES5 syntax, so that even older browsers can
understand our code without breaking. And this is usually done using a tool called Babel.

After these two steps, we end up with that final JavaScript bundle, ready to be deployed on a server
for production. Now, of course we don't perform these steps ourselves. Instead, we use a special tool
to implement this build process for us. And the most common build tools available, are probably webpack
,Parcel, RollUp, etc.

And these are called JavaScript bundlers because as the name says they take our raw code and transform
it into a JavaScript bundle. Now Webpack is the more popular one, but it can be really hard and confusing
to set it up. So that's because there's a lot of stuff that we need to configure manually, in order to
make it work properly. Parcel, on the other hand is a zero configuration bundler, which simply works out
of the box.

Besides native ES Modules, and the module pattern, there are also other module systems, that have been used
by JavaScript in the past. But again, they were not native JavaScript. so they relied on some external
implementations. And two examples are: AMD Modules, and CommonJS modules. And in fact, CommonJS modules,
are worth taking a look at. And so let's do that now. Now CommonJS modules are important for us, because
they have been used in Node.js, for almost all of its existence. So only very recently, ES Modules have
actually been implemented, in Node.js.

And remember, Node.js is a way of running JavaScript on a web server, outside of a browser. Now the big
consequence of this, is that almost all the modules still use the CommonJS module system. And the reason
for that, is that npm was originally only intended for node. Which as they said, uses commonJS.

Only later npm became the standard repository, for the whole JavaScript world. And so now we are basically
stuck, with CommonJS.
*/
