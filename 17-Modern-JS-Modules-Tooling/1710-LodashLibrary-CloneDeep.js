/*
And so, let's simply import it exactly like we used to do it:
*/
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
/*
Antes de importar NO HAY QUE OLVIDAR el atributo type="module" tal que asi en nuestro index.html:

<script type='module' defer src="1710-LodashLibrary-CloneDeep.js"></script>
*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

/*
Now, why did I actually include cloneDeep and not something else? Well, it's because I actually already mentioned before when we talked about copying objects.
So, remember that it's very hard to copy a nested object. So, let's quickly create one here because I think that this is pretty interesting.
*/
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
/*
So, let's say we have some cart ARRAY which itself contains some objects. So some products, and its quantity. And then we have a user which also has some object, let's say logged in true.

So, this is a deeply nested object, right? And so, let's see what happens when we copy it using JavaScript:
*/
const stateCopy = Object.assign({}, state);
/*
So, stateCopy, and remember we use object.assign to create a copy of an object And so we create an empty object and then we basically merge that with the state. So, let's take a look at the stateClone:
*/
console.log(stateCopy);
/*
{cart: Array(2), user: {…}}
cart: (2) [{…}, {…}]
user: {loggedIn: true}
__proto__: Object

And so indeed it looks exactly the same as the state, right?

However, what happens when we change one of the nested objects in there? So, when we now say:
*/
state.user.loggedIn = false;
/*
then see what happens to the logged in in the copy, so you see that it is also false:

{cart: Array(2), user: {…}}
cart: (2) [{…}, {…}]
user: {loggedIn: false} 😫
__proto__: Object


And so, that's for all the reasons that I said that using Lodash would probably be a good idea, instead of using object.assign(), because if we wanted to manually create a deep copy or a deep clone, well, that would be a lot of work. And so instead we, can simply use this function that Lodash gives us so that
some people already implement it for us and which is also tested already:
*/
const stateDeepCopy = cloneDeep(state);
console.log(stateDeepCopy);
/*
{cart: Array(2), user: {…}}
cart: (2) [{…}, {…}]
user: {loggedIn: true} 👌
__proto__: Object

And so watch what happens with this one. So again, this one here is the stateClone, this one now is still true, even though we changed it in the original object, okay? And so this is a good solution for a deep clone that we just got from NPM.

And that's great, right? So, we just used a piece of open source software to solve a problem that we have sometimes in JavaScript. Great, that's just awesome.
So again, you're now one step closer to working like a real JavaScript developer, because this is just what everyone does all the time.


///////////////////////////////////////////////////////
VOLVEMOS A 👉 1709-IntroductionToNPM.js
///////////////////////////////////////////////////////
*/
