/*
 ***********************SWITCH********************
 */
// LECTURE: The switch Statement. --> A diferencia del operador condicional else / if, con switch hacemos lo mismo escribiendo un pelin mas, pero a cambio de ser mas organizado y readable. El switch statement cada vez se usa menos.
const day = prompt("Dime un dia de la semana");

switch (
  day // day === "dia de la semana"
) {
  case "monday":
    console.log("Gym time");
    break;
  case "tuesday":
    console.log("Reading time");
    break;
  case "wednesday":
    console.log("Rest day");
    break;
  case "thrusday":
  case "friday":
  case "sunday":
    console.log("Study hard!!");
    console.log("Doing trading");
    break;
  case "saturday":
    console.log("Rest day");
    break;
  default:
    console.log("Elige un dia de la semana");
}
// Si hiciesemos lo mismo con el if /else statements:
if (day === "monday") {
  console.log("Gym time");
} else if (day === "tuesday") {
  console.log("Reading time");
} else if (day === "wednesday") {
  console.log("Rest day");
} else if (day === "thrusday" || day === "friday" || day === "sunday") {
  console.log("Study hard!!");
  console.log("Doing trading");
} else if (day === "saturday") {
  console.log("Rest day");
} else {
  console.log("Elige un dia de la semana");
}
/*
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D
*/

const language = prompt("Elige una lengua");
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers!");
    break;
  case "english":
    console.log("3rd place.");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Elige otra lengua entre las 5 mas habladas.");
}
