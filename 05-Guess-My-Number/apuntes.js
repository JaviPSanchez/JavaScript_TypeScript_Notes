/*
*********WHAT'S THE DOM AND DOM MANIPULATION**************

DOM stand for Document Object Model, basicamente nos permite interactuar entre JS  y los elementos de HTML / CSS en el browser. DOM esta automaticamente creado en el momento que cargamos la pagina y guardado como una estructura en arbol, en este arbol cada HTML element es un OBJECT. cada uno de estos OBJECTS sera un chill element, parent element, sibling element and so on...

Nuestro DOM TREE tiene un SPECIAL OBJECT, el llamado entry point, es los que conocemos como:

document.querySelector();

Todo lo que este en el HTML DOCUMENT tiene que estar en el DOM. El DOM es una representacion completa del HTML DOCUMENT.

Hay que saber que DOM no es lo mismo que JS, todos los metodos o properties que encontramos en el DOM para manipular las paginas renderizadas y visualizadas en el browser funcionan gracias a lo que se conocen como WEB API (Application Programming Interface). Que basicamente son como librerias que los BROWSER implementan. Estas LIBRERIES estan creadas en JS y podemos utilizarlas. A parte de la libreria DOM hay muchos otros tipos de APIs.

*******SELECTING AND MANIPULATING ELEMENTS*********

Basicamente en esta leccion podemos ver como utlizar DOM para cambiar valores en nuestro browser, ya sean estos STRINGS o NUMBERS.

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; // con el metodo .value asignamos un nuevo valor a la CLASS '.guess'
console.log(document.querySelector('.guess').value);

**********HANDLING CLICK EVENTS***************

Hasta ahora hemos simplemente modificado valores de ciertos componentes de nuestro codigo HTML, pero si deseamos añadir dinamismo a nuestra pagina al hacer click con el raton o incluso mover el cursor del raton debemos ayudarnos de los EVENT LISTENERs.

Con un EVENT LISTENER podemos esperan que un evento se ejecute y reaccione a ello.

Lo primero que hay que hacer es acceder a nuestro codigo HTML mediante el DOM TREE, como hasta ahora, lo haremos mediante la propiedad "document.querySelector" y seleccionar nuestro elemento con un argumento ('.check').

luego, hay que seleccionar el elemento donde queremos poner nuestro EVENT LISTENER. Para ello utilizaremos el METHOD .addEventListener, lo llamamos con los parentesis () que basicamente es un tipo especial de FUNCTION. Seguidamente, pasamos el TYPE OF EVENT que en este caso es simplemente un click ('click'), sera nuestro primer ARGUMENT para la FUNCTION .addEventListener.

Una vez hecho necesitamos decir a nuestro EVENT que hacer, lo que se conoce como EVENT HANDLER, para ello definimos una FUNCTION la cual albergara el codigo que se ejecutara cuando realicemos un click sobre el check boton. El segundo argumento de nuestra FUNCTION .addEventListener sera otra FUNCTION (No olvidar que las FUNCTIONS no dejan de ser al fin y al cabo valores) que nos especificara que pasara. Por el momento simplemente le pediremos un PRINT de el valor que introduzcamos en el check.

En resumidas cuentas, tenemos una FUNCTION .addEventListerner con dos argumentos:
1/ El nombre del evento que estamos escuchando, que es el 'click'.
2/ una funcion que continen el codigo que se ejecutara cuando el EVENT ocurre.

document.querySelector('.check').addEventListener('click', function(){
console.log(document.querySelector('.guess').value)
});

Hay que tener en cuenta que este EVENT no sera llamado por JS inmediatamente, solo se ejecutara cuando el EVENT sea llamado.

Si quisiesemos ademas añadir otra funcionalidad a nuestra FUNCTION, podriamos decirle que nos indique que es el numero correcto:

document.querySelector('.check').addEventListener('click', function(){
console.log(document.querySelector('.guess').value)

document.querySelector('.message').textContent = '🎉 Correct Number';
});

Por el momento nos centraremos en recuperar RETRIEVE el valor que introduzca el usuario (UI, para ello debemos guardar el NUMBER en una VARIABLE.

document.querySelector('.check').addEventListener('click', function(){
const guess = document.querySelector('.guess').value;
  console.log(typeof guess);
});

Cuando obtenemos algo desde el USER INTERFACE "UI" normalmente desde un INPUT, obtendremos un STRING. Esto nos es util si queremos comparar NUMBERS, por ello utilizamos la FUNCTION NUMBER. 

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
});

A continuacion podemos comenzar a crear la logica de nuestro juego, para ello lo primero que debemos hacer es ver si el input que obtenemos es un VALUE o no y si no hay VALUE deberemos crear una alerta advirtiendonos de introducir uno.

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if(!guess){
      document.querySelector('.message').textContent = '🚦 No Number, Introduce un numero del 1 al 20 idiot!';
} else
});

Si no hay valor, nos dira que es un 0, lo cual quiere decir que es un FALSY VALUE. Hay que tener en cuenta que con el STATEMENT IF/ELSE, obtenemos una BOOLEANA. Al escribir la negacion !guess, decimos que si no hay valor "FALSE" lo convertimos en "TRUE" y se ejecuta la accion sino pasamos a otro STATEMENT.

Continuando con la LOGIC del juego, nos quedara encontrar el numero secreto, deberiamos definirlo fuera de la funcion HANDLER, de esa forma podemos asignarla una propiedad o definirlo como queramos, en nuestro caso, crearemos un valor random entre 0 y 20:

const secretNumber = Math.trunc(Math.random() * 20 + 1); // el +1 es para que nos aparezca el 20 si no nunca saldra debido a que el ultimo numero es 19.9999999, con el +1 conseguimos 20.9999999 que redondeado a la baja con .trunc sale 20.

const secretNumber = Math.trunc(Math.random() * 20 + 1);

El proximo paso es configurar el score o los creditos que nos quedan para adivinar el numero secreto.  creamos una variable fuera de nuestro HANDELER:

let score = 20;

y luego creamos otro if/else STATEMENT dentro de el STATEMENT para saber si el numero es mayor o menor.

else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'The number is lower!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Game Over Mother fucker!';
      document.querySelector('.score').textContent = 0;
    }
  } 

El siguinte paso es manipular el codigo CSS para afectar a nuestra UI, lo ideal seria implementar un background verde cuando acertamos el numero. Por ello lo ideal seria implementar el codigo dentro de nuestro statement de guess === secretNumber:

El siguiente paso es seleccionar todo el <body></body> de nuestro site y escribir la propiedad .style, y el elemento que queremos cambiar, como por ejemplo el background-color. Hay que tener en cuenta que JS no acepta separar elementos con guiones, por ello lo escribimos con su standart de Camel Case:

document.querySelector('body').style.backgroundColor = '#60b347';

Aprovechamos y modificamos tambien el ancho de la class .number a 30 rem, debemos ponerlo todo en STRINGS.

document.querySelector('.number').style.width = '30rem';
*/
// Coding Challenge

// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
/*
document.querySelector('.again').addEventListener('click', );

// 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables.

document.querySelector('.again').addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 20 + 1);
  let score = 20;
});
// 3. Restore the initial conditions of the message, number, score and guess input fields.
document.querySelector('.again').addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 20 + 1);
  let score = 20;
  document.querySelector('.message').textContent = 'Start guessing...!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
// 4. Also restore the original background color (#222) and number width (15rem).
document.querySelector('.again').addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 20 + 1);
  let score = 20;
  document.querySelector('.message').textContent = 'Start guessing...!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

************REFACTORING***********

Cuando escribimos un programa, lo mejor es intentar no repetirse mucho con el codigo, es decir, intentar hacer un DRY CODING. Hay una tecnica que se conoce como REFACTORING, es basicamente reestructrus el codigo sin afectar su comportamiento simplemente eliminando codigo duplicado.

Por ejemplo en nuestro codigo hemos creado dos bloques casi identicos para comparar nuestro .guess con el secretNumber, podemos realizar el TERNARY STATEMENT para simplificar el codigo.

else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secretNumber ? 'Too High': 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Game Over Mother fucker!';
      document.querySelector('.score').textContent = 0;
    }
  }

  Tambien podemos crear una FUNCTION que realice el mismo trabajo que la CLASS .message:

  const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

De esta forma basta con llamar a la funcion en vez de escribir todo el codigo DOM:

displayMessage('🚦 No Number, Introduce un numero del 1 al 20 idiot!');
  */
