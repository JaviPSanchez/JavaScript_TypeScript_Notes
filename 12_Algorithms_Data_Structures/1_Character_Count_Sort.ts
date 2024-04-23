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

function groupTransactions(array: string[]) {
  const arrayGrouper: { [key: string]: number } = {};

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (arrayGrouper[item] > 0) {
      arrayGrouper[item]++;
    } else {
      arrayGrouper[item] = 1;
    }
  }

  const sortedArray = Object.keys(arrayGrouper)
    .sort()
    .sort((a, b) => arrayGrouper[b].length - arrayGrouper[a].length)
    .reduce((acc, key) => {
      acc[key] = arrayGrouper[key];
      return acc;
    }, {} as { [key: string]: string[] });

  console.log(sortedArray);

  const itemsGroupedByCount: string[] = [];

  for (const key of Object.keys(sortedArray)) {
    itemsGroupedByCount.push(`${key} ${sortedArray[key].length}`);
  }

  return itemsGroupedByCount;
}

console.log(groupTransactions(transactions));
