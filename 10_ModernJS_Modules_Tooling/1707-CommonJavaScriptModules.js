'use strict';

/*

🔍 Explain how code sharing between files can be accomplished.

Besides native ES Modules, and the module pattern, there are also other module systems, that have been used by JavaScript in the past. But again, they were not native JavaScript. so they relied on some external implementations.

And two examples are: AMD Modules, and CommonJS modules. And in fact, CommonJS modules, are worth taking a look at. And so let's do that now. Now CommonJS modules are important for us, because they have been used in Node.js, for almost all of its existence. So only very recently, ES Modules have actually been implemented, in Node.js.

And remember, Node.js is a way of running JavaScript on a web server, outside of a browser. Now the big consequence of this, is that almost all the modules, in the npm repository, that we talked about in the beginning of this section, remember? So all these modules that we can use in our own code, still use the CommonJS module system. And the reason for that, is that npm was originally only intended for node. Which as they said, uses commonJS.

Only later npm became the standard repository, for the whole JavaScript world. And so now we are basically stuck, with CommonJS. And so therefore, you will see probably, a lot of CommonJS still around. And so let's take a quick second to see what it looks like. So let's just pretend that we want to export something from this module.

And so let's get, this function here again, like this.

//EXPORT

export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart (shipping cost is ${shippingCost})`
  );
};

And so just like ES6 modules, in CommonJS, one file, is one module. And we export something from a module, using export."nameoftheexport" So let's say, export.addToCart. Now of course, this is not going to work in the browser, but it would work in Node.js.

So this export keyword here, is basically an object that again, is of course not defined here in our code, and also not in the browser. But in Node.js, it is an important object, that is used.

Now then to import something:
*/
//IMPORT
const { addToCart } = require('./1705-shoppingCart.js');
/*
So just like this. So again, require is of course not defined, here in our browser environment, but it is defined in Node.js, because this is part of the CommonJS specification.

And that's actually all I had to show you, even though this is, of course, just scratching the surface. But all I wanted to do here, is to just let you know, that there are different module systems, and that CommonJS, is particularly important, in the world of JavaScript.

Now in the long run, ES6 Modules, will hopefully, and probably, replace all of these different module systems. But it's still gonna be a long way until you're there. And so it's good that at least you know, what it is, when you stumble upon the syntax in the future, in your work.

And with this, let's move on, to the rest of the section, where we will learn how to use third party packages from npm, how to bundle all modules together, and also how to transpile or code back, to ES5, for old browsers.
*/
