import './main.css';

//Podemos definir una funcion de la forma tradicional:
type AddFnType = (a: number, b: number) => number;
//Pero tambien podemos usar Interfaces:
interface AddFnInterface {
  //Here we have the Anonymous Function
  (a: number, b: number): number;
}

let addType: AddFnType;
let addInterface: AddFnInterface;

addType = (n1: number, n2: number) => {
  return n1 + n2;
};

addInterface = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(addType(5, 5));
console.log(addInterface(5, 5));
