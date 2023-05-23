'use strict';

/*
So, let's now finally use NPM for the first time. And remember, NPM stands for Node Package Manager, and it's both a software on our computer and a package repository. Now, before we jump straight into NPM, let's start by understanding why we actually need something like NPM. So, why do we actually need a way of managing packages or dependencies in our project?

Well, back in the day before we had NPM, we used to include external libraries right into our HTML. So, basically using the script tag. And this would then expose a global variable that we could use, and actually that's exactly what we did earlier in our Mapty project. We simply included the leaflet.js file basically using a script tag and did that before our own script

<script
      defer
      src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
      integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
      crossorigin=""
></script>
<script defer src="1500-WebMapty.js"></script>

so that our own script could then use the global variable that was exposed by this library here, right? Remember that? Now, this actually creates a couple of problems, at least in a big project so maybe not in this particular project that is really small, but in a huge project and a huge team, this is just not manageable.

First, it doesn't make much sense having the HTML loading all of JavaScript, that is just really messy. Also many times we would actually download a library file to our computer directly, for example, a jQuery JavaScript file. But then whenever a new version would come out, we would have to manually go to the site, download the new version, change the file in our file system manually, and then include it here again, maybe with some other name, with some other version number.
And that is just a huge pain, believe me.

And a third reason is that before NPM, there simply wasn't a single repository that contained all the packages that we might need. And so this made it even worse and more difficult to manually download libraries and manage them on our computers. So in summary, this all used to be a huge pain and a huge mess.

And maybe you even remember this yourself, like the old days of jQuery and dozens of jQuery plugins that you would have to keep updated. But anyway, all of this is just to say that we really need a way to manage our dependencies in a better and more modern way. And NPM is exactly how we do that. And so, let's start by using the NPM software now.

And we start by checking if we actually have NPM installed:

👉 "npm -v"   check for version

Si no tenemos ninguna version instalada debemos ir a Nodejs.org and then download and install the version for our computer.

Now in each project in which we want to use NPM, we need to start by initializing it. And so for that, we write "npm init", and this will then ask us a couple of question in order to create a package.json file.

👉 "npm init"  we will create a special file called package.json, this file is basically what stores the entire configuration of our project. So for now, that's not really interesting, but it will be in a second, okay?

And now let's actually install the leaflet library that we used before, but this time using NPM. Vamos a instalar esta libreria usanso un JavaScript package manager, all we have to do is indeed NPM install leaflet.

👉 npm install leaflet
👉 npm i leaflet

And then it will start downloading and that's it,  that way of installing it. And now you'll see that two things happened. So first of all, in our package.json file, a new field here was created for the dependencies. And the dependency that we have here now is leaflet that we just installed at version 1.6.0, okay?

And more about why this is important a little bit later again, but for now let's take a look at the second thing that happened, which is that we now have a folder called node_modules. And this folder itself contains the leaflet folder, as you can see, alright? Where the code's library is located. So, you can take a look at it and you will see that it is like, well 15,000 lines of code or something. And so, this is not a small library by any means, okay? And so yeah, this folder contains everything about this library that we need to include in our page. And of course the more packages we install, they will all get stored into the node modules folder.
 

Okay, so we installed our leaflet library, but if we want to use it?, that wouldn't be easy without a module bundler. And that's because this library actually use the commonJS module system. So for the reasons that I explained to you before, we cannot directly import it into our code. We could only do that if later we used a module bundler, but for now we are not doing that.

And so, let's just not use leaflet for now. So, this was just to show you how to install it. So instead, let me show you how we can install and import one of the most popular JavaScript libraries, which is Lodash.

So Lodash is essentially a collection of a ton of useful functions for ARRAYS, OBJECTS, FUNCTIONS, DATES, and more. So, it's a lot of like functions that could or should be included in JavaScript, but are not. And so people simply implemented them in Lodash, and so now we can use them.

So, down here we have to installation and here you see again, the old way of doing it as I explained it before:

<script src="lodash.js"></script>

So, that would be downloading it and then including it manually.

Then here we have the NPM way:

👉 npm i -g npm
👉 npm i --save lodash

So as always, NPM install and then Lodash. However, I'm not looking for just the normal Lodash version, because once again, that one actually uses common JS. And so we can't use common JS modules without a module bundler. And so I'm looking for a special version and that one is called Lodash ES. And so, ES is because of ES modules, all right?

So, here we say npm i for install and then lodash-es:

👉 npm i lodash-es

then wait for it, and here it is in our dependencies. Let's take a look at it as well. And so here, we now basically have one file for each of the methods that are available in Lodash, and you see it is a lot of them, okay?

<cmg img/Picture14.jpg>

And the one that I want to include now is the one for cloning objects. So, that's called cloneDeep.js. Si no lo encontramos podemos instalarlo manualmente con npm:

👉 npm i --save lodash.clonedeep

let's check it out, just to show you what the file looks like:

*/
import baseClone from './_baseClone.js';

//  Used to compose bitmasks for cloning.
var CLONE_DEEP_FLAG = 1,
  CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

export default cloneDeep;


/*
So, it's a default export and so we could give it any name that we want, but I will still just call it cloneDeep.


///////////////////////////////////////////////////////
SALTAMOS A 👉 1710-LodashLibrary-CloneDeep.js
///////////////////////////////////////////////////////



But I actually want to go back to this package.json file because it is actually very important. So, let's say that you want to move your project to another computer, or also share it with another developer  or even check it into version control like Git. Now in all of these scenarios, you should never ever include the node modules folder.

So again, when you copy your project to somewhere else, there is no reason to include this huge node modules folder, because in a real project, it will actually be really, really huge. So, I have had a folders here with tens of thousands of files, and so that will just slow you down. And it doesn't make much sense either because all of these files, they are already at NPM. And so, you can always get them back from there.

But now you might ask, well, if I copy my project without the node modules folder, so without the dependencies, will I have to install all of them, one by one? What if I have 20 or 200 dependencies? Well, that's again where this important package.json file comes into play.

So, let's actually simulate that by deleting this folder. So, move to trash.
And so now of course this does not work anymore, but there is fortunately a very easy way to get it back. All we have to do is:

👉 "npm i"

but just without any package name. And so then, NPM will reach into your package.json file, look at all the dependencies and install them back. And so, you see that our folder is just like before.

And so with this, you now have a basic, but I think good understanding of how to work with NPM downloading packages and also include them in your code.

However, importing packages like we did here, for example, by specifying this entire path:

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

is not practical at all. And so in the next video, it's time to finally use Parcel to fix this.
*/
