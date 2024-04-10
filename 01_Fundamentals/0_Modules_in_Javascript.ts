'use strict';

/*
Modules are a super important part of software development.

What's a module?

So essentially, a module is a reusable piece of code that encapsulates implementation details
of a certain part of our project. That sounds a bit like a function or even a class, but the
difference is that a module is usually a standalone file. Now that's not always the case, but
normally when we think of a module we think of a separate file.

So of course a module always contains some code but it can also have imports and exports. So
with exports, as the name says, we can export values out of a module for example, simple values
or even entire functions. And whatever we export from a module is called the public API. So this
is just like classes where we can also expose a public API for other codes to consume.

Now, in the case of modules, this public API is actually consumed by importing values into a module. So just like we can export values in modules, we can usually also import values from other modules. And these other modules from which we import are then called dependencies of the importing module because the code that is in the module that is importing cannot work without the code, that it is importing from the external module, right?

<cmg ../images/Picture06.jpg>

And this entire logic that I just described is true for all modules in all programming languages. So this is not specific to only JavaScript. In fact, modules are a pattern that developers have been using in all languages for decades. Now, of course we can write code without modules, and actually we've been doing that up until this point, but that's because our applications have been very simple. However, when a code base grows bigger and bigger, there start to be many advantages of using modules.

And the first one is that modules make it really easy to compose software. So we can think of modules as small building blocks that we can then put together in order to build really complex applications. And I think it might be helpful to look at a more real world example, to understand all the benefits of modules.

<cmg ../images/Picture07.jpg>

So let's take this digital camera. You can see that this specific camera is basically made up of all these modules that we can see here. And this is exactly how we can compose software using modules as well. Another big advantage of these camera modules is that each of them can be developed in complete isolation.
So you can have one engineer working on the lens and another one on the screen
and even another one on the controller module. And the best part of this is that each engineer can actually work on their own module without even understanding
what the other engineers are doing. And also without understanding how the entire final camera works itself.

And so isolating components is another huge advantage of using modules. And again, isolating components essentially means that each module can be developed in isolation without the developer having to think about the entire code base.
He doesn't even need to understand all of it, which makes it really easy to collaborate on a larger team. 

Next up modules make it very easy to abstract or code. And we already talked about what abstraction means, but basically we can use modules to implement low level code then other modules, which don't really care about these low level details can import these abstractions and use them. And back to our camera, the screen module, for example, does not care about the low level implementation details of the controller module. It can simply import the controller, but without knowing how it works and use it to control other parts of the camera.

And so that's essentially the power of abstraction. Modules also naturally lead to a more organized code base. Because when we break up our code into separate isolated and obstructed modules, this will automatically organize our code and make it easier to understand. And so this alone is a huge benefit of modules.

Finally modules allow us to easily reuse the same code in a project and even across multiple projects. For example, if we use the module to implement a couple of mathematical functions in a certain project, and if we then need the same functions in the next project, all we need to do is to copy that module to the new project. And in our camera example here, this company could now use the exact same lens or the exact same screen in different camera models, all because they nicely abstracted these components into self-contained reusable modules.

So this is how modules work in software design in general. But now let's take a look at modules specifically in JavaScript. So as of ES6, JavaScript has a native built-in module system. Now we did have modules before ES6, but we had to implement them ourselves or use external libraries. So ES6 modules are modules that are actually stored in files and each file is one module. So there is exactly one module per file. But now you might be thinking, well, scripts are usually also files, right? And that's of course true.

<cmg ../images/Picture08.jpg>

And so let's not compare these two types of files in order to understand that there are actually huge differences between old school scripts and modern ES6 modules. The first difference is that in modules, all top level variables are scooped to the module. So basically variables are private to the module by default. And the only way an outside module can access a value that's inside of a module is by exporting that value. So just as we learned in the last slide.

But if we don't export, then no one from the outside can see the variable. Now in scripts, on the other hand, all top level variables are always global and I showed you this in the mapty project, remember? And this can lead to problems like global namespace pollution, where multiple scripts try to declare variables
with the same name and then these variables collide. So private variables are the solution to this problem. And that's why ES6 modules implemented it like this.

Next ES6 modules are always executed in strict mode while scripts on the other hand are executed in sloppy mode by default. So with modules, there is no more need to manually declare strict mode. Also the this keyword is always undefined
at the top level while in scripts it points at the window object, right?

Now, as we learned in the last slide, what's really special about modules is that we can export and import values between them using this ES6 import and export syntax. In regular scripts, importing and exporting values is just completely impossible. Now, there is something really important to note about imports and exports, which is the fact that they can only happen at the top level. So as you know, outside of any function or any if block, and we will see why that in a second.

Also all imports are hoisted. So no matter where in a code you're importing values, it's like the import statement will be moved to the top of the file. So in practice importing values is always the first thing that happens in a module.

Now, in order to link a module to an HTML file, we need to use the script tag with the type attribute set to module, instead of just a plain script tag. And finally about downloading the module files themselves. This always automatically happens in an asynchronous way. And this is true for a module loaded from HTML as well as for modules that are loaded by importing one module into another, using the import syntax. Now regular scripts on the other hand are downloaded by default in a blocking synchronous way, unless we use the async or differ attributes on the script tag.

<cmg ../images/Picture08.jpg>

So that's a great overview of ES6 modules, but now let's dig a bit deeper and really understand how modules actually import other modules behind the scenes. And to do that, let's analyze what happens in this small code example.

<cmg ../images/Picture09.jpg>

So here we're importing a value called "rand" from the math.js module and showDice from the dom.js module. Now, as always, when a piece of code is executed, the first step is to parse that code. Remember, so we talked about that way back. But remember that parsing basically means to just read the code, but without executing it. And this is the moment in which imports are hoisted. And in fact, the whole process of importing modules happens before the code in the main module is actually executed.

So in this example, the index.js module imports, the dom and math modules in a synchronous way. What that means is that only after all imported modules have been downloaded and executed, the main index.js module will finally be executed as well.

<cmg ../images/Picture10.jpg>

Now this is only possible because of top level imports and exports that's because if we only export and import values outside of any code that needs to be executed, then the engine can know all the imports and exports during the parsing phase. So while the code is still being read before being executed.

Now, if we were allowed to import a module inside of a function, then that function would first have to be executed before the import code happened. And so in that case, modules could not be imported in a synchronous way. So the importing module would have to be executed first.

But you might ask why do we actually want modules to be loaded in a synchronous way? Isn't synchronous bad? Well, the answer is that this is the easiest way in which we can do things like bundling and dead code elimination. So basically deleting code that's actually not even necessary. And trust me, this is very important in large projects with hundreds of modules and that includes third party modules from which we usually only want a small piece and not the entire module.

So by knowing all dependencies between modules before execution, bundlers like webpack and Parcel can then join multiple modules together and eliminate that code. And so essentially this is the reason why we can only import and export outside of any code that needs to be executed. So like a function or an if block, but now let's move on here.

So after the parsing process, IA's figured out which modules it needs to import, then these modules are actually downloaded from the server.

<cmg ../images/Picture11.jpg>

And remember downloading actually happens in an asynchronous way. It is only the importing operation itself that happens synchronously. Then after a module arrives, it's also parsed and the modules exports are linked to the imports in index.js.

So for example, the math module exports a function called rent. And this export is then connected to the rent import in the index.js module. And this connection is actually a life connection.

<cmg ../images/Picture12.jpg>

So exported values are not copied to imports. Instead, the import is basically just a reference to the export at value like a pointer. So when the value changes in the exporting module, then the same value also changes in the importing module.

And this is quite important to understand because it's unique to ES6 modules. Other module systems do not work like this, but JavaScript modules do. And so you need to keep that in mind.

<cmg ../images/Picture13.jpg>

But anyway, next up, to code in the imported modules is executed. And with this the process of importing modules is finally finished. And so now, as I already said, it's time for the importing module to be finally executed as well. So index.js in this example.

Alright. And by now you're probably tired of listening to me. And so let's quickly move on and actually try all this with actual code.
*/
