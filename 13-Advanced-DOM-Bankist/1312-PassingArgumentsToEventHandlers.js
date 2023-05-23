'use strict';

/*
Vamos a crear un efecto bastante chulo en nuestra NAV, donde todos los links se desenfocan si no estamos posicionados sobre ellos o enfoca uno en especifico cuando hacemos hover sobre el, dejando el resto desenfocado!

Este efcto nos ayudara a entender como pasar ARGUMENTS a los EVENTS HANDLERS.

Como siempre tendremos que elegir los ELEMENTOS y realizar el EVENT DELEGATION buscando el PARENT ELEMENT, que sera el NAV CONTAINER
*/

const nav = document.querySelector('.nav');
//La diferencia entre mouseenter y mouseover es que este ultimo si realiza la BUBBLE PHASE, lo cual necesitamos!
nav.addEventListener('mouseover', function (e) {
  //Aqui no usamos el .closest() METHOD porque no hay otros ELEMENTs que puedan ser ejecutados)
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    //Seleccionamos todos los SIBLINGS subiendo al PARENT ELEMENT
    const siblings = link.closest('.nav').querySelectorAll('.nav__link'); //Buscamos el nav__link
    const logo = link.closest('.nav').querySelector('img'); //Buscamos la img TAG

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});

//Lo contrario de mouseover es mouseout, lo cual necesitamos para reestablecer la opacidad de los ELEMENTS a 1:
nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    //Seleccionamos todos los SIBLINGS subiendo al PARENT ELEMENT
    const siblings = link.closest('.nav').querySelectorAll('.nav__link'); //Buscamos el nav__link
    const logo = link.closest('.nav').querySelector('img'); //Buscamos la img TAG

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});

//Hemos repetido demasiado codigo, por lo que vamos a refactorizar nuestro codigo! Podemos ver que lo unico que cambia es la opacidad de 0.5 a 1, por lo que podemos crear un ARGUMENT o PARAMETeR para esta opacidad y luego pasar este argumento a la funcion.
const handleHover = function (event, opacity) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    //Seleccionamos todos los SIBLINGS subiendo al PARENT ELEMENT
    const siblings = link.closest('.nav').querySelectorAll('.nav__link'); //Buscamos el nav__link
    const logo = link.closest('.nav').querySelector('img'); //Buscamos la img TAG

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

//El problema es que ahora queremos pasar VALUEs a esta FUNCTION, debemos indicar a la FUNCTION de utilizar los VALUES de 0.5 o 1
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

//Podriamos incluso mejorar el codigo eliminando los CALLBACK ANONIMOS que hemos creado y usar el BIND METHOD(), no olvidar que BIND devuelve una FUNCTION donde el this VARIABLE sera definido a 0.5 o 1.

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

/*
Si fuesemos a la FUNCTION  handleHover
const handleHover = function (event, opacity) {
  console.log(this); // 0.5 o 1

  resto codigo.....
  }
};
*/
//Podemos sustituir con el this keyword, no olvidar que podemos pasar arios argumentos a nuestra funcion si quisiesemos, en forma de VALUES o ARRAYS o incluso OBJECTs!
const handleHover = function (event, opacity) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    //Seleccionamos todos los SIBLINGS subiendo al PARENT ELEMENT
    const siblings = link.closest('.nav').querySelectorAll('.nav__link'); //Buscamos el nav__link
    const logo = link.closest('.nav').querySelector('img'); //Buscamos la img TAG

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//Como nota comentar que podriamos tambien usar CLOSURES, We can use closures to pass an argument to an event handler. Closures allows us to pass in multiple arguments and it make our code look better!!

const handleHover = function (o) {
  return function (e) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      siblings.forEach(el => {
        if (el !== link) el.style.opacity = o;
      });
      logo.style.opacity = o;
    }
  };
};

//We can log the handleHover(0.1) to see that it returns a function which has access to the argument(opacity value) passed to handleHover() due to closures.

nav.addEventListener('mouseover', handleHover(0.5));

nav.addEventListener('mouseout', handleHover(1));

/*
With closures we can pass as many arguments as we want like we normally pass to a function.

And this works as addEventListener() expects a function which our handleHover() returns.



This method works as addEventListener() expects a callback (anonymous) function as its second argument which our handleHover() returns.

You can confirm this by logging handleHover() to the console console.log(handleHover(0.5))

The main or the part which is most confusing and interesting at the same time is that how this function returned by handleHover() still has access to the arguments passed to handleHover().

This becomes possible only with the help of CLOSURES.

There is a lecture on this in section 10 where jonas talks about closures in detail. If you like you can review that, but still here's my take on closures

A function always retains the access to variables that they had at the time of their creation(birth) no matter where the are called.

OR

A function always remembers all the variable available to it at it's birthplace.

This means that our anonymous function that we return will always have access to all the variables and function declared inside the handleHover() (including the arguments) as the birthplace of our anonymous function is handleHover().

This ability of the function to "remember" becomes possible due to scope chain.

When a function is declared a scope chain is established with the First level being the variables declared inside it and argument  passed to it. The Second level will be the scope of its ancestor (in our case the handleHover) till it reaches the global scope(window object) with the final level being null.

This is an important point that just like prototypal chain the final level for any scope chain is null

When a function starts to look for a variable it will first start to look at its local scope(First Level). If it found the desired variable it will stop looking any further down the scope chain. If no variable is found it will start to look in the next level and repeat the same process either till it finds the variable or it reaches null(in this case we get an error).

I hope this will help you to get a clear image regarding closures, but if there is any parts that are still confusing or if you like to dig deeper I recommend you to read this:

https://javascript.info/closure#lexical-environment.

It contains much better explanation regarding scope and closures
*/
