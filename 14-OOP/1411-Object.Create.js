'use strict';

/*
So we learned about constructor functions and ES6 classes. But there is actually a third way of implementing prototypal inheritance or delegation, "as we can also call it".

And that third way is to use a function called Object.create, which works in a pretty different way than constructor functions and classes.

Now, with Object.create, there is still the idea of prototypal inheritance. However, there are no prototype properties involved. And also no constructor functions, and no new operator. So instead, we can use Object.create to essentially manually set the prototype of an object, to any other object that we want.

Okay, so if we can set the prototype to any object, let's actually create an object that we want to be the prototype of all the person objects:
*/
const PersonProto
/*
So essentially, let's recreate the person class from earlier, so let's say, person, and I'm calling it person PersonProto, which stands for prototype. Because, again, this object is gonna be literally the prototype of all the person objects.

And now, this is actually just a simple object literal. And so now, what should we actually put in here?:
*/
const PersonProto = {

}
/*
We're gonna put exactly what we put before into the prototype property. And so that was the CalcAge method. So we did that, actually here first manually:
*/
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  console.log(Person.prototype);
  /*
/*
So we added CalcAge to the prototype property of person.

And then here, we also did that, but in a more implicit way:
*/
class PersonCL {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
    //Methods will be added to .prototype property
    calcAge() {
      console.log(2037 - this.birthYear);
    }
}
/*
So JavaScript did that for us behind the scenes.

But now let's take this function here and put into our PersonProto, because we can also write methods in this way, in object literals:
*/
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
};
/*
And so that's actually it. That's all the methods that we want the person objects to inherit. And so we put them in the prototype. And now all we need to do is to actually create a person object with this object here as the prototype. And for that, we can use Object.create. So let's create a person called Steven here:
*/
const steven = Object.create();
/*
And so now, Object.create. And here we pass in the object that we want to be the prototype of the new object. So that's PersonProto:
*/
const steven = Object.create(PersonProto);
/*
And so this will now return a brand new object, that is linked to the prototype that we passed in here. So Steven here is right now an empty object. And it will be linked to this PersonProto object, which will be its prototype.:
*/
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};
const steven = Object.create(PersonProto);
/*
And we can actually already see that here in the console.
*/
console.log(steven); // {}
/*
So as I said, For now, it is empty. But we already have the prototype. And in there, we see we have CalcAge:

{}
__proto__:
calcAge: ƒ calcAge()
__proto__: Object

But now we don't have any properties on the object yet.

So let's quickly fix that. So Stephen.name. So I'm doing it here, just like I would do in any other object literal. And so this is not ideal, of course. But we're gonna fix that in a minute:
*/
steven.name = 'Steven';
steven.birthYear = 2002;
/*
Because of course, we want actually a programmatic way of creating new objects, instead of having to do it like this. But again, for now, we are just worried about the prototypes and the prototype chain here. So we should now be able to say Stephen.CalcAge:
*/
steven.calcAge(); //35
/*
and, yeah, that worked. And so you see that we just like before, implemented prototypal inheritance, but in a completely different way. And now, just to make sure that we're all on the same page here, let's make sure that we really understand this big difference. And so let's take a look at a diagram of what's really going on here.:

<cmg /images/Picture19.jpg>

So here at the right side, we have the way it works where de constructor functions, just as we have been doing it up until this point. So when we use the new operator in constructor functions or classes, it automatically sets the prototype of the instances to the constructors, prototype property. So this happens automatically. And so that's nothing new at this point for you.

Now, on the other hand, with Object.create, we can set the prototype of objects manually to any object that we want. And in this case, we manually set the prototype of the Steven object to the person proto object. And that's it.

Now the two objects are effectively linked through the proto property, just like before. So now looking at properties, or methods in a prototype chain, works just like it worked in function constructors, or classes. And so the prototype chain, in fact, looks exactly the same here. The big difference is that we didn't need any constructor function, and also no prototype property at all, to achieve the exact same thing. So this is actually a bit more straightforward, and a bit more natural. And I guess, that it might also be easier to understand.

However, the reason why I'm showing you this Object.create technique, right at the end, is because in practice, in the real world, this is actually the least used way of implementing prototypal inheritance. However, it's still very important to know exactly how Object.create works, because you will still stumble upon this in the real world. And even more importantly, we will need Object.create to link prototypes in the next lecture, in order to implement inheritance between classes. So with that, we're gonna take object oriented programming to a whole new level. And the Object.create function is gonna be crucial in that, as we will see.

And of course, we can now verify everything I just said, using code here. So we can do Steven.__Proto:
*/
console.log(steven.__proto__ === PersonProto); //true
/*
And so that is now exactly the object that we specified up here. So you see, this is exactly PersonProto. And that makes sense, Because here, we said explicitly, that personal proto should in fact, be the prototype of Steven. And so therefore, this, of course, is gonna be true, and it is. So now that we know exactly what's going on here, let's quickly create another person:
*/
const sarah = Object.create(PersonProto);
/*
So const Sarah = Object.create. And once again, here, use PersonProto. But now, in order to set properties on this object, let's do it in a better way than what we did before. So doing like before is a little bit weird. And it goes against the spirit of creating objects programmatically. So if we're serious about using Object.create, we should implement a function that basically does this work for us. So let's create a new method here. And this can have any name, so I will call it init2:
*/
const PersonProto2 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init2(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven2 = Object.create(PersonProto2);
/*
But this is going to be a little bit similar to the constructor, that we have in classes. So this one will also get a name, or let's say first name, and a birth year. And then just like before, we will use this property and set first name to first name, and then this.birth year, set it to birth year, as well.

And so you see that this looks a bit like the constructor function that we created earlier. However, this has actually nothing to do with any constructor function, because we are not using the new operator to call this we will simply do Sarah.init2:
*/
const sarah2 = Object.create(PersonProto2);
sarah2.init2('Sarah', 1979);
/*
and then we will pass in the arguments. So let's say Sarah, and 1979, for example. And so let's then use CalcAGe here as well:
*/
sarah2.calcAge(); //58
/*
And so then, that just works beautifully as well. So here this keyword will of course, also points to the Sarah object now, but it does so because we explicitly called init on Sarah. So again, this has nothing to do with constructor functions that we saw earlier. And it's also completely different from the constructor method that we have in ES6 classes.

This is just a manual way of basically initializing the object. And init2 could be any name. And indeed, we could have a method like this in any other object literal. So essentially, this is how Object.create works.

So the big takeaway is that Object.create creates a new object, and the prototype of that object will be the object that we passed in. So that's what matters from this video.

And that's very important to understand in the future, when we will implement true class inheritance because for that, we are gonna need Object.create.
*/
