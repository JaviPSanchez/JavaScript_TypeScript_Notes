'use strict';

/*
*********EJEMPLO SCOPING****

Vamos a crear una FUNCTION DECLARATION por tener algo de diversidad simplemente.
Nuestra funcion estara definida en un GLOBAL SCOPE porque esta en TOP LEVEL CODE. Esta funcion crea su propio SCOPE que es equivalente al VARIABLE ENVIROMENT de su EXECUTION CONTEXT.
*/
function calcAge(birthYear) {
  const age = 2021 - birthYear;
  return age;
}
/*
Ahora crearemos una GLOBAL VARIABLE llamada firstName y a su vew un console.log llamando a esta variable, podremos ver que la variable firstName no esta dentro del SCOPE de la funcion pero gracias a su ser como GLOBAL VARIABLE y gracias al SCOPE CHAIN vamos a poder usarla en la funcion calcAge.
*/
function calcAge(birthYear) {
  const age = 2021 - birthYear;
  console.log(firstName);
  return age;
}

const firstName = 'Javi';
calcAge(1987);
/*
JS lo primero que hace es buscar si la variable esta dentro de su SCOPE y si no la encuentra hara lo que se llama un VARIABLE LOOK UP, realizando un SCOPE CHAIN para ver si encuentra la variable. Efectivamente el PARENT SCOPE de la funcion CalcAge es el GLOBAL SCOPE luego JS puede usarla. Esto funciona incluso cuando definimos la VARIABLE after la FUNCTION.

Vamos ahora a crear una nueva funcion dentro de la funcion calcAge y la vamos a llamar printAge, esta funcion creara un nuevo SCOPE. En esta funcion crearemos un TERNARY STRING donde buscaremos variables situadas por encima de su SCOPE, la magia de lo que conocemos como SCOPE CHAIN. 
*/
function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const outPut = `Your are ${age}, born in ${birthYear}.`;
    console.log(outPut);
  }
  printAge();
  return age;
}

const firstName = 'Javi';
calcAge(1987);
/*
  Cabe destacar que el SCOPE o area de la variable age, por ejemplo, seria toda el area que abarcan los corchetes del cuerpo de la funcion calcAge pero no alcanza a todo lo que este fuera de su SCOPE, es decir, fuera de la funcion calcAge. Por ello, si intentasemos llamar a la variable age u a la misma funcion calcAge nos saldria el error ReferenceError.
  */
function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const outPut = `Your are ${age}, born in ${birthYear}.`;
    console.log(outPut);
  }
  printAge();
  return age;
}

const firstName = 'Javi';
calcAge(1987);
console.log(age);
printAge();
/*
  Luego queda claro, que desde el GLOBAL SCOPE no podemos acceder a variables dentro de otros SCOPES INFERIORES.

Ahora vamos a crear un BLOCK con el statement IF, creando asi un nuevo BLOCK SCOPE. dentro de este block creraremos una VARIABLE llamada str, que llamara a la VARIABLE externa firstName, podemos comprobar que no hay ningun problema gracias al SCOPE CHAIN, pero no sucedera lo mismo si llamamos a la VARIABLE str desde fuera del BLOCK, nos dira ReferenceError: str is not defined.
*/
function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const outPut = `Your are ${age}, born in ${birthYear}.`;
    console.log(outPut);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and your are a millenial, ${firstName}.`;
      console.log(str);
    }
    console.log(str);
  }
  printAge();
  return age;
}

const firstName = 'Javi';
calcAge(1987);
// console.log(age);
// printAge();
/*
Ahora vamos a ver una FUNCTION con BLOCK SCOPE, la llamaremos add y la definiremos dentro del BLOCK if:
*/
function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const outPut = `Your are ${age}, born in ${birthYear}.`;
    console.log(outPut);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and your are a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    add(2, 3);
  }
  printAge();
  return age;
}

const firstName = 'Javi';
calcAge(1987);
// console.log(age);
// printAge();
/*
Al intentar llamarla desde fuera del BLOCK SCOPE nos dira que is not defined. Lo cual demuestra que en JS modern functions are also block scopes. PERO ESTO SOLO SUCEDE EN STRICT MODE!!!, si quitamos 'use strict' si funcionara. Pero deberiamos siempre usar strict mode.

Finalmente cabe diferenciar dos conceptos muy diferentes, Reasignar un valor de una variable y definir una variable.

REASIGNAR: basicamente es cambiar el contenido de la variable, si por ejemplo, quisiesemos cambiar el contenido de la variable output dentro de la funcion printAge, reasignandole un nuevo contenido pero desde un INNER SCOPE debemos tener en cuenta que la variable output cambiara! eso si, la variable const outPut debere ser ahora let outPut, sino dara error!

DEFINIR: A diferencia de reasignar aqui estamos definiendo una nueva variable, que puede tener el mismo nombre sin problemas que por ejemplo firstName ya definida en el GLOBAL SCOPE, lo unico es que el JS ENGINE al hacer el LOOK UP, buscara la variable mas cercana y le asignara ese valor.
*/
function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let outPut = `Your are ${age}, born in ${birthYear}.`;
    console.log(outPut);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //NEW VARIABLE
      const firstName = 'Steven';

      const str = `Oh, and your are a millenial, ${firstName}.`;
      console.log(str);
      //REASSIGNING VARIABLE
      outPut = `NEW OUTPUT!`;

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(outPut);
  }
  printAge();
  return age;
}

const firstName = 'Javi';
calcAge(1987);
// console.log(age);
// printAge();
