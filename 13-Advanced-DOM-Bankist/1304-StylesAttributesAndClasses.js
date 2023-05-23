'use strict';

/*
En esta leccion aprenderemos sobre STYLEs, ATTRIBUTES & CLASSES y sus herramientas mas importantes!

Seguimos trabajando con el cookie message de la leccion anterior:
*/
//Definimos header
const header = document.querySelector('.header');
//creamos ELEMENT manualmente
const message = document.createElement('div');
//Añadimos css styles
message.classList.add('cookie-message');
//Creamos texto
message.innerHTML =
  'We usa cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
//Situacion cookie
header.append(message);
//Borrar mensaje click
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

////////////////STYLES//////////////////

//Si quisiesemos definir el style de un ELEMENT:

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//Estos styles que definimos, son lo que conocemos como INLINE STYLES, estilos definidos directamente en el DOM. Son los que aparecen en el codigo HTLM.

//Si quisiesemos ver los valores con la STYLE PROPERTIE solo nos dejaria con los INLINE STYLES. El background PROPERTIE es un INLINE STYLE, pero height o color no lo son.

console.log(message.style.height); // No vemos nada
console.log(message.style.backgroundColor); //rgb(55, 56, 61)

/*
Como podemos ver, no podemos ver la altura, esto es porque no es un INLINE STYLE, o lo que es lo mismo un STYLE que definimos nosotros manualmente.

No podemos obtener un STYLE que esta definido dentro de la stylesheet dentro de una class. En el ejemplo siguiente no podemos ver la PROPERTIE color:

.cookie-message {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    background-color: white;
    color: #bbb;
    font-size: 1.5rem;
    font-weight: 400;
}
*/
console.log(message.style.color); // nada

//Pero si quisiesemos ver estas propiedades escondidas habria que usar la funcion getComputedStyle(), que como su nombre indica son los valores computados, es decir renderizados en el BROWSER, los valores reales.

console.log(getComputedStyle(message)); // nos aparecera un OBJECT enorme con todas las PROPERTIES y  VALUES. Cogemos los que nos interesen:

console.log(getComputedStyle(message).color); //rgb(187, 187, 187) ahora si!!
console.log(getComputedStyle(message).height); //42.7778px

//Si quisiesemos aumentar la height de nuestra cookie, extraermos los numeros con el METHOD .parseFloat() y sumamos 40px, no olvidemos que el resultado de getComputedStyle() es un STRING.

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

//Con esto aumentamos la altura de nuestra cookie 40px.

//CSS CUSTOM PROPERTIES

//Como sabemos podemos definir VARIABLES en nuestro codigo CSS, por ejemplo los colores como podemos ver a continuacion:
/*
:root {
    --color-primary: #5ec576;
    --color-secondary: #ffcb03;
    --color-tertiary: #ff585f;
    --color-primary-darker: #4bbb7d;
    --color-secondary-darker: #ffbb00;
    --color-tertiary-darker: #fd424b;
    --color-primary-opacity: #5ec5763a;
    --color-secondary-opacity: #ffcd0331;
    --color-tertiary-opacity: #ff58602d;
    --gradient-primary: linear-gradient(to top left, #39b385, #9be15d);
    --gradient-secondary: linear-gradient(to top left, #ffb003, #ffcb03);
  }

Si quisiesemos modificar estos valores desde JS no habria problema con el METHOD .setProperty().
*/

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Con esto modificamos todos los ELEMENTS de nuestro codigo HTML que tiene el --color-primary (que es un verde muy bonito...), por un color naranja cantoso y ortera.

//No obstante, normalmente es mas sencillo cambiar las PROPERTIES seleccionando el ELEMENT y asignandolo un valor a su PROPERTIE:

message.style.height;
message.style.backgroundColor;

////////////////ATTRIBUTES//////////////////

//Los atributos en CSS son toda la informacion que encontramos dentro de las TAG en HTML, como el source attribute src="" o el alternative text alt="" o la clase class="" o el id="" etc... en JS podemos acceder a estos atributos y cambiarlos.

//Vamos a trabajar con el logo:

const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //Bankist logo
console.log(logo.src); // http://127.0.0.1:53565/img/logo.png Esta url es la ABSOLUTA, que es diferente a la RELATIVA a una carpeta, como podemos ver en HTML:
/*
<img
  src="img/logo.png" //Relativa a donde el index.HTML file is located
  alt="Bankist logo"
  class="nav__logo"
  id="logo"
/>;
*/
//Si quisiesemos tener la url RELATIVA hay que usar getAttribute()
console.log(logo.getAttribute('src')); //img/logo.png

//Lo mismo pasara con el href ATTRIBUTE de los links:
/*
<a
  class="footer__link twitter-link"
  target="_blank"
  href="https://twitter.com/jonasschmedtman"
>
  Jonas Schmedtmann
</a>;
*/
const link = document.querySelector('.twitter-link');
console.log(link.href); //https://twitter.com/jonasschmedtman
console.log(link.getAttribute('href')); //https://twitter.com/jonasschmedtman

//Aqui los dos son iguales, porque los dos son ABSOLUTOS.

//Si creamos una de estas PROPERTIES en JS apareceran dentro del OBJECT de ese ELEMENT, pero si no existen esas propiedades o no son un standart, JS no creara nada.

console.log(logo.designer); //undefined --> Esto es porque designer no esta considerado como una propertie standart en las imagenes.

//La unica forma de obtener su contenido es con getAttribute().

console.log(logo.getAttribute('designer')); // Jonas

//Seguimos descubriendo PROPERTIES, el nombre de la class:

console.log(logo.className); //nav__logo

//////SET ATTRIBUTES/////

//Podemos configurar los ELEMENTS de una forma sencilla:

logo.alt = 'Beautiful minimalist Logo'; //Nos aparecera en el HTML esta info que hemos añadido. alt="Beautiful minimalist Logo"

//Otra forma de hacerlo es con el setAttribute METHOD

logo.setAttribute('company', 'Bankish'); //Apareceran estos nuevos ATTRIBUTES en el DOM. company="Bankish"

///////////DATA ATTRIBUTES////////////

//Es importante hablar de unas ATTRIBUTOS especiales, son los DATA ATTRIBUTES. Estos empiezan siempre por la palabra data. Lo que les hace especiales es que estaran dentro de un dataset, los hace muy utiles para trabjar con el UI y especialmente cuando necesitamos guardar datos en el UI o basicamente en el HTML.
/*
<img
          src="img/logo.png"
          alt="Bankist logo"
          class="nav__logo"
          id="logo"
          designer="Jonas"
          data-version-number="3.0"
        />
*/
console.log(logo.dataset.versionNumber); //3.0

//////////////CLASSES////////////

//Finalmente hablar un poco de las CLASSES, algunos de sus METHOD ya los conocemos o hemos utilizado:

logo.classList.add('a', 'b', 'c'); //Podemos pasar multiples values
logo.classList.remove('c', 'f', 'g');
logo.classList.toggle('c');
logo.classList.contains('c'); //Este es como el METHOD .includes() de los ARRAYS

//Hay un METHOD que no debemos usar es el clasName, puesto que sobreescribe todas las classes existentes y somo nos permite poner una clase por ELEMENT.

logo.clasName = 'Javi';
