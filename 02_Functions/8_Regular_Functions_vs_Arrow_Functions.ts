import './main.css';

/*
*****************PITFALLS for THIS KEYWORD********

REGULAR FUNCTIONS VS ARROW FUNCTIONS

Cuando usar o cuando evitar cada tipo de funcion?

En el siguiente ejemplo, vamos a utilizar una ARROW FUNCTION dentro de un OBJECT
podremos comprobar que "this" no funciona en funciones ARROW, devolviendo el valor
undefined y NaN en los numeros. Utiliza su this keyword de su entorno o lo que es
lo mismo su parent. Que en el caso que nos atañe es el GLOBAL SCOPE. No olvidar que
los OBJECT no crean su propio BLOCK, es un LITERAL OBJECT. No hay que olvidar que el
this en el GLOBAL SCOPE es la window y si vamos dentro firstName esta undefined

REGLA 1: No usar nunca una ARROW FUNCTION como un METHOD, utilizar una SIMPLE FUNCTION:
*/
const javi: {
  firstName: string;
  year: number;
  currentYear: number;
  place: string;
  married: boolean;
  // calcAgeArrow: () => void;
  calcAge: () => void;
} = {
  firstName: 'Javi',
  year: 1987,
  currentYear: 2024,
  place: 'Madrid',
  married: true,

  // calcAgeArrow: () =>
  //   console.log(
  //     `Me llamo ${this.firstName} y tengo ${this.currentYear - this.year} años.`
  //   ),
  calcAge: function () {
    return `Me llamo ${this.firstName} y tengo ${
      this.currentYear - this.year
    } años.`;
  },
};

// console.log(javi.calcAgeArrow()); // Me llamo undefined y tengo NaN años
console.log(javi.calcAge()); // Me llamo Javi y tengo 37 años.
/*
REGLA 2: Una funcion REGULAR tiene por defecto definida this=undefined.
*/
const year = 1987;

const isMillenial = function () {
  // console.log(this); //Undefined por defecto
  console.log(this.year >= 1981 && this.year <= 1996);
};
isMillenial();
/*
Para evitarlo, podemos hacer dos cosas:

1: podemos crear una VARIABLE fuera de esta, que sirva de puente para acceder a su PARENT.
*/

// const that = this;
// const isMillenial = function () {
//   console.log(that.year >= 1981 && that.year <= 1996);
// };
// isMillenial();
/*
2: En ES6 o MODERN JS tenemos la opcion de crear una ARROW FUNCTION:
*/

const isMillenialArrow = () => {
  console.log(this.year >= 1981 && this.year <= 1996);
};
isMillenialArrow();
/*
Una ultima distincion entre REGULAR FUNCTIONS y ARROW FUNCTIONS seria el problema de los argumentos,
si nuestra FUNCTION tiene dos argumentos, con las FUNCTIONS EXPRESSION o DECLARATION podemos definir
mas argumentos al llamarlas, pero con la ARROW FUNCTION nos dira argumentos not defined:
*/
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
const addArrow = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8); //Creara un tercer argumento sin problemas
addArrow(2, 5, 8); //ARROW da un error!
