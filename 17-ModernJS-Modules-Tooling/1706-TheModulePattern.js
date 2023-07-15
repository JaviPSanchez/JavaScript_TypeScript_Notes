'use strict';

/*
So now that you know how ES6 modules work, I just wanna quickly show you the module pattern that we used to use before in order to implement modules in JavaScript. And I believe that it's important that you understand this module pattern because you will still see it around, and it's also a very good application of many of the stuff that we have been learning throughout the course.

Now, of course, just like in regular modules that we just learned about, the main goal of the module pattern is to encapsulate functionality, to have private data, and to expose a public API. And the best way of achieving all that is by simply using a function, because functions give us private data by default and allow us to return values, which can become our public API.

So let's see how the module pattern is implemented. So we start by writing a function, okay?:
*/
function(){
}
/*
And usually we write an IIFE, actually. So an immediately invoked function expression. And the reason for that is because this way we don't have to call it separately and we can also ensure that it's only called once, right? And so for that, we wrap it like this and create an IIFE:
*/
(function () {})()
/*
So it's very important that this function is only created once because the goal of this function is not to reuse code by running it multiple times, the only purpose of this function is to create a new scope and return data just once. And then in here in the function, let's simply add the same variables that we had before in the other module:
*/
  function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;
    const addToCart = function (product, quantity) {
      cart.push({ product, quantity });
      console.log(`${quantity} ${product} added to the cart`);
    };
    //Añadimos otra funcion simple
    const orderStock = function (product, quantity) {
      cart.push({ product, quantity });
      console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
      addToCart,
      cart,
      totalPrice,
      totalQuantity,
    };
  }
)();
/*
So right now, of course, all of this data here is private because it is inside of the scope of the function. And so now all we have to do is to return some of this stuff in order to basically return a public API. And so to do that, we simply return an object, which contains the stuff that we want to make public here:

So let's say again, we want to add the add to cart function to the public API also the cart array and total price and quantity. So basically in this case, everything except the order stock, okay?

And of course we could have also defined all of these here, right in the object as properties and methods, but I find it a little bit cleaner to define everything outside and then to simply create an object, which contains everything that we want to expose to the outside.

However, right now we are not really storing this returned object here anywhere, right? So if we run this right now, then this object "return" kind of disappears into nothing. However, that's easy to fix because we can simply assign the result
of running this IIFE here to a new variable. And so let's call this just like before, the shopping cart, let's say ShoppingCart2:
*/
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart`);
  };
  //Añadimos otra funcion simple
  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
/*
And so now, just like before, we can now say ShoppingCart2.addToCart:
*/
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
/*
and here let's say four apples and two pizzas, right? And so it works.

4 apple added to the cart
2 pizza added to the cart

Now, of course, ShoppingCart2 it's not available here because we are still inside of a module, and everything that is in a module is private to that very module.
And so therefore we cannot access anything from this module here, here in the console, because the console is basically the global scope.

But let's still take a look  here in the console:
*/
console.log(ShoppingCart2);
/*
{cart: Array(2), totalPrice: 237, totalQuantity: 23, addToCart: ƒ}
addToCart: ƒ (product, quantity)
cart: Array(2)
0: {product: "apple", quantity: 4}
1: {product: "pizza", quantity: 2}
length: 2
__proto__: Array(0)
totalPrice: 237
totalQuantity: 23
__proto__: Object

so of course this we can do. And so here we see that indeed, we only exported these four things. Now, of course our cart now got manipulated, so that one that we defined here in the function, okay? But of course, on the other hand, the properties that we basically wanted to make private, they are not accessible.

So we cannot do this, right?:
*/
console.log(ShoppingCart2.shippingCost); //undefined
/*
So they are undefined. All right, and that's actually it. That's the implementation of the module pattern. Now, do you understand exactly how and why this works? I mean, how do we, for example, have access to the cart variable here
and even are able to manipulate it, so we see that it at changed, indeed. So how are we able to do that, even if this IIFE here, so this function has already returned long ago, right? So this function, of course, was only executed once in the beginning, and then all it did was to return the object and assigned it to the variable ShoppingCart2, right?

But then we are able to use all of this and to also manipulate the data that is inside of this function, which is the function that returned this object. And the answer to how all of this works like this is one more time, closures. So closures, remember, allow a function to have access to all the variables that were present at its birthplace, basically. So that was a nice analogy that I used back then when we first talked about closures, and I think it's a very nice way to visualize how it works also in this case. So the addToCart function was created here, right? And so this function here:

(function () {

    🤦‍♂️

})()

is the birthplace of this function:

 return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
};

And so therefore this function never loses connection to its birthplace, which was this function here:

(function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart`);
  };
  //Añadimos otra funcion simple
  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

And so that birthplace, so to say, is all of this scope, which contains of course the cart. And so therefore the addToCart function out here:

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);

can still access that cart variable that was in the function, okay? So the reason why this works is not because the cart variable is also in this object, so that's not relevant because here we are not using this.cart, right? We are simply using cart. So here we could also log something that is indeed private to this module. So something that will not be in this exported object.

So let's say shipping cost is ${shipping cost}.

const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart 😫(shipping cost is ${shippingCost})`);
  };

And so in order to produce this string here, the function will also have to use the variable "const shippingCost" that was only present at its birthplace, but which no longer does exist besides that. So, indeed that still works, so the function is still able to access that value of 10, okay? And for an even deeper explanation of why this works, you can, of course, always go back and revisit that lecture about closures.

Okay, but in general, again, this is how the module pattern works and it works very well, and it has been working for a long time for developers, so long before ES6 modules even existed in JavaScript. Now, the problem is that if we wanted one module per file, like we have with ES6 modules, then we would have to create different scripts and link all of them in the HTML file. And that then creates a couple of problems, like we have to be careful with the order in which we declare them in HTML, and we would have all of the variables living in the global scope,and finally, we also couldn't bundle them together using a module bundler.

And so as you learned at the beginning of this section, using a module bundler is very important in modern JavaScript. So the module pattern that we just learned about does indeed work quite good, but it has some limitations. And so that's exactly the reason why native modules were added to the language in ES6.
*/
