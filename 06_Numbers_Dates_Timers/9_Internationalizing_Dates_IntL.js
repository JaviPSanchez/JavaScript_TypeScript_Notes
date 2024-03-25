'use strict';

/*
En esta leccion explicaremos como adaptar nuestra APP al pais,
currency o uso horario donde estemos o queramos elegir.

JS dispone de una nueva herramienta o API para INTERNACIONALIZAR nuestra APP,
que basicamente lo que hace es formatear los NUMBERS y los STRINGS segun las
diferentes lenguas, con esta API podemos hacer que nuestra APP tenga soporte
en diferentes lenguas para los diferentes usuarios en todo el mundo.

Vamos a ver como formatear FECHAS, empezamos por la fecha del encabezamiento:
*/
/*
Create current date and time
const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getDate() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = `${now.getHours()}`.padStart(2, 0);
const min = `${now.getMinutes()}`.padStart(2, 0);
labelDate.textContent = `${day}/${month}/${year},  ${hour}:${min}`;
*/
//Vamos a hacer desaparecer todo este codigo y reemplazarlo con un API de internacionalizacion, haciendolo todo de forma automatica.

//Para ello podemos crear lo que seria el FORMATTER en una lengua en especial

const now = new Date();
const labelDate = new Intl.DateTimeFormat('en-US');
labelDate;

/*
Esto crea un nuevo FORMATTER, al cual podemos hacerle un .format()
donde pasaremos la fecha que queremos formatear, hoy por ejemplo, y eso es todo!
*/

now;

labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now);
labelDate;

//Si lo queremos para UK:

const uk = new Intl.DateTimeFormat('en-GB').format(now);
uk;

//Lo podemos hacer para Siria:

const sY = new Intl.DateTimeFormat('ar-SY').format(now);
console.log(sY); //‏١٤‏/٤‏/٢٠٢١

/*
Si queremos ver los diferentes paises, basta con googlear, pero sino aqui
la lista: http://www.lingoes.net/en/translator/langcode.htm

Este es el metodo mas directo para formatear FECHAS y HORA, pero podriamos
ir mas alla y añadir mas funcionalidades para dar un toque mas customizada.

Podemos observar que con el API de JS no podemos ver la hora por ejemplo,
lo que podemos hacer es cambiar el OPTIONS OBJECT.

Definimos el OPTIONS OBJECT:
*/
const options = { hour: 'numeric', minute: 'numeric' };

/*
Lo siguiente seria simplemente pasar como segundo argumento en la funcion
Int.DateTimeFormat()
*/

const eS = new Intl.DateTimeFormat('es-ES', options).format(now);
console.log(eS); //15:30

//El problema es que el DATE ha desaparecido.

const options2 = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', //Podemos elegir entre "numeric", "long" (abril) o "2-digit" (04).
  year: 'numeric', //"2-digit"
  weekday: 'long', //"short" or "narrow"
};

const eS2 = new Intl.DateTimeFormat('es-ES', options2).format(now);
eS2;

/*
Tenemos la opcion tambien de obtener todoa la informacion del
user's BROWSER:
*/
// const locale = navigator.language;
// locale

//En nuestra APP actualizaremos ;la fecha y hora dependiendo de quine haga login, la informacion la obtendremos en vez del BROWSER del accounts OBJECT.

const now3 = new Date();
const options3 = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};
// const locale3 = navigator.language; // Info del BROWSER

labelDate.textContent = new Intl.DateTimeFormat('es-ES', options3).format(now3);

//Queda hacer los mismo con las DATES en los movements, no olvidar que ahora el ARRAY que pasamos necesita tambien la

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago.`;

  //Si el resto no se cumple, hacemos:
  /*
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
    */
  //El input date viene de arriba, de la function formatMovementDate
  //Aqui no necesitamos el OBJECT OPTIONS porque no necesitamos la hora o los minutos
  return Intl.DateTimeFormat(locale).format(date);
};

//Podemos tambien usar el method .NumberFormat()

const formatted = new Intl.NumberFormat('fr-FR', {
  notation: 'compact',
}).format(2_000_000_000);

console.log(formatted);
