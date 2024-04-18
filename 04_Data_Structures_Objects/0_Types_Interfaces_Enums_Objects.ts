import "./main.css";

/*
Interfaces nos permiten describir la estructura de un Objeto
*/

interface Person {
  userName: string;
  year: number;
  now: number;
  height?: number; //Optional property
  greet(phrase: string): void;
  avoir?(phrase: string): void; //Optional method
}

let user1: Person;

user1 = {
  userName: "Javier",
  year: 1987,
  now: new Date().getFullYear(),
  greet(phrase) {
    console.log(
      `${phrase} ${this.userName} and I have ${this.now - this.year} years old`
    );
  },
};

console.log(user1.greet("Hi there - I am"));

/*
Objects Types are almost written as Object but there are subtles differences:
const person: {
    name: string;
    age: number;
}
*/

//Here definig as Object is not enough, or as {}
const person: object = {
  name: "Javier",
  age: 36,
};

// console.log(person.nickname);
// console.log(person.name);

//We have to do like this, TS inference (using the :)
const person2: {
  name: string;
  age: number;
} = {
  name: "Javier",
  age: 36,
};

console.log(person2.name);

//We can just use inference:
const person3 = {
  name: "Javier",
  age: 36,
};
//Nested Objects
const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
  role: readonly [number, string]; //Tuple type: Fixed-length Array
  car: any[]; // A evitar pues podemos asignar cualquier tipo
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
  role: [2, "author"],
  car: ["BMW", "320"],
};

console.log(person3.name);

/*
TS nos permite hacer un .push() a un tuple! cuando no deberiamos!,
para evitar este efecto ideseable añadimos readonly keyword
*/
// product.role[1] = 10;
// product.role.push("admin");
product.car.push("Porsche");
console.log(product);

/*
  Writing Custom Types.
  
  Enum assigns labels to numbers:
  
  const ADMIN = 0;
  const READ_ONLY = 1;
  const AUTHOR = 2;
  
  We can assign our custom numbers or text ADMIN = 'ADMIN'
  */
enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = 200,
}

const user = {
  name: "javier",
  age: 12,
  hobbies: ["coding", "running"],
  role: Role.ADMIN,
};

if (user.role === Role.ADMIN) {
  console.log("is admin");
}
