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
