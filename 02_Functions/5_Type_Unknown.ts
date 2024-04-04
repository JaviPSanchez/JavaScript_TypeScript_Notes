/*
Unknown Type es interesante puesto que nos permite asignar cualquier valor

If something has an unknown type it means: This has a certain type,
but it is, ...well... unknown in this situation.

*/
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Manuel';
// userName = userInput; //Error string = unknown

//Habria que crear una segunda validacion para asignar a un value unknown un string value
if (typeof userInput === 'string') {
  userName = userInput;
}
