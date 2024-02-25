'use strict';
/*
CODING CHALLENGE #1
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2') //DESTRUCTURING//
*/
const [players1, players2] = game.players;
console.log(players1); // ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"]
console.log(players2); // ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"]

/*
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players.//REST PATTERN//
*/
const [gk, ...fieldPlayers] = players1;
console.log(gk); // Neuer
console.log(fieldPlayers); // ["Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"]
/*
3. Create an array 'allPlayers' containing all players of both teams (22
players) //SPREAD OPERATOR//
*/
const allPlayers = [...players1, ...players2];
console.log(allPlayers); //["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski", "Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"]
/*
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic' // UNPACKING//
*/
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final); //["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski", "Thiago", "Coutinho", "Perisic"]
/*
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2') //NESTED DESTRUCTURING//
*/
const { team1, x: draw, team2 } = game.odds;
//Tambien podriamos meter el .odds en el lado izquierdo:
//const {odds: {team1, x: draw, team2} } = game;
console.log(team1); //1.33
console.log(draw); //3.25
console.log(team2); //6.5
/*
/*
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) (Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
*/
//REST PARAMETER como ARGUMENT, transformara todos los incoming ARGUMENTS en un ARRAY
const printGoals = function (...players) {
  console.log(players); //"Lewandowski", "Gnarby", "Lewandowski", "Hummels"
  console.log(`${players.length} goals were scored.`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'); //4 goals were scored.
printGoals(
  'Davies',
  'Muller',
  'Lewandowski',
  'Kimmich',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt'
); //10 goals were scored.
printGoals(...game.scored); //4 goals were scored.

/*
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator. //LOGICAL OPERATOR//
*/
team1 < team2 && console.log('Team1 is more likely to win.');
team1 > team2 && console.log('Team2 is more likely to win.');
/*
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/
