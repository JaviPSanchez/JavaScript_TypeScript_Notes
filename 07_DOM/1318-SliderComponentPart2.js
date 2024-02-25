'use strict';

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slides = document.querySelectorAll('.slide');
/*
En esta seccion continuamos con el SLIDER, vamos a añadir los tres botones inferiores para seleccionar las fotos:
*/

//Tenesmo el codigo del SLIDER hecho en la PART 1:
let currentSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`)
  );
};

goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};
const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', previousSlide);

//////////////////KEYWORD /////////////////////

//Ahora pasamos a los pequeños dots de la parte inferior, aunque antes de eso vamos a crear el codigo que nos permitira interactuar con el keybord, es decir, con las flechas.

document.addEventListener('keydown', function (e) {
  console.log(e); //Al presionar una tecla obtenemos un OBJECT:
  /*
  KeyboardEvent {isTrusted: true, key: "ArrowRight", code: "ArrowRight", location: 0, ctrlKey: false, …}
  */
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') previousSlide();
  //Podemos hacer lo mismo con el right botton pero usando SHORT CIRCUITING:
  e.key === 'ArrowRight' && nextSlide();
});

////////////////////DOTS/////////////////////

//Empezamos seleccionando el DOT CONATINER:

const dotContainer = document.querySelector('.dots');

//Creamos los dots dentro del ELEMENT DIV con la class="dots__dot" y el DATA ATTRIBUTE data-slide="number of slide".

const createDots = function () {
  slides.forEach(function (slide, index) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
};
createDots(); // Se nos crean los dots

//Ahora los hacemos funcionar añadiendo un EVENT HANDLER usando el EVENT DELEGATION

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    currentSlide = +e.target.dataset.slide;
    goToSlide(currentSlide);
    activateDot(currentSlide);
  }
});

//Ahora queremos que dependiendo de la slide en la que estemos, aparezca el dot sombreado, esto lo conseguiremos asignando una class especial: dots__dot--active.

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
activateDot(0); //Para activar al inico el dot.

//Si quisiesemos que nuestra pagina empieze desde la parte superior, es decir, donde nace la NAV BAR, podemos hacer:

const startTop = function () {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
};

// Initialization
const init = function () {
  startTop();
  goToSlide(0); // immediately go to slide 0 at start of app
  createDots();
  activateDot(0); // start with filled in
};
