//IMPORTING MODULE

/*
Let's now use modules in practice, to make sure that we really understand how they work, and to import and export values between them. And let's start with the simplest scenario of all, which is to simply import a module, but without importing any value. And so that's also possible, and so let's use that as a starting point here:
*/

/*
So let's then create a new module. Okay? So as always, we already start with a script.js, but now as we create a new module, we simply have to create a new file.
So new file, and here, I will use the example of a "shopping-cart", and so we're gonna have a module called, shoppingCart.js, and in module names, it's also a convention to use camelCase names. All right?

1705-shoppingCart.js --> Exporting module 🟢
1704-ExportingAndImportingInES6Modules 🔵

So this one here 🟢, will lock to the console exporting module, and this one should look to the console importing module. 🔵
*/
import './1705-shoppingCart.js'; //Podemos dejarlo como: './1705-shoppingCart
console.log('Importing Module');
/*
and now we have to import, and let's do that here first, so import and then a string with the location of the module. So ./, which simply means to current location, and then let's choose here shoppingcart.js, ES6 modules actually also work without the extension. But for now let's actually leave the extension there,
just to make it a little bit more clear.

Then we will see that this is not yet going to work. So let's take a look at the console here. And so what we see: "cannot use import statement outside a module".
So why is that happening? Well, remember from the last lecture, that when we want to connect a module to the HTML file, we actually need to specify the type attribute!.

<script
      type="module"  --> 🖐
      defer
      src="1704-ExportingAndImportingInES6Modules.js"
    ></script>

So here we have to say that this is off the type module. Okay, and so now it actually worked if we look at the console:

Exporting Module
Importing Module

And so here in the console, we see that the first log is actually exporting module
only then importing model is locked to the console. And so this means that in fact, this code: console.log('Exporting Module'); here is executed before any code in the importing module. So exactly what I explained to you in the last lecture.

So the code in this module here is parsed, and before it is executed, all the code in the modules that it imports is executed first. Right?, And the same is true if we had this lock here before:

console.log('Importing Module'); ⏫
import './1705-shoppingCart.js'; ⏬

Okay? So remember that all the importing statements are basically hoisted to the top. And so usually, this is actually also how we write it. So all the imports statements at the top of the file, and also note how I didn't use strict mode here, and that's because as you learned in the last video, all modules are executed in strict mode by default.

But now let's go back here to the "shopping-cart" module and define some variables. So let's just say,

 const shippingCost = 10.

And let's also say we have an empty card which is like an array. So an empty array for now:

const cart = [];

Now variables that are declared inside of a module, So just like these two ones here ⏫, are actually scope to this module. So basically inside a module, the module itself is like the top level scope. And so by default, this means that all top level variables are private inside of this variable. So unlike traditional scripts, which would put all of these variables here in the global scope, but again, not modules, and so that's why right here, we cannot do this:

console.log(shippingCost); //Uncaught ReferenceError: shippingCost is not defined

All right? So "shippingCost" is not defined. So the "shippingCost" and cart variables are scoped, to the current module basically, and so we can only use them in the module 1705-shoppingCart.js Now, if we wanted to use them in the script.js module then we would have to use exports.

And in ES6 modules, there are two types of exports:

 ▶ Named Exports
 ▶ Default Exports.

And named imports is actually the simplest way of exporting something from a module, because all we have to do is to put export in front of anything, that we might want to export.

So let's say that we want to create this method here:

const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

and it should be a function that takes a product, and the quantity.And then it pushes basically a new object to the cart array, and then let's also lock something to the console, like quantity, and then the product plus the string. Okay? And so again, by now this variable "addToCart" is private inside of this module, but if we wanted to now export it, so that we can import it, in some other module, all we have to do is write export right here:

export const addToCart2 = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

And so this then creates a named export from this module. And so now we can then import that variable right here at module 1704-, we just have to write it with the exact same name and with from:

import addToCart2 from './1705-shoppingCart.js';

So we want to import "add to cart" from this module. And again, "addToCart2", variable name here, has to be exactly the same as the one being imported. okay?

Now here we are just missing, actually curly braces around the variable name, like this:
*/
// import { addToCart2 } from './1705-shoppingCart.js';
/*
so now it's going to work. The Syntax without the curly braces we will see a little bit later. But again with named imports, you have to give them here the same name, and you actually have to put them inside curly braces.

And so now here we are able to call this function as if it was defined here in this same scope:
*/
// addToCart('bread', 5);
/*
So let's just say, we want to add five breads to the "shoppingCart", and indeed it works. So here we got thet log coming from the "addToCart2" function that is indeed defined in other module. Now, just keep in mind that exports always need to happen in top level code, so it wouldn't work if it is inside a if block.
All right?


if (true) {
 export const addToCart2 = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
 };
}
We will get an unexpected token export.

And of course we can also export multiple things from a module using Named Exports. And actually, that is the main use case of Named Exports, so, basically when we want to export multiple things.

Now we can also export multiple things, at the same time, using Named Exports. So we can just, let's say, declare some variables, like total price, and total quantity. And so now we can export all of this at the same time, again, using Named Exports, by writing total price and total quantity.

export { totalPrice, totalQuantity };

So this is a little bit like exporting an object from other module. And so now, just like before we can then come here, and import these variables using the same name, and again, that's inside of the curly braces, just like we export it here:
*/
// import { addToCart, totalPrice, totalQuantity } from './1705-shoppingCart.js';
/*
And so of course we can then go ahead and use them here, and in this case, all we do is to console log them:
*/
// console.log(totalPrice, totalQuantity); // 237 23
/*
Now actually we can change the name of the inputs as well, so for example, if we wanted to call the total price, simply price, we could write this:
*/
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './1705-shoppingCart.js';

// console.log(price); //237
/*
And we could actually even do that here in the exports:

export { totalPrice, totalQuantity as tq };

And so then, it would no longer be called total quantity, but tq.
*/
// import { addToCart, totalPrice as price, tq } from './1705-shoppingCart.js';

// console.log(price, tq); //237 23
/*
So this is all very flexible as you can see, and we can play around with this as we wish. Okay? And actually we can take this importing even further, because we can also import all the exports of a module at the same time.

So that's import and then everything. So that's usually the meaning of the star "*":
*/
import * as ShoppingCart from './1705-shoppingCart.js';
/*
We can give it some name that we want, so let's call it "ShoppingCart" and with a S here, so a little bit like a class name. Okay? So that's kind of the convention when we import everything into an object like this.

So basically, here we'll create an object containing everything that is exported from the module that we will specify. So from, "1705-shoppingCart.js". And so this will then basically create a namespace, for all of the values, exported from that module.

And so now whenever we want to use something that was exported like this, "addTo Cart" function then we have to basically take that from this object:
*/
ShoppingCart.addToCart('bread', 5); // 5 bread added to the cart
/*
So here it is again. And so basically if we think about this, this module 1705-shoppingCart.js is now basically exporting a public API, just like a class.
So it's as if this object here "ShoppingCart", was an object created from a class,
which now has these methods ".addToCart()", and also, for example these properties:
*/
console.log(ShoppingCart.totalPrice);
/*
Now of course we are not trying to replace classes with modules. I just wanted to turn your attention to the fact, that some things here look pretty similar indeed.

And so now it's time to talk about Default Exports. So I said that they were Named Exports and Default Export, and so let's now talk a little bit about these exports defaults. So usually, we use Default Exports when we only want to export one thing per module, and so that's the reason why they are called default.

And so it works like this:
*/
export default 'value';
/*
so pretty similar, but then we have to write default, and then here, we want to simply export a value. So for example, if we wanted to export the same function:
/*
export default  function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart`);
  };

we would simply export the value itself, so not the variable. And here you see, that no name is involved at all. We are simply exporting this value. And so then when we import it we can basically give it any name that we want:
*/
import add from './1705-shoppingCart.js';
/*
So let's say import add from, './1705-shoppingCart.js'; And so this will then import the Default Export, no matter what that's called. And in fact it's not called anything. And so, yeah, we can give it any name here that we want. And right now, we are actually importing the same module here twice as you see, now that's not a problem, as you see here now, but usually we don't do that. Okay?
So we didn't get any error, but it is also not advisable, I would say.

And now let's once again try to, actually use the value that we imported here
*/
add('pizza', 2); //2 pizza added to the cart
/*
So let's add two pizzas, and here they are.

And we could even mix all of them in the same import statement. So if we wanted, we could have default and named imports and exports all at the same time:
*/
import add, {
  addToCart,
  totalPrice as price,
  tq,
} from './1705-shoppingCart.js';

console.log(price); //237
/*
However in practice, we usually never mix Named and Default Exports in the same module.

So the preferred style is actually to just use one default export per module, and then import that here like we did. And in fact, that's the reason why it is easier to import a Default Exports. So here we don't even need to use the curly braces:

import add from './1705-shoppingCart.js';

and the designers of the specification, did that on purpose. So again, to make it easier, to import default exports but of course that's not a rigid rule, that we always need to follow, so, we can do whatever is best for any given situation.

However, what you probably should really not do is to mix Default and Named Exports like we did here, so avoid that to reduce complexity. But besides that, you can use Named Exports or Default Exports, whatever works best in your situations.

Now, of course, we will use all of this in the real world, in our next big project. And so by then, you will get a good feeling for how all of this works, a little bit better in the real world. But with this, you now already have a pretty good idea of how importing and exporting values between modules actually works.

But before finishing this lecture, I actually also wanted to prove you, that imports are in fact, a life connection to exports. So that's something that I mentioned by the end of last video, and it's something really important to keep in mind, and so let's take a look at this:

export const cart = [];

And so actually what I will start doing, is to now export this cart array here.
So here now it looks as if we are simply exporting this empty ARRAY here. So cart is an empty array, and that's all we are exporting here.

But now watch what happens as we add a couple more products:
*/
import add, { cart } from './1705-shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);
/*
And so watch what happens when we now import this cart and to log it to the console. So we're mixing a Default Export and a Named Export, but nevermind. Okay?
So everything is added to the cart, and now let's log the cart, and see what happens:
*/
console.log(cart);
/*
 [{…}, {…}, {…}, {…}, {…}]
0: {product: "bread", quantity: 5}
1: {product: "pizza", quantity: 2}
2: {product: "pizza", quantity: 2}
3: {product: "bread", quantity: 5}
4: {product: "apples", quantity: 4}
length: 5
__proto__: Array(0)

So here we do not see that empty object, that we export, but instead we have this array with the objects that we just added to the cart, by calling the add function. And so that proves that this import here, is in fact, not simply a copy of the value, that we exported from 1705-shoppingCart.js Right?

Because if it was, then here we would simply get an empty ARRAY, Right? Because that's what this cart variable looked like by the time we exported it. But, as I mentioned in the last lecture, it is not simply a copy, it is a life connection. And as we call the  function:

function (product, quantity) {
  cart.push({ product, quantity });💥
  console.log(`${quantity} ${product} added to the cart`);
}

that we called as in the other module, we keep pushing objects to that array.⚠💥
So we are mutating that array here, and so then here of course, we see that manipulating the array, in the console, as we log the cart here.

And so they are in fact, the exact same object behind the scenes, basically. So one more time, repeat it with me, imports are not copies of the export. They are instead like a live connection. 👌

And so keep this in mind, when you write your own programs because this can of course leads to bugs, if you don't know what you're doing, and if you don't know that this is how it actually works. All right?

And so with this, we actually finished this video which was a pretty important one, because this is the foundation of how we organize a modern JavaScript code base. So make sure to review this lecture thoroughly, and I would actually like you to play around a little bit on your own, with exporting and importing some more values like we just did here. And after that, I see you then in the next video.
*/
