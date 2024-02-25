'use strict';

const Person = function (firstname, birthYear) {
  //Instance properties
  this.firstname = firstname;
  this.birthYear = birthYear;
};
const jonas = new Person('Jonas', 1991);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge(); //46

/*
Let's now check out prototypal inheritance and the prototype chain on built in objects such as arrays.

But actually let's start this lecture by inspecting some of the stuff that we just talked about in the last lecture. And we will keep using this person example that we have been building.
*/
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species); //Homo Sapiens

// So let's start by taking a look at:

console.log(jonas.__proto__);
/*
{species: "Homo Sapiens", calcAge: ƒ, constructor: ƒ}
calcAge: ƒ ()
species: "Homo Sapiens"
constructor: ƒ (firstname, birthYear)
__proto__:
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

And we already know that this is the prototype of Jonas which is exactly the prototype property of person.
*/
console.log(jonas.__proto__ === Person.prototype); //true
/*
And so therefore it is this object which contains the caclAge method that we defined earlier. So here:

"Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};" 

and also the property species (species: "Homo Sapiens"), but now let's actually move up in the prototype chain and essentially take a look at the prototype of Jonas's prototype.
*/
console.log(jonas.__proto__.__proto__);
/*
And do you remember from the last video, what that's gonna be? Well, let's see:

{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

And it is indeed the prototype property of object. So that's why you can see
that constructor is the object here. "constructor: ƒ Object()"

And then right away, we see this method "hasOwnProperty: ƒ hasOwnProperty()" that we actually already studied in the last video. So this has own property.

And so this is the reason why we can do this:
*/
console.log(jonas.hasOwnProperty('firstName')); //false
/*
So why we can call has own property on Jonas like we did here in one of the earlier videos.

So again, we learned in the last lecture that this works because of the prototype chain and in particular, because this method here is in this prototype of Jonas's prototype.

Okay, but let's take this one step further and check out the prototype of the prototype of the prototype.
*/
console.log(jonas.__proto__.__proto__.__proto__); // null
/*
And do you remember what this one is? That's right. It is null

And so that's because object.prototype is usually the top of the scope chain. So this one is gonna be object.prototype -->

console.log(jonas.__proto__.__proto__);

And so that's the top of the prototype chain.



Now we can also take a look at that strange constructor property that we also saw earlier. So remember person.prototype itself has a constructor property which as we said, will point back to the person itself. So constructor, like this:
*/
console.log(Person.prototype.constructor);
/*
ƒ (firstname, birthYear) {
    Instance properties
    this.firstname = firstname;
    this.birthYear = birthYear;
}
*/
/*
And so here we actually get the function itself.

Now, if we want to inspect that function here we need to use console.dir:
*/
console.dir(Person.prototype.constructor);
/*
ƒ Person(firstname, birthYear)
arguments: (...)
caller: (...)
length: 2
name: "Person"
prototype: {species: "Homo Sapiens", calcAge: ƒ, constructor: ƒ}
__proto__: ƒ ()
[[FunctionLocation]]: 1406-PrototypalInher…uilt-InObjects.js:3
[[Scopes]]: Scopes[2]
*/
/*
And so here, indeed we see that the constructor property points back at person.

Now to make things a bit more complicated even, let's now take a look at the prototype of a function. So any function of course is also an object. And so therefore it also has a prototype but maybe this is a bit too confusing. So let's just leave it here.

So I will first show you the prototype of arrays and maybe then we can move a bit further to functions. So actually let's do that now. So let's create an array, just like with any random numbers. So the values here don't matter at all:
*/
const arr = [3, 6, 4, 6, 6, 9, 6];
/*
All I am interested in is now to take a look at the proto property. So the prototype of the array. So let's see:
*/
console.log(arr.__proto__);
/*
And here it is:

[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
__proto__: Object

So this is the prototype of array and you see that here we have all these methods that we already know. So we have fill, we have filter, find, find index and all of these methods that we studied in one of the earlier sections.

And so this is the reason why all the arrays get access to all of these methods So each array does of course not contain all of these methods but instead, each array will inherit these methods from its prototype.

And we can also check out that this prototype has got to be exactly array.prototype which is the constructor function.prototype:
*/
console.log(arr.__proto__ === Array.prototype); //true
/*
So one more time, the prototype property of the constructor is gonna be the prototype of all the objects created by that constructor.

And just like an object using this shorthand: "new Array === []", basically , is the same as using new array.

And so therefore whenever we create an array like this: "const arr = [3, 6, 4, 5, 6, 9, 3]", it is indeed created by the array constructor. And so that's why all of this works behind the scenes.

But of course, this is not yet the end of the prototype chain as we saw in the last video. So let's see:
*/
console.log(arr.__proto__.__proto__);
/*
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()


And so now we are back to having object.prototype. So this again now has hasOwnProperty and then all of these methods here that are available for objects.

And one more time, that is simply because the prototype itself here is an object. And so any object has access to all of these methods.

And if we check the documentation on MDN for example, for filter, then you see that actually the name of the method is array.prototype.filter.

And that is because this filter method, does of course, live in the prototype property of the array constructor: Array.prototype.method(). So one more time you can see that the prototypal inheritance is really a mechanism for reusing code.

So all of these built-in methods here have to exist only once somewhere in the JavaScript engine and then all the arrays in our code get access to the functions through the prototype chain and prototypal inheritance.



So let's actually take this one step further.

So we know at this point, that any array inherits all their methods from it's a prototype. And therefore we can use that knowledge to extend the functionality of arrays even further.

So all we would have to do is to say array.prototype:
*/
Array.prototype.method = function () {};
/*
And then here we can add any new method to this prototype and all the arrays will then inherit it. So let's say that we wanted to create a method which returns all the unique elements of an array. So let's add a method called unique:
*/
Array.prototype.unique = function () {
  new Set(this);
};
/*
So we set the unique property to a function and then to get the unique values of an array all we have to do is to create a new set and pass the array in there. And "this keyboard" is going to be the array on which this method will be called. And so now we just need to put this into an array and spread it like this, as we have already done multiple times before:
*/
Array.prototype.unique = function () {
  return [...new Set(this)];
};
/*
And so we can now use that. So array.unique should now return an array with only the unique values. And so let's see what happens:
*/
console.log(arr.unique()); //(4) [3, 6, 4, 9]
/*
and indeed that worked. Beautiful!!

So just to recap, we added a new method to the prototype property of the array constructor. And so therefore now all arrays will inherit this method. And so we can then call that method on any array that we want.

However, what we just did here. So extending the prototype of a built-in object is generally not a good idea. I mean if you're working just on a small project on your own then I guess you could do this, but really don't get into the habit of doing this for multiple reasons.

The first reason is that the next version of JavaScript might add a method with the same name that we are adding, for example this one here: "arr.unique()", but it might work in a different way.

And so your code will then use that new method which, remember, works differently. And then that will probably break your code.

And the second reason why you shouldn't do this is because when you work on a team of developers, then this is really gonna be a bad idea because if multiple developers implement the same method with a different name then that's just going to create so many bugs that it's just not worth doing this.

So it's just a nice and fun experiment... but in practice, you should probably not do it.

Now for a little bit of fun to finish this video. Let's take a look at some more built-in objects here in the console. So for example, we can select this DOM element here:

<h1>Object Oriented Programming (OOP) With JavaScript</h1>

This H1. So that's:
*/
const h1 = document.querySelector('h1');

/*
and we already know that all the DOM elements are behind the scenes objects. And so let's take a look at this object.
*/
console.log(h1); //<h1>Object Oriented Programming (OOP) With JavaScript</h1>
/*
Well, that doesn't really work. So that just gives us the object. So let's try a console.dir:
*/
console.dir(h1); //tocho....
/*
h1
accessKey: ""
align: ""
ariaAtomic: null
ariaAutoComplete: null
ariaBusy: null
ariaChecked: null
ariaColCount: null
ariaColIndex: null
ariaColSpan: null
ariaCurrent: null
ariaDescription: null
ariaDisabled: null
ariaExpanded: null
ariaHasPopup: null
ariaHidden: null
ariaKeyShortcuts: null
ariaLabel: null
ariaLevel: null
ariaLive: null
ariaModal: null
ariaMultiLine: null
ariaMultiSelectable: null
ariaOrientation: null
ariaPlaceholder: null
ariaPosInSet: null
ariaPressed: null
ariaReadOnly: null
ariaRelevant: null
ariaRequired: null
ariaRoleDescription: null
ariaRowCount: null
ariaRowIndex: null
ariaRowSpan: null
ariaSelected: null
ariaSetSize: null
ariaSort: null
ariaValueMax: null
ariaValueMin: null
ariaValueNow: null
ariaValueText: null
assignedSlot: null
attributeStyleMap: StylePropertyMap {size: 0}
attributes: NamedNodeMap {length: 0}
autocapitalize: ""
autofocus: false
baseURI: "http://127.0.0.1:63996/"
childElementCount: 0
childNodes: NodeList [text]
children: HTMLCollection []
classList: DOMTokenList [value: ""]
className: ""
clientHeight: 190
clientLeft: 0
clientTop: 0
clientWidth: 1233
contentEditable: "inherit"
dataset: DOMStringMap {}
dir: ""
draggable: false
elementTiming: ""
enterKeyHint: ""
firstChild: text
firstElementChild: null
hidden: false
id: ""
innerHTML: "Object Oriented Programming (OOP) With JavaScript"
innerText: "Object Oriented Programming (OOP) With JavaScript"
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: text
lastElementChild: null
localName: "h1"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: script
nextSibling: text
nodeName: "H1"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 190
offsetLeft: 8
offsetParent: body
offsetTop: 206
offsetWidth: 1233
onabort: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onprogress: null
onratechange: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
outerHTML: "<h1>Object Oriented Programming (OOP) With JavaScript</h1>"
outerText: "Object Oriented Programming (OOP) With JavaScript"
ownerDocument: document
parentElement: body
parentNode: body
part: DOMTokenList [value: ""]
prefix: null
previousElementSibling: null
previousSibling: text
scrollHeight: 190
scrollLeft: 0
scrollTop: 0
scrollWidth: 1233
shadowRoot: null
slot: ""
spellcheck: true
style: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
tabIndex: -1
tagName: "H1"
textContent: "Object Oriented Programming (OOP) With JavaScript"
title: ""
translate: true
__proto__: HTMLHeadingElement


And so now we get the actual object. So here we have all this different stuff and all these properties and methods that we already worked with.

But what I'm interested in here is the prototype and you see that the prototype is an HTML heading element:

__proto__: HTMLHeadingElement

All right? And so that itself will contain a lot of different stuff, one more time.

__proto__: HTMLHeadingElement
accessKey: (...)
align: (...)
ariaAtomic: (...)
ariaAutoComplete: (...)
ariaBusy: (...)
ariaChecked: (...)
ariaColCount: (...)
ariaColIndex: (...)
ariaColSpan: (...)
ariaCurrent: (...)
ariaDescription: (...)
ariaDisabled: (...)
ariaExpanded: (...)
ariaHasPopup: (...)
ariaHidden: (...)
ariaKeyShortcuts: (...)
ariaLabel: (...)
ariaLevel: (...)
ariaLive: (...)
ariaModal: (...)
ariaMultiLine: (...)
ariaMultiSelectable: (...)
ariaOrientation: (...)
ariaPlaceholder: (...)
ariaPosInSet: (...)
ariaPressed: (...)
ariaReadOnly: (...)
ariaRelevant: (...)
ariaRequired: (...)
ariaRoleDescription: (...)
ariaRowCount: (...)
ariaRowIndex: (...)
ariaRowSpan: (...)
ariaSelected: (...)
ariaSetSize: (...)
ariaSort: (...)
ariaValueMax: (...)
ariaValueMin: (...)
ariaValueNow: (...)
ariaValueText: (...)
assignedSlot: (...)
attributeStyleMap: (...)
attributes: (...)
autocapitalize: (...)
autofocus: (...)
baseURI: (...)
childElementCount: (...)
childNodes: (...)
children: (...)
classList: (...)
className: (...)
clientHeight: (...)
clientLeft: (...)
clientTop: (...)
clientWidth: (...)
contentEditable: (...)
dataset: (...)
dir: (...)
draggable: (...)
elementTiming: (...)
enterKeyHint: (...)
firstChild: (...)
firstElementChild: (...)
hidden: (...)
id: (...)
innerHTML: (...)
innerText: (...)
inputMode: (...)
isConnected: (...)
isContentEditable: (...)
lang: (...)
lastChild: (...)
lastElementChild: (...)
localName: (...)
namespaceURI: (...)
nextElementSibling: (...)
nextSibling: (...)
nodeName: (...)
nodeType: (...)
nodeValue: (...)
nonce: (...)
offsetHeight: (...)
offsetLeft: (...)
offsetParent: (...)
offsetTop: (...)
offsetWidth: (...)
onabort: (...)
onanimationend: (...)
onanimationiteration: (...)
onanimationstart: (...)
onauxclick: (...)
onbeforecopy: (...)
onbeforecut: (...)
onbeforepaste: (...)
onbeforexrselect: (...)
onblur: (...)
oncancel: (...)
oncanplay: (...)
oncanplaythrough: (...)
onchange: (...)
onclick: (...)
onclose: (...)
oncontextmenu: (...)
oncopy: (...)
oncuechange: (...)
oncut: (...)
ondblclick: (...)
ondrag: (...)
ondragend: (...)
ondragenter: (...)
ondragleave: (...)
ondragover: (...)
ondragstart: (...)
ondrop: (...)
ondurationchange: (...)
onemptied: (...)
onended: (...)
onerror: (...)
onfocus: (...)
onformdata: (...)
onfullscreenchange: (...)
onfullscreenerror: (...)
ongotpointercapture: (...)
oninput: (...)
oninvalid: (...)
onkeydown: (...)
onkeypress: (...)
onkeyup: (...)
onload: (...)
onloadeddata: (...)
onloadedmetadata: (...)
onloadstart: (...)
onlostpointercapture: (...)
onmousedown: (...)
onmouseenter: (...)
onmouseleave: (...)
onmousemove: (...)
onmouseout: (...)
onmouseover: (...)
onmouseup: (...)
onmousewheel: (...)
onpaste: (...)
onpause: (...)
onplay: (...)
onplaying: (...)
onpointercancel: (...)
onpointerdown: (...)
onpointerenter: (...)
onpointerleave: (...)
onpointermove: (...)
onpointerout: (...)
onpointerover: (...)
onpointerrawupdate: (...)
onpointerup: (...)
onprogress: (...)
onratechange: (...)
onreset: (...)
onresize: (...)
onscroll: (...)
onsearch: (...)
onseeked: (...)
onseeking: (...)
onselect: (...)
onselectionchange: (...)
onselectstart: (...)
onstalled: (...)
onsubmit: (...)
onsuspend: (...)
ontimeupdate: (...)
ontoggle: (...)
ontransitioncancel: (...)
ontransitionend: (...)
ontransitionrun: (...)
ontransitionstart: (...)
onvolumechange: (...)
onwaiting: (...)
onwebkitanimationend: (...)
onwebkitanimationiteration: (...)
onwebkitanimationstart: (...)
onwebkitfullscreenchange: (...)
onwebkitfullscreenerror: (...)
onwebkittransitionend: (...)
onwheel: (...)
outerHTML: (...)
outerText: (...)
ownerDocument: (...)
parentElement: (...)
parentNode: (...)
part: (...)
prefix: (...)
previousElementSibling: (...)
previousSibling: (...)
scrollHeight: (...)
scrollLeft: (...)
scrollTop: (...)
scrollWidth: (...)
shadowRoot: (...)
slot: (...)
spellcheck: (...)
style: (...)
tabIndex: (...)
tagName: (...)
textContent: (...)
title: (...)
translate: (...)
constructor: ƒ HTMLHeadingElement()
Symbol(Symbol.toStringTag): "HTMLHeadingElement"
get align: ƒ align()
set align: ƒ align()
__proto__: HTMLElement

So let's scroll all the way down. And so this is now an HTML element:

__proto__: HTMLElement

And do you remember these names here from somewhere? Well, these are exactly the types of objects that we talked about in one of the first lectures in the DOM section. Remember that?

So we had this big diagram with all these different types of elements. And so now here we can actually inspect them. And so behind the scenes these different elements are really different like constructor functions.

So if we go down here we should now see element

__proto__: HTMLElement
accessKey: (...)
ariaAtomic: (...)
ariaAutoComplete: (...)
ariaBusy: (...)
ariaChecked: (...)
ariaColCount: (...)
ariaColIndex: (...)
ariaColSpan: (...)
ariaCurrent: (...)
ariaDescription: (...)
ariaDisabled: (...)
ariaExpanded: (...)
ariaHasPopup: (...)
ariaHidden: (...)
ariaKeyShortcuts: (...)
ariaLabel: (...)
ariaLevel: (...)
ariaLive: (...)
ariaModal: (...)
ariaMultiLine: (...)
ariaMultiSelectable: (...)
ariaOrientation: (...)
ariaPlaceholder: (...)
ariaPosInSet: (...)
ariaPressed: (...)
ariaReadOnly: (...)
ariaRelevant: (...)
ariaRequired: (...)
ariaRoleDescription: (...)
ariaRowCount: (...)
ariaRowIndex: (...)
ariaRowSpan: (...)
ariaSelected: (...)
ariaSetSize: (...)
ariaSort: (...)
ariaValueMax: (...)
ariaValueMin: (...)
ariaValueNow: (...)
ariaValueText: (...)
assignedSlot: (...)
attachInternals: ƒ attachInternals()
attributeStyleMap: (...)
attributes: (...)
autocapitalize: (...)
autofocus: (...)
baseURI: (...)
blur: ƒ blur()
childElementCount: (...)
childNodes: (...)
children: (...)
classList: (...)
className: (...)
click: ƒ click()
clientHeight: (...)
clientLeft: (...)
clientTop: (...)
clientWidth: (...)
contentEditable: (...)
dataset: (...)
dir: (...)
draggable: (...)
elementTiming: (...)
enterKeyHint: (...)
firstChild: (...)
firstElementChild: (...)
focus: ƒ focus()
hidden: (...)
id: (...)
innerHTML: (...)
innerText: (...)
inputMode: (...)
isConnected: (...)
isContentEditable: (...)
lang: (...)
lastChild: (...)
lastElementChild: (...)
localName: (...)
namespaceURI: (...)
nextElementSibling: (...)
nextSibling: (...)
nodeName: (...)
nodeType: (...)
nodeValue: (...)
nonce: (...)
offsetHeight: (...)
offsetLeft: (...)
offsetParent: (...)
offsetTop: (...)
offsetWidth: (...)
onabort: (...)
onanimationend: (...)
onanimationiteration: (...)
onanimationstart: (...)
onauxclick: (...)
onbeforecopy: (...)
onbeforecut: (...)
onbeforepaste: (...)
onbeforexrselect: (...)
onblur: (...)
oncancel: (...)
oncanplay: (...)
oncanplaythrough: (...)
onchange: (...)
onclick: (...)
onclose: (...)
oncontextmenu: (...)
oncopy: (...)
oncuechange: (...)
oncut: (...)
ondblclick: (...)
ondrag: (...)
ondragend: (...)
ondragenter: (...)
ondragleave: (...)
ondragover: (...)
ondragstart: (...)
ondrop: (...)
ondurationchange: (...)
onemptied: (...)
onended: (...)
onerror: (...)
onfocus: (...)
onformdata: (...)
onfullscreenchange: (...)
onfullscreenerror: (...)
ongotpointercapture: (...)
oninput: (...)
oninvalid: (...)
onkeydown: (...)
onkeypress: (...)
onkeyup: (...)
onload: (...)
onloadeddata: (...)
onloadedmetadata: (...)
onloadstart: (...)
onlostpointercapture: (...)
onmousedown: (...)
onmouseenter: (...)
onmouseleave: (...)
onmousemove: (...)
onmouseout: (...)
onmouseover: (...)
onmouseup: (...)
onmousewheel: (...)
onpaste: (...)
onpause: (...)
onplay: (...)
onplaying: (...)
onpointercancel: (...)
onpointerdown: (...)
onpointerenter: (...)
onpointerleave: (...)
onpointermove: (...)
onpointerout: (...)
onpointerover: (...)
onpointerrawupdate: (...)
onpointerup: (...)
onprogress: (...)
onratechange: (...)
onreset: (...)
onresize: (...)
onscroll: (...)
onsearch: (...)
onseeked: (...)
onseeking: (...)
onselect: (...)
onselectionchange: (...)
onselectstart: (...)
onstalled: (...)
onsubmit: (...)
onsuspend: (...)
ontimeupdate: (...)
ontoggle: (...)
ontransitioncancel: (...)
ontransitionend: (...)
ontransitionrun: (...)
ontransitionstart: (...)
onvolumechange: (...)
onwaiting: (...)
onwebkitanimationend: (...)
onwebkitanimationiteration: (...)
onwebkitanimationstart: (...)
onwebkitfullscreenchange: (...)
onwebkitfullscreenerror: (...)
onwebkittransitionend: (...)
onwheel: (...)
outerHTML: (...)
outerText: (...)
ownerDocument: (...)
parentElement: (...)
parentNode: (...)
part: (...)
prefix: (...)
previousElementSibling: (...)
previousSibling: (...)
scrollHeight: (...)
scrollLeft: (...)
scrollTop: (...)
scrollWidth: (...)
shadowRoot: (...)
slot: (...)
spellcheck: (...)
style: (...)
tabIndex: (...)
tagName: (...)
textContent: (...)
title: (...)
translate: (...)
constructor: ƒ HTMLElement()
Symbol(Symbol.toStringTag): "HTMLElement"
get accessKey: ƒ accessKey()
set accessKey: ƒ accessKey()
get autocapitalize: ƒ autocapitalize()
set autocapitalize: ƒ autocapitalize()
get autofocus: ƒ autofocus()
set autofocus: ƒ autofocus()
get contentEditable: ƒ contentEditable()
set contentEditable: ƒ contentEditable()
get dataset: ƒ dataset()
get dir: ƒ dir()
set dir: ƒ dir()
get draggable: ƒ draggable()
set draggable: ƒ draggable()
get enterKeyHint: ƒ enterKeyHint()
set enterKeyHint: ƒ enterKeyHint()
get hidden: ƒ hidden()
set hidden: ƒ hidden()
get innerText: ƒ innerText()
set innerText: ƒ innerText()
get inputMode: ƒ inputMode()
set inputMode: ƒ inputMode()
get isContentEditable: ƒ isContentEditable()
get lang: ƒ lang()
set lang: ƒ lang()
get nonce: ƒ nonce()
set nonce: ƒ nonce()
get offsetHeight: ƒ offsetHeight()
get offsetLeft: ƒ offsetLeft()
get offsetParent: ƒ offsetParent()
get offsetTop: ƒ offsetTop()
get offsetWidth: ƒ offsetWidth()
get onabort: ƒ onabort()
set onabort: ƒ onabort()
get onanimationend: ƒ onanimationend()
set onanimationend: ƒ onanimationend()
get onanimationiteration: ƒ onanimationiteration()
set onanimationiteration: ƒ onanimationiteration()
get onanimationstart: ƒ onanimationstart()
set onanimationstart: ƒ onanimationstart()
get onauxclick: ƒ onauxclick()
set onauxclick: ƒ onauxclick()
get onbeforexrselect: ƒ onbeforexrselect()
set onbeforexrselect: ƒ onbeforexrselect()
get onblur: ƒ onblur()
set onblur: ƒ onblur()
get oncancel: ƒ oncancel()
set oncancel: ƒ oncancel()
get oncanplay: ƒ oncanplay()
set oncanplay: ƒ oncanplay()
get oncanplaythrough: ƒ oncanplaythrough()
set oncanplaythrough: ƒ oncanplaythrough()
get onchange: ƒ onchange()
set onchange: ƒ onchange()
get onclick: ƒ onclick()
set onclick: ƒ onclick()
get onclose: ƒ onclose()
set onclose: ƒ onclose()
get oncontextmenu: ƒ oncontextmenu()
set oncontextmenu: ƒ oncontextmenu()
get oncopy: ƒ oncopy()
set oncopy: ƒ oncopy()
get oncuechange: ƒ oncuechange()
set oncuechange: ƒ oncuechange()
get oncut: ƒ oncut()
set oncut: ƒ oncut()
get ondblclick: ƒ ondblclick()
set ondblclick: ƒ ondblclick()
get ondrag: ƒ ondrag()
set ondrag: ƒ ondrag()
get ondragend: ƒ ondragend()
set ondragend: ƒ ondragend()
get ondragenter: ƒ ondragenter()
set ondragenter: ƒ ondragenter()
get ondragleave: ƒ ondragleave()
set ondragleave: ƒ ondragleave()
get ondragover: ƒ ondragover()
set ondragover: ƒ ondragover()
get ondragstart: ƒ ondragstart()
set ondragstart: ƒ ondragstart()
get ondrop: ƒ ondrop()
set ondrop: ƒ ondrop()
get ondurationchange: ƒ ondurationchange()
set ondurationchange: ƒ ondurationchange()
get onemptied: ƒ onemptied()
set onemptied: ƒ onemptied()
get onended: ƒ onended()
set onended: ƒ onended()
get onerror: ƒ onerror()
set onerror: ƒ onerror()
get onfocus: ƒ onfocus()
set onfocus: ƒ onfocus()
get onformdata: ƒ onformdata()
set onformdata: ƒ onformdata()
get ongotpointercapture: ƒ ongotpointercapture()
set ongotpointercapture: ƒ ongotpointercapture()
get oninput: ƒ oninput()
set oninput: ƒ oninput()
get oninvalid: ƒ oninvalid()
set oninvalid: ƒ oninvalid()
get onkeydown: ƒ onkeydown()
set onkeydown: ƒ onkeydown()
get onkeypress: ƒ onkeypress()
set onkeypress: ƒ onkeypress()
get onkeyup: ƒ onkeyup()
set onkeyup: ƒ onkeyup()
get onload: ƒ onload()
set onload: ƒ onload()
get onloadeddata: ƒ onloadeddata()
set onloadeddata: ƒ onloadeddata()
get onloadedmetadata: ƒ onloadedmetadata()
set onloadedmetadata: ƒ onloadedmetadata()
get onloadstart: ƒ onloadstart()
set onloadstart: ƒ onloadstart()
get onlostpointercapture: ƒ onlostpointercapture()
set onlostpointercapture: ƒ onlostpointercapture()
get onmousedown: ƒ onmousedown()
set onmousedown: ƒ onmousedown()
get onmouseenter: ƒ onmouseenter()
set onmouseenter: ƒ onmouseenter()
get onmouseleave: ƒ onmouseleave()
set onmouseleave: ƒ onmouseleave()
get onmousemove: ƒ onmousemove()
set onmousemove: ƒ onmousemove()
get onmouseout: ƒ onmouseout()
set onmouseout: ƒ onmouseout()
get onmouseover: ƒ onmouseover()
set onmouseover: ƒ onmouseover()
get onmouseup: ƒ onmouseup()
set onmouseup: ƒ onmouseup()
get onmousewheel: ƒ onmousewheel()
set onmousewheel: ƒ onmousewheel()
get onpaste: ƒ onpaste()
set onpaste: ƒ onpaste()
get onpause: ƒ onpause()
set onpause: ƒ onpause()
get onplay: ƒ onplay()
set onplay: ƒ onplay()
get onplaying: ƒ onplaying()
set onplaying: ƒ onplaying()
get onpointercancel: ƒ onpointercancel()
set onpointercancel: ƒ onpointercancel()
get onpointerdown: ƒ onpointerdown()
set onpointerdown: ƒ onpointerdown()
get onpointerenter: ƒ onpointerenter()
set onpointerenter: ƒ onpointerenter()
get onpointerleave: ƒ onpointerleave()
set onpointerleave: ƒ onpointerleave()
get onpointermove: ƒ onpointermove()
set onpointermove: ƒ onpointermove()
get onpointerout: ƒ onpointerout()
set onpointerout: ƒ onpointerout()
get onpointerover: ƒ onpointerover()
set onpointerover: ƒ onpointerover()
get onpointerrawupdate: ƒ onpointerrawupdate()
set onpointerrawupdate: ƒ onpointerrawupdate()
get onpointerup: ƒ onpointerup()
set onpointerup: ƒ onpointerup()
get onprogress: ƒ onprogress()
set onprogress: ƒ onprogress()
get onratechange: ƒ onratechange()
set onratechange: ƒ onratechange()
get onreset: ƒ onreset()
set onreset: ƒ onreset()
get onresize: ƒ onresize()
set onresize: ƒ onresize()
get onscroll: ƒ onscroll()
set onscroll: ƒ onscroll()
get onseeked: ƒ onseeked()
set onseeked: ƒ onseeked()
get onseeking: ƒ onseeking()
set onseeking: ƒ onseeking()
get onselect: ƒ onselect()
set onselect: ƒ onselect()
get onselectionchange: ƒ onselectionchange()
set onselectionchange: ƒ onselectionchange()
get onselectstart: ƒ onselectstart()
set onselectstart: ƒ onselectstart()
get onstalled: ƒ onstalled()
set onstalled: ƒ onstalled()
get onsubmit: ƒ onsubmit()
set onsubmit: ƒ onsubmit()
get onsuspend: ƒ onsuspend()
set onsuspend: ƒ onsuspend()
get ontimeupdate: ƒ ontimeupdate()
set ontimeupdate: ƒ ontimeupdate()
get ontoggle: ƒ ontoggle()
set ontoggle: ƒ ontoggle()
get ontransitioncancel: ƒ ontransitioncancel()
set ontransitioncancel: ƒ ontransitioncancel()
get ontransitionend: ƒ ontransitionend()
set ontransitionend: ƒ ontransitionend()
get ontransitionrun: ƒ ontransitionrun()
set ontransitionrun: ƒ ontransitionrun()
get ontransitionstart: ƒ ontransitionstart()
set ontransitionstart: ƒ ontransitionstart()
get onvolumechange: ƒ onvolumechange()
set onvolumechange: ƒ onvolumechange()
get onwaiting: ƒ onwaiting()
set onwaiting: ƒ onwaiting()
get onwebkitanimationend: ƒ onwebkitanimationend()
set onwebkitanimationend: ƒ onwebkitanimationend()
get onwebkitanimationiteration: ƒ onwebkitanimationiteration()
set onwebkitanimationiteration: ƒ onwebkitanimationiteration()
get onwebkitanimationstart: ƒ onwebkitanimationstart()
set onwebkitanimationstart: ƒ onwebkitanimationstart()
get onwebkittransitionend: ƒ onwebkittransitionend()
set onwebkittransitionend: ƒ onwebkittransitionend()
get onwheel: ƒ onwheel()
set onwheel: ƒ onwheel()
get outerText: ƒ outerText()
set outerText: ƒ outerText()
get spellcheck: ƒ spellcheck()
set spellcheck: ƒ spellcheck()
get style: ƒ style()
set style: ƒ style()
get tabIndex: ƒ tabIndex()
set tabIndex: ƒ tabIndex()
get title: ƒ title()
set title: ƒ title()
get translate: ƒ translate()
set translate: ƒ translate()
__proto__: Element

And so again,

you can recall that diagram that we inspected there. And then you will remember that HTML element was a child element of element and element itself was a child of node, right?

__proto__: Element
after: ƒ after()
animate: ƒ animate()
append: ƒ append()
ariaAtomic: (...)
ariaAutoComplete: (...)
ariaBusy: (...)
ariaChecked: (...)
ariaColCount: (...)
ariaColIndex: (...)
ariaColSpan: (...)
ariaCurrent: (...)
ariaDescription: (...)
ariaDisabled: (...)
ariaExpanded: (...)
ariaHasPopup: (...)
ariaHidden: (...)
ariaKeyShortcuts: (...)
ariaLabel: (...)
ariaLevel: (...)
ariaLive: (...)
ariaModal: (...)
ariaMultiLine: (...)
ariaMultiSelectable: (...)
ariaOrientation: (...)
ariaPlaceholder: (...)
ariaPosInSet: (...)
ariaPressed: (...)
ariaReadOnly: (...)
ariaRelevant: (...)
ariaRequired: (...)
ariaRoleDescription: (...)
ariaRowCount: (...)
ariaRowIndex: (...)
ariaRowSpan: (...)
ariaSelected: (...)
ariaSetSize: (...)
ariaSort: (...)
ariaValueMax: (...)
ariaValueMin: (...)
ariaValueNow: (...)
ariaValueText: (...)
assignedSlot: (...)
attachShadow: ƒ attachShadow()
attributeStyleMap: (...)
attributes: (...)
baseURI: (...)
before: ƒ before()
childElementCount: (...)
childNodes: (...)
children: (...)
classList: (...)
className: (...)
clientHeight: (...)
clientLeft: (...)
clientTop: (...)
clientWidth: (...)
closest: ƒ closest()
computedStyleMap: ƒ computedStyleMap()
elementTiming: (...)
firstChild: (...)
firstElementChild: (...)
getAnimations: ƒ getAnimations()
getAttribute: ƒ getAttribute()
getAttributeNS: ƒ getAttributeNS()
getAttributeNames: ƒ getAttributeNames()
getAttributeNode: ƒ getAttributeNode()
getAttributeNodeNS: ƒ getAttributeNodeNS()
getBoundingClientRect: ƒ getBoundingClientRect()
getClientRects: ƒ getClientRects()
getElementsByClassName: ƒ getElementsByClassName()
getElementsByTagName: ƒ getElementsByTagName()
getElementsByTagNameNS: ƒ getElementsByTagNameNS()
getInnerHTML: ƒ getInnerHTML()
hasAttribute: ƒ hasAttribute()
hasAttributeNS: ƒ hasAttributeNS()
hasAttributes: ƒ hasAttributes()
hasPointerCapture: ƒ hasPointerCapture()
id: (...)
innerHTML: (...)
insertAdjacentElement: ƒ insertAdjacentElement()
insertAdjacentHTML: ƒ insertAdjacentHTML()
insertAdjacentText: ƒ insertAdjacentText()
isConnected: (...)
lastChild: (...)
lastElementChild: (...)
localName: (...)
matches: ƒ matches()
namespaceURI: (...)
nextElementSibling: (...)
nextSibling: (...)
nodeName: (...)
nodeType: (...)
nodeValue: (...)
onbeforecopy: (...)
onbeforecut: (...)
onbeforepaste: (...)
onfullscreenchange: (...)
onfullscreenerror: (...)
onsearch: (...)
onwebkitfullscreenchange: (...)
onwebkitfullscreenerror: (...)
outerHTML: (...)
ownerDocument: (...)
parentElement: (...)
parentNode: (...)
part: (...)
prefix: (...)
prepend: ƒ prepend()
previousElementSibling: (...)
previousSibling: (...)
querySelector: ƒ querySelector()
querySelectorAll: ƒ querySelectorAll()
releasePointerCapture: ƒ releasePointerCapture()
remove: ƒ remove()
removeAttribute: ƒ removeAttribute()
removeAttributeNS: ƒ removeAttributeNS()
removeAttributeNode: ƒ removeAttributeNode()
replaceChildren: ƒ replaceChildren()
replaceWith: ƒ replaceWith()
requestFullscreen: ƒ requestFullscreen()
requestPointerLock: ƒ requestPointerLock()
scroll: ƒ scroll()
scrollBy: ƒ scrollBy()
scrollHeight: (...)
scrollIntoView: ƒ scrollIntoView()
scrollIntoViewIfNeeded: ƒ scrollIntoViewIfNeeded()
scrollLeft: (...)
scrollTo: ƒ scrollTo()
scrollTop: (...)
scrollWidth: (...)
setAttribute: ƒ setAttribute()
setAttributeNS: ƒ setAttributeNS()
setAttributeNode: ƒ setAttributeNode()
setAttributeNodeNS: ƒ setAttributeNodeNS()
setPointerCapture: ƒ setPointerCapture()
shadowRoot: (...)
slot: (...)
tagName: (...)
textContent: (...)
toggleAttribute: ƒ toggleAttribute()
webkitMatchesSelector: ƒ webkitMatchesSelector()
webkitRequestFullScreen: ƒ webkitRequestFullScreen()
webkitRequestFullscreen: ƒ webkitRequestFullscreen()
constructor: ƒ Element()
Symbol(Symbol.toStringTag): "Element"
Symbol(Symbol.unscopables): {slot: true, prepend: true, append: true, replaceChildren: true, before: true, …}
get ariaAtomic: ƒ ariaAtomic()
set ariaAtomic: ƒ ariaAtomic()
get ariaAutoComplete: ƒ ariaAutoComplete()
set ariaAutoComplete: ƒ ariaAutoComplete()
get ariaBusy: ƒ ariaBusy()
set ariaBusy: ƒ ariaBusy()
get ariaChecked: ƒ ariaChecked()
set ariaChecked: ƒ ariaChecked()
get ariaColCount: ƒ ariaColCount()
set ariaColCount: ƒ ariaColCount()
get ariaColIndex: ƒ ariaColIndex()
set ariaColIndex: ƒ ariaColIndex()
get ariaColSpan: ƒ ariaColSpan()
set ariaColSpan: ƒ ariaColSpan()
get ariaCurrent: ƒ ariaCurrent()
set ariaCurrent: ƒ ariaCurrent()
get ariaDescription: ƒ ariaDescription()
set ariaDescription: ƒ ariaDescription()
get ariaDisabled: ƒ ariaDisabled()
set ariaDisabled: ƒ ariaDisabled()
get ariaExpanded: ƒ ariaExpanded()
set ariaExpanded: ƒ ariaExpanded()
get ariaHasPopup: ƒ ariaHasPopup()
set ariaHasPopup: ƒ ariaHasPopup()
get ariaHidden: ƒ ariaHidden()
set ariaHidden: ƒ ariaHidden()
get ariaKeyShortcuts: ƒ ariaKeyShortcuts()
set ariaKeyShortcuts: ƒ ariaKeyShortcuts()
get ariaLabel: ƒ ariaLabel()
set ariaLabel: ƒ ariaLabel()
get ariaLevel: ƒ ariaLevel()
set ariaLevel: ƒ ariaLevel()
get ariaLive: ƒ ariaLive()
set ariaLive: ƒ ariaLive()
get ariaModal: ƒ ariaModal()
set ariaModal: ƒ ariaModal()
get ariaMultiLine: ƒ ariaMultiLine()
set ariaMultiLine: ƒ ariaMultiLine()
get ariaMultiSelectable: ƒ ariaMultiSelectable()
set ariaMultiSelectable: ƒ ariaMultiSelectable()
get ariaOrientation: ƒ ariaOrientation()
set ariaOrientation: ƒ ariaOrientation()
get ariaPlaceholder: ƒ ariaPlaceholder()
set ariaPlaceholder: ƒ ariaPlaceholder()
get ariaPosInSet: ƒ ariaPosInSet()
set ariaPosInSet: ƒ ariaPosInSet()
get ariaPressed: ƒ ariaPressed()
set ariaPressed: ƒ ariaPressed()
get ariaReadOnly: ƒ ariaReadOnly()
set ariaReadOnly: ƒ ariaReadOnly()
get ariaRelevant: ƒ ariaRelevant()
set ariaRelevant: ƒ ariaRelevant()
get ariaRequired: ƒ ariaRequired()
set ariaRequired: ƒ ariaRequired()
get ariaRoleDescription: ƒ ariaRoleDescription()
set ariaRoleDescription: ƒ ariaRoleDescription()
get ariaRowCount: ƒ ariaRowCount()
set ariaRowCount: ƒ ariaRowCount()
get ariaRowIndex: ƒ ariaRowIndex()
set ariaRowIndex: ƒ ariaRowIndex()
get ariaRowSpan: ƒ ariaRowSpan()
set ariaRowSpan: ƒ ariaRowSpan()
get ariaSelected: ƒ ariaSelected()
set ariaSelected: ƒ ariaSelected()
get ariaSetSize: ƒ ariaSetSize()
set ariaSetSize: ƒ ariaSetSize()
get ariaSort: ƒ ariaSort()
set ariaSort: ƒ ariaSort()
get ariaValueMax: ƒ ariaValueMax()
set ariaValueMax: ƒ ariaValueMax()
get ariaValueMin: ƒ ariaValueMin()
set ariaValueMin: ƒ ariaValueMin()
get ariaValueNow: ƒ ariaValueNow()
set ariaValueNow: ƒ ariaValueNow()
get ariaValueText: ƒ ariaValueText()
set ariaValueText: ƒ ariaValueText()
get assignedSlot: ƒ assignedSlot()
get attributeStyleMap: ƒ attributeStyleMap()
get attributes: ƒ attributes()
get childElementCount: ƒ childElementCount()
get children: ƒ children()
get classList: ƒ classList()
set classList: ƒ classList()
get className: ƒ className()
set className: ƒ className()
get clientHeight: ƒ clientHeight()
get clientLeft: ƒ clientLeft()
get clientTop: ƒ clientTop()
get clientWidth: ƒ clientWidth()
get elementTiming: ƒ elementTiming()
set elementTiming: ƒ elementTiming()
get firstElementChild: ƒ firstElementChild()
get id: ƒ id()
set id: ƒ id()
get innerHTML: ƒ innerHTML()
set innerHTML: ƒ innerHTML()
get lastElementChild: ƒ lastElementChild()
get localName: ƒ localName()
get namespaceURI: ƒ namespaceURI()
get nextElementSibling: ƒ nextElementSibling()
get onbeforecopy: ƒ onbeforecopy()
set onbeforecopy: ƒ onbeforecopy()
get onbeforecut: ƒ onbeforecut()
set onbeforecut: ƒ onbeforecut()
get onbeforepaste: ƒ onbeforepaste()
set onbeforepaste: ƒ onbeforepaste()
get onfullscreenchange: ƒ onfullscreenchange()
set onfullscreenchange: ƒ onfullscreenchange()
get onfullscreenerror: ƒ onfullscreenerror()
set onfullscreenerror: ƒ onfullscreenerror()
get onsearch: ƒ onsearch()
set onsearch: ƒ onsearch()
get onwebkitfullscreenchange: ƒ onwebkitfullscreenchange()
set onwebkitfullscreenchange: ƒ onwebkitfullscreenchange()
get onwebkitfullscreenerror: ƒ onwebkitfullscreenerror()
set onwebkitfullscreenerror: ƒ onwebkitfullscreenerror()
get outerHTML: ƒ outerHTML()
set outerHTML: ƒ outerHTML()
get part: ƒ part()
set part: ƒ part()
get prefix: ƒ prefix()
get previousElementSibling: ƒ previousElementSibling()
get scrollHeight: ƒ scrollHeight()
get scrollLeft: ƒ scrollLeft()
set scrollLeft: ƒ scrollLeft()
get scrollTop: ƒ scrollTop()
set scrollTop: ƒ scrollTop()
get scrollWidth: ƒ scrollWidth()
get shadowRoot: ƒ shadowRoot()
get slot: ƒ slot()
set slot: ƒ slot()
get tagName: ƒ tagName()
__proto__: Node

And so therefore the prototype of element is gonna be node:

__proto__: Node

So if we scroll all the way down here then you see indeed node, and now this one is event target.

__proto__: Node
ATTRIBUTE_NODE: 2
CDATA_SECTION_NODE: 4
COMMENT_NODE: 8
DOCUMENT_FRAGMENT_NODE: 11
DOCUMENT_NODE: 9
DOCUMENT_POSITION_CONTAINED_BY: 16
DOCUMENT_POSITION_CONTAINS: 8
DOCUMENT_POSITION_DISCONNECTED: 1
DOCUMENT_POSITION_FOLLOWING: 4
DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32
DOCUMENT_POSITION_PRECEDING: 2
DOCUMENT_TYPE_NODE: 10
ELEMENT_NODE: 1
ENTITY_NODE: 6
ENTITY_REFERENCE_NODE: 5
NOTATION_NODE: 12
PROCESSING_INSTRUCTION_NODE: 7
TEXT_NODE: 3
appendChild: ƒ appendChild()
baseURI: (...)
childNodes: (...)
cloneNode: ƒ cloneNode()
compareDocumentPosition: ƒ compareDocumentPosition()
contains: ƒ contains()
firstChild: (...)
getRootNode: ƒ getRootNode()
hasChildNodes: ƒ hasChildNodes()
insertBefore: ƒ insertBefore()
isConnected: (...)
isDefaultNamespace: ƒ isDefaultNamespace()
isEqualNode: ƒ isEqualNode()
isSameNode: ƒ isSameNode()
lastChild: (...)
lookupNamespaceURI: ƒ lookupNamespaceURI()
lookupPrefix: ƒ lookupPrefix()
nextSibling: (...)
nodeName: (...)
nodeType: (...)
nodeValue: (...)
normalize: ƒ normalize()
ownerDocument: (...)
parentElement: (...)
parentNode: (...)
previousSibling: (...)
removeChild: ƒ removeChild()
replaceChild: ƒ replaceChild()
textContent: (...)
constructor: ƒ Node()
Symbol(Symbol.toStringTag): "Node"
get baseURI: ƒ baseURI()
get childNodes: ƒ childNodes()
get firstChild: ƒ firstChild()
get isConnected: ƒ isConnected()
get lastChild: ƒ lastChild()
get nextSibling: ƒ nextSibling()
get nodeName: ƒ nodeName()
get nodeType: ƒ nodeType()
get nodeValue: ƒ nodeValue()
set nodeValue: ƒ nodeValue()
get ownerDocument: ƒ ownerDocument()
get parentElement: ƒ parentElement()
get parentNode: ƒ parentNode()
get previousSibling: ƒ previousSibling()
get textContent: ƒ textContent()
set textContent: ƒ textContent()
__proto__: EventTarget

And so you'll see, this is a huge, huge prototype chain. And only now we are at the end. And so the end is an object and that's it.

__proto__: EventTarget
addEventListener: ƒ addEventListener()
dispatchEvent: ƒ dispatchEvent()
removeEventListener: ƒ removeEventListener()
constructor: ƒ EventTarget()
Symbol(Symbol.toStringTag): "EventTarget"
__proto__: Object


So this prototype chain has easily six or seven levels. And so you see that it can go really, really deep. So if you want to go and check this out by yourself then that would probably be a really nice exercise.

__proto__: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

And finally, let's just also console.dir some random function. So the function doesn't matter. I just want to be able to look at the function. Okay.
*/
console.dir(x => x + 1);
/*
anonymous()
arguments: (...)
caller: (...)
length: 1
name: ""
__proto__: ƒ ()
[[FunctionLocation]]: 1406-PrototypalInher…t-InObjects.js:1548
[[Scopes]]: Scopes[2]

And so, as I mentioned a bit earlier in this video the function itself is also an object. And so therefore it also has a prototype. And in this case to prototype will then contain the methods that we have used previously on functions. So that's apply, bind and call, remember.

__proto__: ƒ ()
apply: ƒ apply()
arguments: (...)
bind: ƒ bind()
call: ƒ call()
caller: (...)
constructor: ƒ Function()
length: 0
name: ""
toString: ƒ toString()
Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
get arguments: ƒ ()
set arguments: ƒ ()
get caller: ƒ ()
set caller: ƒ ()
__proto__: Object

And so once again this is the reason why we can actually call methods on functions. It's because they are objects and objects have prototypes. And in this case, this function prototype. So you can spend a lot more time if you're really interested in exploring all of this.

But once you think you have a good understanding of all the previous lectures then you can move on to the next video which is gonna be the first coding challenge of this section.
*/
