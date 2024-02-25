/*
*********EJEMPLO SCOPING****

Vamos a crear una FUNCTION DECLARATION por tener algo de diversidad simplemente.
Nuestra funcion estara definida en un GLOBAL SCOPE porque esta en TOP LEVEL CODE. Esta funcion crea su propio SCOPE que es equivalente al VARIABLE ENVIROMENT de su EXECUTION CONTEXT.

function calcAge(birthYear) {
  const age = 2021 - birthYear;
  return age;
}

Ahora crearemos una GLOBAL VARIABLE llamada firstName y a su vew un console.log llamando a esta variable, podremos ver que la variable firstName no esta dentro del SCOPE de la funcion pero gracias a su ser como GLOBAL VARIABLE y gracias al SCOPE CHAIN vamos a poder usarla en la funcion calcAge.

function calcAge(birthYear) {
  const age = 2021 - birthYear;
  console.log(firstName);
  return age;
}

const firstName = 'Javi';
calcAge(1987);

JS lo primero que hace es buscar si la variable esta dentro de su SCOPE y si no la encuentra hara lo que se llama un VARIABLE LOOK UP, realizando un SCOPE CHAIN para ver si encuentra la variable. Efectivamente el PARENT SCOPE de la funcion CalcAge es el GLOBAL SCOPE luego JS puede usarla. Esto funciona incluso cuando definimos la VARIABLE after la FUNCTION.

Vamos ahora a crear una nueva funcion dentro de la funcion calcAge y la vamos a llamar printAge, esta funcion creara un nuevo SCOPE. En esta funcion crearemos un TERNARY STRING donde buscaremos variables situadas por encima de su SCOPE, la magia de lo que conocemos como SCOPE CHAIN. 

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

Cabe destacar que el SCOPE o area de la variable age, por ejemplo, seria toda el area que abarcan los corchetes del cuerpo de la funcion calcAge pero no alcanza a todo lo que este fuera de su SCOPE, es decir, fuera de la funcion calcAge. Por ello, si intentasemos llamar a la variable age u a la misma funcion calcAge nos saldria el error ReferenceError.

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

Luego queda claro, que desde el GLOBAL SCOPE no podemos acceder a variables dentro de otros SCOPES INFERIORES.

Ahora vamos a crear un BLOCK con el statement IF, creando asi un nuevo BLOCK SCOPE. dentro de este block creraremos una VARIABLE llamada str, que llamara a la VARIABLE externa firstName, podemos comprobar que no hay ningun problema gracias al SCOPE CHAIN, pero no sucedera lo mismo si llamamos a la VARIABLE str desde fuera del BLOCK, nos dira ReferenceError: str is not defined.

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

Ahora vamos a crear una VARIABLE PRE ES6, la tipica VAR, en formato booleana definida como  millenial. Al ser una VARIABLE tipo VAR, si la llamasemos desde fuera del BLOCK SCOPE, si que funcionaria sin problemas, esto es porque las VARIABLEs con el keyword VAR son FUNCTION SCOPE, es decir, ignoran el BLOCK, porque ellas no son BLOCK SCOPE. 

function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const outPut = `Your are ${age}, born in ${birthYear}.`;
    console.log(outPut);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and your are a millenial, ${firstName}.`;
      console.log(str);
    }
    // console.log(str);
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Javi';
calcAge(1987);
// console.log(age);
// printAge();

Ahora vamos a ver una FUNCTION con BLOCK SCOPE, la llamaremos add y la definiremos dentro del BLOCK if:

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

Al intentar llamarla desde fuera del BLOCK SCOPE nos dira que is not defined. Lo cual demuestra que en JS modern functions are also block scopes. PERO ESTO SOLO SUCEDE EN STRICT MODE!!!, si quitamos 'use strict' si funcionara. Pero deberiamos siempre usar strict mode.

Finalmente cabe diferenciar dos conceptos muy diferentes, Reasignar un valor de una variable y definir una variable.

REASIGNAR: basicamente es cambiar el contenido de la variable, si por ejemplo, quisiesemos cambiar el contenido de la variable output dentro de la funcion printAge, reasignandole un nuevo contenido pero desde un INNER SCOPE debemos tener en cuenta que la variable output cambiara! eso si, la variable const outPut debere ser ahora let outPut, sino dara error!

DEFINIR: A diferencia de reasignar aqui estamos definiendo una nueva variable, que puede tener el mismo nombre sin problemas que por ejemplo firstName ya definida en el GLOBAL SCOPE, lo unico es que el JS ENGINE al hacer el LOOK UP, buscara la variable mas cercana y le asignara ese valor.

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


*********VARIABLE ENVIRONMENT: HOISTING AND THE TDZ************

Vamos a intentar llamar a los tres diferentes tipos de variables que podemos crear en JS y ver que pasa, cuando lo hacemos antes de declararlas:

console.log(me); // Aqui nos dira undefined, puesto que las variables VAR son HOISTED, pero HOISTED con el valor UNDEFINED. (esto puede dar problemas, como llamar a funciones no deseadas, debido a que el valor que adoptara VAR ME sera undefined.)
console.log(job); //Nos dara error, puesto que no es HOISTED
console.log(year); //Nos dara error, puesto que no es HOISTED

los valores de job y year son uninitialized, lo cual quiere decir que no hay un valor con el que trabajar. Estos valores se situaran en un zona llamada Temporal Dead Zone "TDZ", esta zona no nos permite acceder a las variables entre el comienzo de su SCOPE (este SCOPE puede ser GLOBAL SCOPE o un BLOCK SCOPE) y el lugar donde la VARIABLE este declarada. En resumidas cuentas, con la VARIABLE JOB no podremos llamarla desde el inicio del codigo hasta la linea donde este situada la variables, una vez pasada esta linea SI podemos llamarla sin problemas!


console.log(addDecl(2, 3)); // 5, Nos permite llamarla debido al HOISTING
console.log(addExpr(2, 3)); //ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
var me = 'Javi';
let job = 'teacher';
const year = 1987;
 Si instentasemos llamar a las funciones con la VARIABLE VAR, serian undifined
console.log(addExpr(2, 3)); // TypeError: addExpr is not a function
console.log(addArrow(2, 3)); //

var addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;


********************THE THIS KEYWORD***************

The THIS KEYWORD o THIS VARIABLE is a special VARIABLE created for every execution context. it points to the "owner" of the functions in which the this keyword is used. This keyword no es estatico, depende de como sea llamada la funcion, asigandole un valor solo cuando la funcion es llamada.

hay 4 formas de llamar a un funcion:
1/ Method  (this = Object that is calling the METHOD)

En el siguiente ejepmplo podemos ver que el this simplemente llamara al OBJECT javi, que es el OWNER

//OBJECT
const javi = {
  year: 2021
  javiYear: 1987,
  name: 'javi',
  place: 'Madrid',
  married: false,
  calcAge: function (){
    // return javi.year - this.javiYear;
    console.log(this);
  }
};
javi.calcAge();

O en el siguuiente ejemplo el padre sera el METHOD javiYear (1987)

//OBJECT
const javi = {
  year: 2021,
  javiYear: 1987,
  name: 'javi',
  place: 'Madrid',
  married: false,
  calcAge: function () {
    return javi.year - this.javiYear;
  },
};
console.log(javi.calcAge()); // 34

2/ Simple function calls (this = undefined)

console.log(this);

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this); //Undefined
};
calcAge(1987);

Las Arrow functions no tienen su propio this keyword, cogera el valor del "this keyword" de su padre,siendo en el siguiente ejemplo el GLOBAL SCOPE, siendo WINDOW OBJECT. Este proceso de adaptar el this de su padre es lo que se conoce como LEXICAL THIS!

console.log(this);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  console.log(this); // Window OBJECT
};
calcAgeArrow(1987);

3/Event Listener ( this = DOM element that the handler is attached to)
4/new, call,apply,bind (mas adelante se veran...)

Por ejemplo si llamasemos al this keyword en un GLOBAL ENVIROMENT el OWNER seria el WINDOW OBJECT. 

*****************PITFALLS for THIS KEYWORD********

REGULAR FUNCTIONS VS ARROW FUNCTIONS

Cuando usar o cuando evitar cada tipo de funcion?

En el siguiente ejemplo, vamos a utilizar una ARROW FUNCTION dentro de un OBJECT podremos comprobar que el THIS no funciona el funciones ARROW, dvolviendo el valor undefined y NaN en los numeros. Utiliza su this keyword de su entorno o lo que es lo mismo su parent. Que en el caso que nos atañe es el GLOBAL SCOPE. No olvidar que los OBJECT no crean su propio BLOCK, es un LITERAL OBJECT. No hay que olvidar que el this en el GLOBAL SCOPE es la window y si vamos dentro firstName esta undefined

const javi = {
  firstName: 'Javi',
  year: 1987,
  currentYear: 2021,
  place: 'Madrid',
  married: false,
  

  calcAgeArrow: () =>
    console.log(
      `Me llamo ${this.firstName} y tengo ${this.currentYear - this.year} años.`
    ),
};
console.log(javi.calcAgeArrow()); // Me llamo undefined y tengo NaN años

Mucho cuidado con utilizar la VARIABLE VAR, puesto que si definimos var firstName, lo que hara es crear una PROPERTIE en el OBJECT WINDOW llamada firstName: 'Javi'

REGLA 1: No usar nunca una ARROW FUNCTION como un METHOD, utilizar una SIMPLE FUNCTION:

const javi = {
  firstName: 'Javi',
  year: 1987,
  currentYear: 2021,
  place: 'Madrid',
  married: false,
  calcAge: function () {
    return `Me llamo ${this.firstName} y tengo ${
      this.currentYear - this.year
    } años.`;
  },
};
console.log(javi.calcAge()); // Me llamo Javi y tengo 34 años.

REGLA 2: Una funcion REGULAR tiene por defecto definida THIS KEYWORD como UNDEFINED.

const year = 1987;

const isMillenial = function () {
  console.log(this); //Undefined por defecto
  console.log(this.year >= 1981 && this.year <= 1996);
};
isMillenial();

Para evitarlo, podemos hacer dos cosas:

1: podemos crear una VARIABLE fuera de esta, que sirva de puente para acceder a su PARENT.

const year = 1987;

const that = this;
const isMillenial = function () {
  console.log(that.year >= 1981 && that.year <= 1996);
};
isMillenial();

2: En ES6 o MODERN JS tenemos la oopcion de crear una ARROW FUNCTION:

const year = 1987;

const isMillenial = () => {
  console.log(this.year >= 1981 && this.year <= 1996);
};
isMillenial();

Una ultima distincion entre REGULAR FUNCTIONS y ARROW FUNCTIONS seria el problema de los argumentos, si nuestra FUNCTION tiene dos argumentos, con las FUNCTIONS EXPRESSION o DECLARATION podemos definir mas argumentos al llamarlas, pero con la ARROW FUNCTION nos dira argumetnos not defined:

const addExpr = function (a, b)'
concole.log(arguments);
return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8); //Creara un tercer argumetno sin problemas, sin embargo en las ARROW esto dara un error!

*******PRIMITIVES & OBJECTS (PRIMITIVE vs REFERENCE TYPES)*************

Vamos a ver como se guardan las PRIMITIVES y los OBJECTS en la memoria, pues lo hacen de forma diferente. Puesto que crea mucha confusion en los Beginners.

Todos los OBJECTS (todo aquello que no es una PRIMITIVE, los REFERENCE TYPES(como son los OBJECT LITERAL, ARRAYS, FUNCTIONS, etc) son guardados en el HEAP, dentro del ENGINE de JS. Por el contrario las PRIMITIVES (Number, String, Boolean, Undefined, Null, Symbol and BigInt) son guaraddas en el CALLSTACK, o lo que es lo mismo en su EXECUTION CONTEXT correspondiente.

Veamos un ejemplo en accion, las PRIMITIVES se declaran en el CALLSTACK, asignandole una ADDRESS y su VALUE correspondiente, 

let lastName = 'Williams';
let oldLastName = lastName; // La misma address que lastName
lastName = 'Davis'; // Cambiamos de address
console.log(lastName);
console.log(oldLastName);

Ahora vamos a ver que con los REFERENCES TYPES, cuando cambiamos una PROPIETY ligada a una ADDRESS determinada, es para todos los OBJECTS

const singleMelissa = {
  firstName: 'Melissa',
  lastName: 'Boyer',
  age: 27,
};
const marriedMelissa = singleMelissa;
marriedMelissa.lastName = 'Palomino-Sanchez';
console.log('Before marriage:', singleMelissa); Melissa Palomino-Sanchez
console.log('After marriage:', marriedMelissa); Melissa Palomino-Sanchez

// marriedMelissa = {}, // No esta permitido asiganr un OBJECT diferente a otro OBJECT, nos salta error!

Ahora bien, si no queremos que la PROPERTY sea la misma para todos los OBJECTs podemos evitarlo creado una union de dos OBJECTS con el atributo .assign

//COPYING TYPES
const singleMelissa2 = {
  firstName: 'Melissa',
  lastName: 'Boyer',
  age: 27,
};
Object.assign({}, singleMelissa2); //Con el .assign lo que hacemos es juntar dos OBJECTS en uno,
const marriedMelissaCopy = Object.assign({}, singleMelissa2);
marriedMelissaCopy.lastName = 'Palomino-Sanchez';
console.log('Before marriage:', singleMelissa2);
console.log('After marriage:', marriedMelissaCopy);

El problema de este metodo es que un SHALLOW COPY (Superficial) copia solo las PROPERTIES en el FIRST LEVEL. Sin embargo un DEEP CLON lo copia todo, pero para poder hacer un DEEP CLON hay que utilizar otras EXTERNAL LIBRARIES como lO-DASH lo veremos mas adelante...

Si cambiamos el ARRAY que hemos añadido en singleMelissa2 en marriedMelissaCopy estaremos manipulando un OBJECT dentro de otro OBJECT, que esta DEEPLY NESTED y se cambiara automaticamente en los dos OBJECT, algo que no nos interesa en este ejemplo, puesto que la familia crece una vez casados, pero no antes. De ahi que sea una SHALLOW COPY.

//COPYING TYPES
const singleMelissa2 = {
  firstName: 'Melissa',
  lastName: 'Boyer',
  age: 27,
  family: ['Gabriel', 'Javier'], // Añadimos un ARRAY que aparecera en los dos OBJECTS.
};
Object.assign({}, singleMelissa2); //Con el .assign lo que hacemos es juntar dos OBJECTS en uno,
const marriedMelissaCopy = Object.assign({}, singleMelissa2);
marriedMelissaCopy.lastName = 'Palomino-Sanchez';
console.log('Before marriage:', singleMelissa2);
console.log('After marriage:', marriedMelissaCopy);





































*/
