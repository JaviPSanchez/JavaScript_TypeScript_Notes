'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

/*
En esta leccion vamos a aprender unas cuantas tecnicas de manipulacion del DOM usandolos junto con el FOR EACH METHOD.

Lo primero que vamos a ver es como aplicar los movimientos que hagamos en nuestro balance, por ello conectaremos mediante DOM, el elemento movements con los movimientos que hagamos del OBJECT account.movements. Seremos capaces de hacer esto, gracias al FOR EACH METHOD que nos permitira LOOPEAR el ARRAY y en cada ITERACION basicamente crear un ELEMENTO y mostrarlo en pantalla.

Por fin vamos a salir de la consola y utilizar el DOM!

Antes de comenzar una APP podemos comenzar escribiendo en el GLOBAL CONTEXT, pero no es una buena practica. Lo primero es crear una FUNCTION:

Hacemos que la funcion reciba los datos de movements, por ello crearemos un parametro movements, aunque podria llamarse como nos de la gana. Esta funcion debe recibir un ARRAY de movements y trabajar con esa info.

Nuestra mision es meter dentro del CONTAINER <div class="movements"> multiples DIV simulando cada movement, luego en cada iteracion debemos crear un nuevo DIV, que sera el <div class="movements__row">.

*/
const displayMovements = function (movements) {
  //Loopeamos over el ARRAY account1, dentro de la funcion necesitamos el current VALUE y el index
  movements.forEach(function (mov, i) {
    //Necesitaremos saber si nuestromovimiento es sacar dinero o ingresar, utilizamos un TERNARY OPERATOR:
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    //Temple Literals son grandes aliados para crear HTML TEMPLATES
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1}</div>
        <div class="movements__value">${mov}</div>
    </div>
    `;
  });
};
//LLamamos a la funcion DE HOF:
displayMovements(account1.movements);

/*
Una vez que hemos creado nuestro TEMPLATE HTML hay que encontrar una forma de añadir este HTML en la pagina en el CONTAINER de los movements, para ello utilizaremos un METHOD llamado insertAdjacentHTML.

Este metodo tenemos que añadirlo a un elemento, tenemos ya predifinidos la mayoria de elementos de nuestra pagina, en nuestro caso:
*/
const containerMovements = document.querySelector('.movements');
//Luego solo nos queda montar nuestro codigo:
containerMovements.insertAdjacentHTML('afterbegin', html);
/*
Resaltar que el METHOD .insertAdjacentHTML acepta dos ARGUMENTOS, el primer argumento, es el STRING con la posicion de como queremos poner nuestro HTML, la opcion de "afterbegin" lo que hace es añadir los nuevos elementos despues del comienzo de nuestro CONTAINER MOVEMENTS. Basicamente es como decir que queremos nuestro "child element" justo despues del comienzo de nuestro "parent element = Container Movements". El segundo argumento es el STRING corresponde al HTML.
*/
/*
El resultado sera añadir los nuevos elementos en el CONTAINER:

<cmg /images/Picture1.jpg>

Podemos observar que seguiran estando antiguas transacciones, no estamos sobrescribiendo nada, y eso deberia ser la primera cosa a hacer!, es decir lo primero que debemos hacer es vaciar el CONATINER y solo despues poder comenzar a volcar nueva informacion.

Utilizaremos la PROPERTIE .innerHTML y le decimos que sea un STRING vacio ''.
*/
//Llamamos a nuestro elemento
containerMovements.innerHTML = ' ';
/*

.innerHTLK podriamos decir que es muy similar a .textContent pero la diferencia es que el segundo devuelve solo texto, mientras que innerHTML devuelve todo incluyendo el HTML, TAGS, etc.

Si usamos un console.log para ver a que nos referimos:
*/
console.log(containerMovements.innerHTML);
/*
<div class="movements__row">
        <div class="movements__type movements__type--deposit">8 deposit</div>
        <div class="movements__value">1300</div>
    </div>
    
    <div class="movements__row">
        <div class="movements__type movements__type--deposit">7 deposit</div>
        <div class="movements__value">70</div>
    </div>
    
    <div class="movements__row">
        <div class="movements__type movements__type--withdrawal">6 withdrawal</div>
        <div class="movements__value">-130</div>
    </div>
    
    <div class="movements__row">
        <div class="movements__type movements__type--withdrawal">5 withdrawal</div>
        <div class="movements__value">-650</div>
    </div>
    
    <div class="movements__row">
        <div class="movements__type movements__type--deposit">4 deposit</div>
        <div class="movements__value">3000</div>
    </div>
    
    <div class="movements__row">
        <div class="movements__type movements__type--withdrawal">3 withdrawal</div>
        <div class="movements__value">-400</div>
    </div>
    
    <div class="movements__row">
        <div class="movements__type movements__type--deposit">2 deposit</div>
        <div class="movements__value">450</div>
    </div>
    
    <div class="movements__row">
        <div class="movements__type movements__type--deposit">1 deposit</div>
        <div class="movements__value">200</div>
    </div>
*/
//PINNNN todo el HTML que hemos creado, mientras que con textcontent es solamente el texto
