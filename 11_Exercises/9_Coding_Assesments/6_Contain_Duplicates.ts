import "./main.css";

/*
Given an integer array nums, return true if any value appears at least twice
in the array, and return false if every element is distinct.

Input: nums = [1,2,3,2]
OutPut: true
*/

const nums = [1, 2, 3, 4, 5, 5];

function containsDuplicate(array: number[]) {
  if (array.length === 0) {
    console.log("Array empty");
  }

  const arrayGrouper: { [key: number]: number } = {};

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (arrayGrouper[item] > 0) {
      arrayGrouper[item]++;
    } else {
      arrayGrouper[item] = 1;
    }
  }

  const entries = Object.values(arrayGrouper);
  console.log("Entries:", entries);

  for (const value of entries) {
    console.log(value);
    if (value > 1) return true;
  }
  return false;
}

console.log(containsDuplicate(nums));
