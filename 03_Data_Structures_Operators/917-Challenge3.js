'use strict';

/*
CODING CHALLENGE #3
*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔄 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔄 Substitution'],
  [64, '🟡 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔄 Substitution'],
  [72, '🔄 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟡 Yellow card'],
]);

/*
Let's continue with our football betting app! This time, we have a map called
'gameEvents' with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
*/
console.log(gameEvents.values());
/*
{"⚽ GOAL", "🔄 Substitution", "⚽ GOAL", "🔄 Substitution", "🟡 Yellow card", …}
[[Entries]]
0: "⚽ GOAL"
1: "🔄 Substitution"
2: "⚽ GOAL"
3: "🔄 Substitution"
4: "🟡 Yellow card"
5: "🔴 Red card"
6: "🔄 Substitution"
7: "🔄 Substitution"
8: "⚽ GOAL"
9: "⚽ GOAL"
10: "🟡 Yellow card"
*/
const events1 = new Set(gameEvents.values());
console.log(events1);
/*
{"⚽ GOAL", "🔄 Substitution", "🟡 Yellow card", "🔴 Red card"}
[[Entries]]
0: "⚽ GOAL"
1: "🔄 Substitution"
2: "🟡 Yellow card"
3: "🔴 Red card"
*/
const events = [...new Set(gameEvents.values())];
console.log(events);
/*
/*
["⚽ GOAL", "🔄 Substitution", "🟡 Yellow card", "🔴 Red card"]
0: "⚽ GOAL"
1: "🔄 Substitution"
2: "🟡 Yellow card"
3: "🔴 Red card"
*/
/*
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
*/
gameEvents.delete(64);
console.log(gameEvents);
/*
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" ( calculate the average, keep in mind that a game has 90 minutes)
*/
console.log(gameEvents.size); // 10
console.log(`An event happened, on
average, every ${
  90 / gameEvents.size
} minutes`); /*An event happened, on average, every 9 minutes*/
/*
//Si quisiesemos hilar fino y dar el valor exacto de la duracion del partido (y no hacer un HARD CODe de 90), es decir introducir el ultimo valor del ARRAY de una forma automatica 92', podriamos convertir nuestro MAP en un KEY ARRAY y despues sacar el ultimo elemento del ARRAY con el METHOD .pop
*/
const time = [...gameEvents.keys()].pop();
console.log(time); // 92
console.log(`An event happened, on
// average, every ${
  time / gameEvents.size
} minutes`); /*An event happened, on average, every 9.2 minutes*/
/*
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
*/
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}.`);
}
/*
[FIRST HALF] 17: ⚽ GOAL.
[FIRST HALF] 36: 🔄 Substitution.
[FIRST HALF] 36: 🔄 Substitution.
[SECOND HALF] 47: ⚽ GOAL.
[SECOND HALF] 61: 🔄 Substitution.
[SECOND HALF] 69: 🔴 Red card.
[SECOND HALF] 70: 🔄 Substitution.
[SECOND HALF] 72: 🔄 Substitution.
[SECOND HALF] 76: ⚽ GOAL.
[SECOND HALF] 80: ⚽ GOAL.
[SECOND HALF] 92: 🟡 Yellow card.
*/
