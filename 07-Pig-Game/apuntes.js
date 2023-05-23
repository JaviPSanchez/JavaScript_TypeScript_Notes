/*
**********PROJECT 3********

Aqui podemos ver como cada seccion del copdigo HTML servira para cada player:

<section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p> //ID que llamaremos
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">0</p>
        </div>
</section>

En este ejercicio vamos a seleccionar los elementos por su ID (utilizando la almohadilla #) en vez de utilizar la seleccion por CLASS (con el punto). Para ello utilizaremos dos metodos, el ya conocido de querySelector('#tatata') y otro un pelin mas rapido y util cuando tenemos muchos elementos getElementById('tatata').

const score0 = document.querySelector('#score--0'); //Necesidad de utilizar la #
const score1 = document.getElementById('score--1'); // No hace falta.

Aprovechamos para resetear los contadores a 0:

score0.textContent = 0;
score1.textContent = 0;

Siguiente paso es esconder el dado central usando la class hidden, la creamos en CSS:
.hidden{
    display: none;
}
y le llamamos desde nuestro codigo JS:

const dice = document.querySelector('.dice');
dice.classList.add('hidden');

*/
