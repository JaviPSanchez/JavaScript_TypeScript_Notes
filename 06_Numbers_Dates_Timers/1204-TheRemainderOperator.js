'use strict';

/*
Hay un OPERATOR que no hemos visto, es el REMAINDER OPERATOR, este operador tiene casos de usos especificos y merece la pena verlo a parte.

¿Que es el REMAINDER OPERATOR? es simplemente el resto de una division, lo que queda.
*/
console.log(5 % 2); //1

//Este METHOD es muy util para saber si un numero es par (0, 2, 4, 6, 8, 10...) o inpar (1, 3, 5, 7, 9...).
//Sabemos que un numero es even si es divisible por 2
console.log(4 % 2); //0 Es par
console.log(7 % 2); //1 Es impar

//Creamos una funcion que nos diga si es par o inpar:

const isEven = n => n % 2 === 0;
console.log(isEven(8)); //true
console.log(isEven(53)); //false

//Vamos a crear otro caso practico, seleccionamos todos los rows de nuestros movements y basado en ciertas condiciones vamos a asignar un color.

/*
Creamos un Event Listener en la etiqueta del balance, para que cuando hagamos click, se conviertan los rows pares en naranja.
*/
labelBalance.addEvenListener('click', function () {
  [...document.querySelector('.movements_rows')].forEach(function (row, i) {
    //0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    //0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
/*
<cmg /images/Picture1.jpg>
*/
