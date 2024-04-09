/*
Let's now implement,

real world error handling in our application,

instead of, always simply logging errors to the console.

And again, the error that we're gonna work with,

is basically using a false ID,

that cannot be found on the server.

So indeed, we get our error message, invalid ID,

and then the ID itself, plus the status code.

Now, the real world way of handling an error like this,

is to actually display some message here

in the user interface,

so that the user can actually know what's going on.

So basically, handling the error will mean,

to display an error message here in the view.

So, right now we are handling the error,

actually in the model, right.

So, remember how I said,

that for now, handling the error

is simply logging it here with these small emoji here.

And so again, that's basically

our current error handling strategy.

However, it is not correct.

And also, it doesn't happen in the correct place.

Because if we want to display something into view,

then of course, that code should also be in the view

and not in the model.

So, let's go back to our code and to our view,

and implement a new method here,

which is going to be responsible

for displaying that error message.

And actually, the HTML code is already here.

In this like template.

So, it's gonna be this class here,

or this element with the class of error.

So let's copy this.

Go to the view,

and then, let's put it here after this spinner.

So render error,

(keyboard typing)

maintain like this.

And for some reason, here, I,

I declared like a normal function.

Which doesn't make a lot of sense.

And now, let's create a new markup variable.

As always, when we create,

well, some new markup,

which is exactly what we're doing here.

Then here, remember, we need to replace this

with the icons variable.

And then here, of course,

we want to have like some custom message.

So we don't simply want this hard coded message.

But instead, we want to be able to pass a message,

into this method.

So, that's going to be message like this.

And so let's add a parameter here for that.

Now, okay.

And then here, let's clear the parent element.

So, like this.

And actually, we should do the same here.

So, this.clear is a lot nicer

than having to write all of this.

And so we abstracted all that away into this method.

And now we can basically simply get this code,

because it's going to be the same. Right.

The variable here is still called markup.

And, we still want to basically insert this HTML,

into the parent element.

So that's, again, this element with the recipe class.

Okay.

And so that's actually it, here for the view, at least.

Okay.

So let's now go to the model.

Because remember that right now,

we are actually handling the error right here, like this.

But again, that's not what we want.

So, we want a way of getting this error into the view.

Now these two are only connected by the controller.

And so, of course, it is going to be the controller

who will call recipe view. Right.

So, let's do that actually.

So, that's going to be right here in the catch block,

of the control recipes controller.

So, recipeView.renderError

and then some message.

But what is this message going to look like?

Or in other words, where are we going to get it from?

Because now we have the same problem as before.

So remember, here in the helpers function,

whenever we got this error,

then that error was not automatically propagated

down to this async function,

which was actually calling the getJSON function.

And so therefore, we had to re-throw the error here.

So, basically to mark this whole promise here, as rejected,

so that then here, we would get into this catch block.

But now, we're here again, we have the same problem.

Because now if we get an error here,

then this promise,

so this whole load recipe promise,

will also not get rejected.

And so therefore, here, we will never enter the catch block

in this function.

So, it's a bit confusing, like the flow of the error

and how we need to propagate it down.

But essentially,

we will have to do the same thing as before.

Which is to throw the error here again.

And so with this, we will then have access

to the exact same error object, as we have here.

And otherwise, we wouldn't.

So now we can use the same thing here.

Let's actually get rid of this console.log.

And so, now here our error handling

is basically finally complete.

So, instead of simply logging it to the console,

we now have a way of rendering it to the user interface.

And we will be able to access the exact same error

that we also got access to, here,

in the load recipe function.

Okay.

So, let's try this.

And indeed, here, we get the error message.

And it is exactly the same one that is locked down here,

from the model. Okay.

However, this is actually not really that useful.

So, well, this error is not really meaningful

for anyone using this application.

And so actually, this is not the message that we want.

So, let's create a more meaningful message.

So, something like, we couldn't find that recipe.

Now, do you think that we should pass in that message here?

So basically specifying,

we couldn't or we could not find that recipe.

Please, try another one.

So, again, do you think that this is the correct place

of specifying this message,

which will get eventually rendered to the view?

Well, actually, I think that it is not.

So, I think that this error message,

should basically be an intrinsic property

of the view itself.

So basically, I'm going to cut this from here now.

And now into view,

I will add just another private field.

So, it's going to be called error message.

And then the message itself.

And so now, basically, the view itself,

already knows the message that it wants to display. Okay.

And then here, in render error,

we will actually keep the ability of passing in a message.

But, if no message is passed in,

then we will simply set a default.

And so, that default is going to be the error message

that we just specified.

Okay.

So here, we don't pass anything now.

And so by doing this,

we are back to having no code that is regarded to the view,

here in our controller. All right.

And so instead, the error message

is then by default, set to the message.

Or actually the other way round.

So, the message argument is gonna be set by default,

to this error message that we set for this entire object.

So, I think that is the best solution,

which makes the most sense.

And so indeed, here, we now get exactly that message.

And so with this, we now have a very robust

and very nice error handling strategy,

that we will then be able to use for other errors

also in the future.

So for example, when there are no search results

for some search term. Okay.

Now, since we did an error message here,

let's very quickly also implement a method here

for success messages even though we don't need it yet.

But it's still good,

to already prepare for that in the future.

And so, since we are working on messages here,

let's do that right away.

So, let's call this one simply render message.

And this one here will have a different class.

Think it should also be be somewhere here.

And actually, it's this default.

So, this is actually the one that we will use.

So, it has the class of message.

But then the rest of the code is actually the same.

So, message,

and actually not the same.

So the icon is also different.

So here it's icon, smile.

So instead of the alert, it is a smile.

And then here, we will want some kind of message again.

And so here, let's now create,

simply get another field called message.

Could also call it like success message.

But let's leave it like this.

And for now, we don't have any success message.

Because again, we're not actually going to use this for now.

Message and then the rest should essentially be the same.

And then in the future, of course,

we will be able to use the success message

in some different places in our application.

All right, and that's actually it.

Let's put it back to some normal URL.

We can just click here.

And then of course, everything is back to working. Great.

And with this, we are actually finally ready

to implement now the searching functionality,

starting in the next lecture.



*/
