import "./main.css";

/*

Write a function that returns the values sorted by descending count
(the element that appears the most should appear first, the element
with the least, last).

Then sort the values alphabetically, ascending (A-Z)
Say you had an array:
['keyboard', 'mouse', 'keyboard', 'mouse', 'typewriter'] 

Your function should return:
['keyboard 2', 'mouse 2', 'typewriter 1']
*/

const transactions = ["keyboard", "mouse", "keyboard", "mouse", "typewriter"];

function groupTransactions(transactions: string[]) {
  const itemsGroupByCount = transactions;

  return itemsGroupByCount;
}

console.log(groupTransactions(transactions));
