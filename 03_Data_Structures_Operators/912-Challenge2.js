/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
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
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
*/
//LOOP OVER ARRAY game.scored
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}.`);
/*
/*
2. Use a loop to calculate the average odd and log it to the console.
*/
//LOOP OVER OBJECT :VALUES
const odds = Object.values(game.odds);
console.log(odds); // ARRAY [1.33, 3.25, 6.5]
let average = 0;
for (const odd of odds) average += odd; //  average = average + odd --> (0 + 1.33 + 0 + 3.25 + 0 + 6.5)
console.log(average); // 11.08
console.log(odds.length); // 3
average /= odds.length; // average = average / 3
console.log(average); //
/*
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw").
Hint: Note how the odds and the game objects have the same property names.
*/
//LOOP OVER OBJECT :ENTIRE OBJECT
for (const formatted of Object.entries(game.odds)) console.log(formatted);
/*
["team1", 1.33]
["x", 3.25]
["team2", 6.5]
*/
for (const [team, odd] of Object.entries(game.odds)) console.log(team, odd);
/*
team1 1.33
x 3.25
team2 6.5
*/
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(`Odd of victory ${team}: ${odd}`);
}
/*
Odd of victory team1: 1.33
Odd of victory x: 3.25
Odd of victory team2: 6.5
*/
for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === 'x' ? 'draw' : 'victory';
  console.log(`Odd of ${teamString}: ${odd}`);
}
/*
Odd of victory : 1.33
Odd of draw: 3.25
Odd of victory : 6.5
*/
for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamString}: ${odd}`);
}
/*
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
*/
/*
NOTA!!! De donde coño sale el game[team] o mejor dicho, porque funciona, si las PROPERTIES team1 y team2 no se llaman team?
Because we want to access properties team1 & team2 inside the game object. Since we can't use the dot . notation to access the properties, we use the [] notation to access them. If you try to use dot notation, you'll get undefined because game.team command will try  to find property team and won't be found because we didn't define it inside game object, thus it will return undefined.
*/
/*
4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/
