'use strict';

/*
En esta seccion veremos el SLIDER COMPONENT.

Lo primero que debemos hacer es poner todas las slides en una sola linea sin solaparse y de forma seguida o "side by side", para ello asignaremos diferentes "distancias" o traslaciones a cada una de las slides.
*/
//Aqui tenemos el HTML:
/*
<section class="section" id="section--3">
  <div class="section__title section__title--testimonials">
    <h2 class="section__description">Not sure yet?</h2>
    <h3 class="section__header">
      Millions of Bankists are already making their lifes simpler.
    </h3>
  </div>

  <div class="slider">
    <div class="slide">
      <img src="img/img-1.jpg" alt="Photo 1" />
    </div>
    <div class="slide">
      <img src="img/img-2.jpg" alt="Photo 2" />
    </div>
    <div class="slide">
      <img src="img/img-3.jpg" alt="Photo 3" />
    </div>
    <div class="slide">
      <img src="img/img-4.jpg" alt="Photo 4" />
    </div>

    <button class="slider__btn slider__btn--left">&larr;</button>
    <button class="slider__btn slider__btn--right">&rarr;</button>
    <div class="dots"></div>
  </div>
</section>;
*/
//Seleccionamos las slides
const slides = document.querySelectorAll('.slide');
//Set side by side each slide, para ello vamos a definir su codigo CSS, queremos aplicar una traslacion a cada foto de 0%, 100%, 200% y 300% que seran la width de cada imagen!
slides.forEach(
  (slide, index) => (slide.style.transform = `translateX(${100 * index}%)`)
);
//En nuestro codigo HTML veremos ahora:
/*
<!-- /////////FOTOS EJEMPLO SLIDER///////// -->
        <div class="slide" style="transform: trasnlateX(0%);"><img src="img/img-1.jpg" alt="Photo 1" /></div>
        <div class="slide" style="transform: trasnlateX(100%);><img src="img/img-2.jpg" alt="Photo 2" /></div>
        <div class="slide" style="transform: trasnlateX(200%);><img src="img/img-3.jpg" alt="Photo 3" /></div>
        <div class="slide" style="transform: trasnlateX(300%);><img src="img/img-4.jpg" alt="Photo 4" /></div>
<!-- ///////////////:::::::::////////////// -->
*/
//Simplemente si quisiesemos ver todas las imagen sobre el BROWSER side by side podemos hacer.

const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.5)'; //Reducimos el slider
slider.style.overflow = 'visible'; //Vemos todas las fotos side by side

//continuamos...

//Seleccionamos los botones laterales del carrusel

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

//Para pasar de slide simplemente tenemos que aplicar la property de trasnform.Al principio estamos en la slide 0, pero cuando queremos pasar de slide incrementamos

let currentSlide = 0;
const maxSlide = slides.length;
//-100%, 0%, 100%, 200%
const goToSlide = function (slide) {
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`)
  );
};
goToSlide(0); //Con esto podemos sustitutir el codigo siguiente:
/*
slides.forEach(
    (slide, index) => (slide.style.transform = `translateX(${100 * index}%)`)
  );
*/
// Next Slide
const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    //The reason is because the length property is not 0 base like an array. So slides.length will be 1,2,3,4 and if we want to use this on the function, the function will go one more time than the number of slides that we have, resulting on a blank space, it will go 0,1,2,3,4. So we need to  subtract 1 to the length this way the function will stop after 0,1,2,3 the same as the number of slides we have.
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};

btnRight.addEventListener('click', nextSlide);

//El siguiente paso es trabajar con el boton del carrusel:
const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

btnLeft.addEventListener('click', previousSlide);

//Podemos implementar este CARRUSEL con el BIND METHOD () tambien:

const slides = document.querySelectorAll('.slide');
const resetSlider = () => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${i * 100}%)`;
  });
};
resetSlider();

const leftArrowBtn = document.querySelector('.slider__btn--left');
const rightArrowBtn = document.querySelector('.slider__btn--right');
let currSlide = 0;

const sliderBothSides = function () {
  this ? currSlide++ : currSlide--;
  if (currSlide < slides.length && currSlide > 0) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${i * 100 - 100 * currSlide}%)`;
    });
  } else {
    currSlide = 0;
    resetSlider();
  }
};

rightArrowBtn.addEventListener('click', sliderBothSides.bind(true));
leftArrowBtn.addEventListener('click', sliderBothSides.bind(false));
