'use strict';

/*
So the module bundler that we're gonna use in this course is called Parcel. And it's super fast and easy to use, and, even more importantly, it works out of the box without any configuration.

Now you might've heard of Webpack as well which is probably the most popular bundler and especially in react world. However, it's way too complex to use in a course like this. And so let's now learn how to use Parcel.

So Parcel is basically just another build tool which is also on NPM. And so we will use NPM to install it, but this is now a different dependency.

👉 npm i parcel --save-dev

And so here we have to write --save-dev like this.

Then hit enter, and simply watch it install. So a devDependency is basically like a tool that we need to build our application. But it's not a dependency that we actually include in our code. All right. So it's simply a tool. And so that's why it's called a devDependency because we can use it to develop our project. And so therefore it appears here in a new field, in our package.json file.

So again, these libraries, that we actually include in our code, are the regular dependencies and Parcel is a devDependency now, right?

So we do it here in the terminal because Parcel is basically just another command line interface. However, we cannot simply run Parcel like this

👉 parcel index.html

So this is not going to work because the command is not found. And the reason for that is simply that this doesn't work with locally installed packages. And Parcel was indeed installed locally. So basically only on this project and that's why it showed up in the package.json file of this exact project. So there are also global installations but more about that by the end of this video. Now, in order to still be able to use Parcel here in the console, we have two options.

So we can use something called NPX or we can use NPM scripts.

So let's start with NPX, which is basically an application built into a NPM.

👉 npx parcel index.html

We can simply use NPX to now run the same command as we did before, but this time it is going to work. The option that we pass into Parcel basically is the entry point. So the entry point is index.html because that is where we include our 1711-BundlingWithparcelAndNPMScripts.js. So basically the file that we want to bundle up. So in our 1711-BundlingWithparcelAndNPMScripts.js, we are currently including this cloneDeep deep module from Lodash:
*/
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
/*
and also let's actually put back this code from the beginning so that we are also importing our shoppingCart module from before:

No olvidar el type="module" en el script 1711.
*/
import add, { cart } from './1705-shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
/*
And so basically in this example, the goal of using Parcel is to bundle these three modules together. So 1711-BundlingWithparcelAndNPMScripts.js together with 1705-shoppingCart.js and together with this cloneDeep 1710-LodashLibrary-CloneDeep.js

And so let's actually try this now. So I'm hitting enter here and now it's going to take some time and do some magic behind the scenes, but now it is actually done. So a Parcel actually then also starts a new development server on this URL:
http://localhost:1234

So let's click that. And so you'll see it opened a new tab. So basically besides only bundling, it also does exactly the same job as our live server but in a different port.

If we had any error installing Parcel, we can try installing it with sudo which will give you basically more permissio
👉 sudo npm i parcel

This will then ask you for your password and then hopefully that's going to work.

Now, if that doesn't fix it, then you have to install exactly the same version
as I am using here. So we can read that in our package.json file. And so here you see that I'm using version 1.12.4. And so you can NPM install exactly this version
by writing at and then 1.12.4:

👉 npm i parcel@1.12.4

So maybe you have version 2 already installed because it's going to be coming out very soon. De echo esa es la version que tengo la ^2.0.0-beta.2

Si aun asi no funciona podemos siempre desinstalar:

👉 npm uninstall parcel

Now speaking of errors, we do actually have one error here coming from our code But the problem for all of that is that we still have the type="module" here:

<script
      type="module"  💥 Podemos quitarlo con Parcel
      defer
      src="1711-BundlingWithparcelAndNPMScripts.js"
    ></script>

However, what Parcel does is that it basically, simply, creates a script. And so now we are actually no longer using a module but we are back to using a regular script. And that is important because modules do not work in older browsers.

But now let's actually take a look at what Parcel did here. So what it did was to create this dist folder, which stands for distribution, because it is essentially gonna be this folder that we will send for production. So basically it's the code in this folder that we will send to our final users. So you'll see it created a new index.html  and also a bunch of JavaScript files.

So let's take a look at this index here. And so you see that it has created a new script tag:

<script defer="" src="/index.f8345a9e.js"></script>

And so this new script here is basically the bundle itself. So it's this file:

index.f8345a9e.js

And so here you already see that it does include some of the stuff that we have in our other modules. All of this is created by Parcel, of course. So you see a lot of code created by Parcel. So in the real world, you will not take a look at this code, but I just wanted to show you that, of course, all of our code is now in here.

And so indeed all the code that we had before, spread across multiple modules, is now all in this script. And so that's exactly the goal that we had. And unused code has probably also not yet been removed but we will leave that for later.

So that's going to be the build step but what we're doing right now is the development step. And so in order for us to be able to check the code during development, it will not compress everything.

So of course, whenever we now save this file:

1711-BundlingWithparcelAndNPMScripts.js

then it will reload this file here, just as we had before with live server, right?
So as I saved you see that everything here reloaded, right? However, in Parcel, we can activate something even better, which is called hot module replacement.

So we can write:
*/
if (module.hot) {
  module.hot.accept();
}
/*
Now this code here is code that only Parcel understands. And so of course it will not make it into our final bundle because the browser is not going to understand any of it. But anyway, what hot module reloading means is that whenever we change one of the modules, it will then, of course, trigger a rebuild, like this, but that new modified bundle will then automatically, like magic, get injected into the browser without triggering a whole page reload.

So again, whenever we change something here in the code, the UI will then not be reloaded. And so that's going to be amazing for maintaining state on our page whenever we are testing out something. So this used to be something quite annoying in the past. For example, in our Bankist APP, where whenever we reloaded the page, we needed to log in again into the application. Remember that? But with Parcel and hot module replacement, that's not going to happen, because the page will not reload.

Okay, next up, let's change something here. So as I said, when we first included this cloneDeep here:

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

from lodash, this is quite cumbersome doing it like this. And so that's why in all module bundlers, there's no need for specifying the entire path to any module.
So instead we can simply do this:
*/
// import cloneDeep from 'lodash-es';
/*
And so Parcel will then automatically find the path to this module, and will simply import it like this without us having to manually tie up the entire path to there. And so that's a lot more useful than what we had before. And in fact, this works with all kinds of assets. So even with HTML or CSS or SAS files, or even images, and of course also all kinds of modules. So not only ES6 modules,
but this is also going to work with CommonJS modules.

So let me actually show that to you.

So instead of importing a -es version of lodash, we can simply import lodash like this:
*/
import cloneDeep from 'lodash';
/*
So just a regular version of lodash and Parcel is even smart enough to then automatically install this package here. So now if we go to our package.json we will see that it uses lodash instead of lodash-es. (en teoria....)

So Parcel can indeed work with all the CommonJS modules as well. And so this way we can then simply use all the modules that are available on NPM.

And maybe you have been noticing that this cart right here keeps growing and growing and growing:

(24) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

So if we take a look at this:

(27) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {product: "pizza", quantity: 2}
1: {product: "bread", quantity: 5}
2: {product: "apples", quantity: 4}
3: {product: "pizza", quantity: 2}
4: {product: "bread", quantity: 5}
5: {product: "apples", quantity: 4}
6: {product: "pizza", quantity: 2}
7: {product: "bread", quantity: 5}
8: {product: "apples", quantity: 4}
9: {product: "pizza", quantity: 2}
10: {product: "bread", quantity: 5}
11: {product: "apples", quantity: 4}
12: {product: "pizza", quantity: 2}
13: {product: "bread", quantity: 5}
14: {product: "apples", quantity: 4}
15: {product: "pizza", quantity: 2}
16: {product: "bread", quantity: 5}
17: {product: "apples", quantity: 4}
18: {product: "pizza", quantity: 2}
19: {product: "bread", quantity: 5}
20: {product: "apples", quantity: 4}
21: {product: "pizza", quantity: 2}
22: {product: "bread", quantity: 5}
23: {product: "apples", quantity: 4}
24: {product: "pizza", quantity: 2}
25: {product: "bread", quantity: 5}
26: {product: "apples", quantity: 4}
length: 27
__proto__: Array(0)

you see that we are adding these three products over and over again. And so the reason for that is hot module replacement. So the state is maintained whenever we reload the page here. And so that's exactly what we can now observe here. So if we save it again, then we will have multiple because we are simply adding new objects into this object that keeps persisting over page reloads, basically.
And so this works with all state, and again, it's going to be really, really helpful.

Remember the way we executed Parcel first was by saying a npx parcel and then index.html. However, I mentioned that there is a second way, which is to use NPM script. And so that's the way we actually use it in practice. So NPM scripts are basically another way of running a locally installed packages in the command line.
They also allow us to basically automate repetitive tasks. And so therefore we then don't have to write npm parcel and all of that, every time that we want to use it.

So we can simply create a script in the package.json:

{
  "name": "17-modern-js-modules-tooling",
  "version": "1.0.0",
  "description": "",
  "main": "1700-Web.js",
  "scripts": {

    👉👌 Here the scripts!!!!


  },
  "author": "JavierPS",
  "license": "ISC",
  "dependencies": {
    "leaflet": "^1.7.1",
    "lodash-es": "^4.17.21"
  },
  "devDependencies": {
    "parcel": "^2.0.0-beta.2"
  }
}

So we need to double quote "" and then the name of the script:

{
  "name": "17-modern-js-modules-tooling",
  "version": "1.0.0",
  "description": "",
  "main": "1700-Web.js",
  "scripts": {

    "start": "parcel index.html"


  },
  "author": "JavierPS",
  "license": "ISC",
  "dependencies": {
    "leaflet": "^1.7.1",
    "lodash-es": "^4.17.21"
  },
  "devDependencies": {
    "parcel": "^2.0.0-beta.2"
  }
}
And so the script is going to be simply parcel index.html. So again, we can't write this command directly in the command line, but we can write it in the NPM script. And so let's now go back to our console and try it out and actually run this command:

👉 npm run start.

And so start is the name of the NPM script that we defined here. So let's try that. And here we go. So it's doing the same thing as before but now we have the simple command that we can execute whenever we want to start Parcel and whenever we want to start developing, basically.


And so again, that is mainly how we do it in development. Okay. And speaking of development, whenever we are done developing our project, it is time to build the final bundle. So the bundle that is compressed and has dead code elimination and all of that. And so for that, we need another Parcel command.

And so let's add that as another script here:

{
  "name": "17-modern-js-modules-tooling",
  "version": "1.0.0",
  "description": "",
  "main": "script.js", 💥💥😫
  "scripts": {

    "start": "parcel index.html",
    "build": "parcel build index.html" 👌

  },
  "author": "JavierPS",
  "license": "ISC",
  "dependencies": {
    "leaflet": "^1.7.1",
    "lodash-es": "^4.17.21"
  },
  "devDependencies": {
    "parcel": "^2.0.0-beta.2"
  }
}

and now let's run, bu before run we have to remove "main": "script.js" It has to do with parcel config. Out entry point is the index.html file, but the main property from the package.json file tells parcel it should be script.js file

👉 npm run build.

So this might take some more time because it's doing a lot more work behind the scenes, but let's just wait for it. All right. And so now we even get this nice output with the sizes of everything:

<cmg img/Picture15.jpg>

And so let's now take a look at our dist folder, and you see immediately
that this HTML looks different, right? It is compressed now. So the script that we can then ship to the browser:

<script defer src="/index.53402209.js"></script>

and ship to our users this one. So ending in 209. And again, you see that it looks quite different. Everything is compressed into this unreadable mess, but it is, of course, a lot more performance than the script that we had before. And so that's why Parcel does this for us. And we will, again, come back to all of this in the real world once we actually move to our next more real project in which we're going to use all of this.

Now, just to finish this lecture, I also wanted to mention that we can also install packages globally. And so that would work like this:

👉 npm i parcel -g

So NPM install Parcel, and then G which stands for global. And this is actually the way that we installed the live server package before. And so, because of that,
we were then simply able to use live server in every directory on our computer.

So basically the big difference between globally and locally installed packages and especially these tools like Parcel or live server, is that we can use the global tools directly in the command line without the intermediate step of an NPM script.

However, most of these tools actually advise developers to always install the tools locally so that they can always stay on the latest version. And so usually I follow that approach as well. And so I'm not going to install Parcel globally like this.

And that's the fundamentals of bundling with Parcel and of using build tools with NPM. So I introduced a lot of different concepts here. So to make sure to review this, especially this part about the NPM scripts, maybe that might be confusing
and also take a look at the output files that Parcel gives us.

So just take some time to review all that we did in this video. And if after that, this is all still very confusing to you, then don't worry. I'm sure that it will make total sense once we actually use this in our next big project.
*/
