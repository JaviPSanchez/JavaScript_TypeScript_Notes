import './main.css';

/*
Now we can use resolve and reject directly without creating and instance of Promise. We
can access them outside of the Promise scope.

Very useful if you do not want to pass work into a Promise, but instead pass around the
resolve/reject methods.

Super handy for callback and stream based API´s
*/

console.log(Promise.prototype);

// Before we had to declare variables outside of the scope
let resolve1;
let reject1;
const myPromise = new Promise((yup, nope) => {
  //Update variable inside the scope
  resolve1! = yup;
  reject1! = nope;
});

const { promise, resolve, reject } = Promise.withResolvers();
promise.then().catch();
resolve('yay');
reject('nahhhh');

console.log(myPromise);
